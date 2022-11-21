import Container from "./container";
import { EXAMPLE_PATH } from "../lib/constants";

const Footer = () => {
    return (
        <footer className="bg-neutral-50 border-t border-neutral-200">
            <Container>
                <div className="py-28 flex flex-col items-center lg:flex-row">
                    <h3 className="text-4xl font-bold mb-10 tracking-tighter leading-tight text-center lg:text-[2.5rem] lg:text-left lg:mb-0 lg:w-1/2 lg:pr-4">
                        Statically Generated with Next.js.
                    </h3>
                    <div className="font-bold flex flex-col justify-center items-center lg:flex-row lg:pl-4 lg:w-1/2">
                        <a href="#" className=" text-white py-3 px-12 bg-black mb-6 border border-black hover:bg-white hover:text-black transition-colors duration-200 lg:px-8 lg:mb-0">
                            Read Documentation
                        </a>
                        <a href="#" className="mx-3 hover:underline">
                            View on GitHub
                        </a>
                    </div>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;