import Container from "./container";

type Props = {
    preview?: boolean
}

const Alert = ({ preview }: Props) => {
    return (
        <div className="border-b bg-neutral-50 border-neutral-200">
            <Container>
                <div className="text-sm py-2 text-center">
                    {preview ? (
                        <>
                            This page is a preview.
                        </>
                    ) : (
                        <>
                            The source code for this blog is{' '}
                                <a href="#" className="underline hover:text-blue-600 duration-200 transition-colors">
                                    available on Github
                                </a>
                            .    
                        </>
                    )
                    }
                </div>
            </Container>
        </div>
    );
}

export default Alert;