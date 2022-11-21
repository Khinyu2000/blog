import Image from "next/image";
import Link from "next/link";
import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import type Author from "../interfaces/author";

type Props = {
    title: string,
    coverImage: string,
    date: string,
    excerpt: string,
    author: Author,
    slug: string,
}


const HeroPost = ({ 
    title, 
    coverImage, 
    date, 
    excerpt, 
    author, 
    slug 
} : Props) => {
    return (
        <section>
            <div className="mb-8 md:mb-16">
                <CoverImage 
                    title="dynamic routing"
                    src={coverImage}
                    slug="/posts/dynamic-routing"
                />
            </div>
            <div className="mb-20 md:grid md:grid-cols-2 md:gap-x-16 md:mb-28 lg:gap-x-8">
                <div>
                    <h3 className="text-4xl leading-tight mb-4 lg:text-5xl">
                        <Link 
                            href={`/posts/${slug}`}
                            className="hover:underline"
                        >
                            {title}
                        </Link>
                    </h3>
                    <div className="text-lg mb-4 md:mb-0">
                        <DateFormatter dateString={date} />
                    </div>
                </div>
                <div>
                    <p className="text-lg leading-relaxed mb-4">
                        {excerpt}
                    </p>
                    <div>
                        <Avatar name={author.name} picture={author.picture} />
                    </div>
                </div>
            </div>
        </section>
        
    );
}

export default HeroPost;