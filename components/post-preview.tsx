import Link from "next/link";
import type Author from "../interfaces/author";
import CoverImage from "./cover-image";
import DataFormatter from "./date-formatter";
import Avater from "./avatar";

type Props = {
    title: string,
    coverImage: string,
    date: string,
    excerpt: string,
    author: Author,
    slug: string,
}

const PostPreview = ({
    title,
    coverImage,
    date,
    excerpt,
    author,
    slug,
}: Props) => {
    return (
        <div>
            <div className="mb-5">
                <CoverImage 
                    title={title}
                    src={coverImage}
                    slug={slug}
                />
            </div>
            <h3 className="text-3xl leading-tight mb-4">
                <Link
                    href="/posts/hello-world"
                    className="hover:underline"
                >
                    {title}
                </Link>
            </h3>
            <div className="text-lg mb-4">
                <DataFormatter dateString={date} />
            </div>
            <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
            <Avater 
                name={author.name}
                picture={author.picture}
            />
        </div>
    );
}

export default PostPreview;