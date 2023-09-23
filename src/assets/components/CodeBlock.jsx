import './CodeBlock.css'
import { useEffect } from "react";
import Prism from 'prismjs'

function CodeBlock(props) {

    const lang = props.lang ?? "js";
    const tilt = Math.floor(Math.random() * 14) -7;

    useEffect(() => {
        if (typeof window !== "undefined") {
            Prism.highlightAll();
        }
    }, []);

    return (
        <>
            <pre>
                <code className={"language-" + lang }>
                    {props.children}
                </code>
            </pre>
        </>
    )
}

export default CodeBlock;