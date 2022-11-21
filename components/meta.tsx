import { CMS_NAME } from "../lib/constants";
import Head from "next/head";

const Meta = () => {
    return (
        <Head>
            <meta 
                name="description" 
                content={`A statically generated blog example using Next.js and ${CMS_NAME}`}
            />
        </Head>
    );
}

export default Meta;