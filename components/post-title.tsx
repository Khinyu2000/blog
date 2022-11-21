import React from "react";

type Props = {
    children?: React.ReactNode
}

const PostTitle = ({ children }: Props) => {
    return (
        <h2 className="text-5xl font-bold tracking-tighter leading-tight mb-12 text-center md:text-7xl md:leading-none md:text-left lg:text-8xl ">
            {children}
        </h2>
    );
}

export default PostTitle;