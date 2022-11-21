import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Container from '../components/container';
import Layout from '../components/layout';
import Intro from '../components/intro';
import HeroPost from '../components/hero-post';
import MoreStories from '../components/more-stories';
import { getAllPosts } from '../lib/api'; 
import Post from '../interfaces/post';

type Props = {
  allPosts: Post[]
}


export default function Index({ allPosts }: Props) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <>
      <Layout>
        <Head>
          <title>Next.js Blog Example with Markdown File.</title>
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost 
              title={heroPost.title} 
              coverImage={heroPost.coverImage} 
              date={heroPost.date} 
              excerpt={heroPost.excerpt} 
              author={heroPost.author} 
              slug={heroPost.slug}              
            />
          )}
          {morePosts.length > 0 && (
            <MoreStories 
              posts={morePosts}
            />
          )

          }
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt"
  ]);
  
  return (
    {
      props: {
        allPosts,
      }
    }
  );
}