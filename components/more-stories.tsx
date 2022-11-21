import PostPreview from "./post-preview";
import type Post from "../interfaces/post";

type Props = {
    posts: Post[]
}


const MoreStories = ({ posts }: Props) => {
    return (
        <section>
           <h2 className="text-5xl font-bold leading-tight tracking-tighter mb-8 md:text-7xl">More Stories</h2> 
           <div className="grid grid-cols-1 gap-y-20 mb-32 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 md:gap-y-32">
                {posts.map(post => 
                    <PostPreview 
                    title={post.title} 
                    coverImage={post.coverImage} 
                    date={post.date} 
                    excerpt={post.excerpt} 
                    author={post.author} 
                    slug={post.slug}                        
                    />
                )}
           </div>
        </section>
    );
}

export default MoreStories;