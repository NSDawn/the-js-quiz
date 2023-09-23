import MCButton from "../components/MCButton"

function SceneMCQuestion() {
    return (
        <>
            <pre><code className="language-css">
                let x = 0;
            </code></pre>
            

            <div class="mcq-options">
                <MCButton /> <MCButton/>
                <br />
                <MCButton /> <MCButton />
            </div>
        </>
    )
}

export default SceneMCQuestion;