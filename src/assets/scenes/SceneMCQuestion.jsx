import MCButton from "../components/MCButton"
import CodeBlock from "../components/CodeBlock";

function SceneMCQuestion() {
    return (
        <>
            <CodeBlock lang="js" >
                {
                    "let i = 0; i ++; class yeet{}"
                }
            </CodeBlock>
            

            <div className="mcq-options">
                <MCButton /> <MCButton/>
                <br />
                <MCButton /> <MCButton />
            </div>
        </>
    )
}

export default SceneMCQuestion;