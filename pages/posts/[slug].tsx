import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { getPostSlugs, getPostBySlug } from "../../lib/api"
import Layout from "../../components/layout";
import Container from "../../components/container";
import type PostType from "../../interfaces/post";
import Header from "../../components/header";
import Head from 'next/head';
import PostTitle from "../../components/post-title";
import PostHeader from "../../components/post-header";
import PostBody from "../../components/post-body";
import markdownToHtml from "../../lib/markdownToHtml";

type Props = {
    post: PostType,
    morePosts: PostType[]
    preview?: boolean
}

type Params = {
    params: {
        slug: string,
    }
}


const Post = ({ post, morePosts, preview }: Props) => {
    console.log(`This is ${post.content}`);
    
    const router = useRouter();
    
    if (!router.isFallback && !post?.slug) {
        return <ErrorPage statusCode={404} />
    }
    
    return (
        <Layout preview={preview}>
            <Container>
                <Header />
                {router.isFallback ? (
                    <PostTitle>Loading...</PostTitle>
                ) : (
                    <>
                        <article>
                        <Head>
                            <title>
                                {post.title} | Next.js Blog Example with Markdown.
                                <meta property="og:image" content={post.ogImage.url} />
                            </title>
                        </Head>
                        <PostHeader 
                            title={post.title} 
                            coverImage={post.coverImage} 
                            date={post.date} 
                            author={post.author}                            
                        />
                        <PostBody 
                            content={post.content}
                        />
                        </article>
                    </>
                )}
            </Container>
        </Layout>
    );
}

export async function getStaticPaths() {
    const postSlugs = getPostSlugs();
    const paths =  postSlugs.map(slug => (
        {
            params: {
                slug,
            }
        }
    ));
    return (
        {
            paths, 
            fallback: false,
        }
    );
}

export async function getStaticProps({ params }: Params) {
    const post = getPostBySlug(params.slug, [
        "title",
        "date",
        "slug",
        "author",
        "content",
        "ogImage",
        "coverImage",
    ]);
    const content = await markdownToHtml(post.content || '');
    
    return (
        {
            props: {
                post: {
                    ...post,
                    content
                }
            }
        }
    );
}

export default Post;