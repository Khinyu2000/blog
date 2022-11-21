import Link from "next/link";
import Image from "next/image";
import cn from 'classnames';


type Props = {
    title: string,
    src: string,
    slug?: string
}

const CoverImage = ({ title, src, slug }: Props) => {
    const image = (
        <img 
            src={src}
            alt={`Cover image for ${title}`}
            className={cn("shadow-sm", {
                "hover:shadow-lg transition-shadow duration-150": slug,
                }
            )}
        />
    )
    return (
        <div>
            {slug ? (
                <Link href={slug}>
                    {image}
                </Link>
            ) : (
                image
            )}
        </div>
    );
}

export default CoverImage;





// there is no size optimization for image for width and height
// but the image scales as the view port, and i don't know 



// const CoverImage = () => {
//     return (
//         <div className="w-80 h-80 relative bg-neutral-600">
//             <Link href="/posts/dynamic-routing">
//                     <Image
//                         priority
//                         src="/assets/blog/dynamic-routing/cover.jpg"
//                         alt="dynamic routing"
//                         sizes="100vw"
//                         fill
//                         className="object-cover"
//                     />
//             </Link>
//         </div>
//     );
// }