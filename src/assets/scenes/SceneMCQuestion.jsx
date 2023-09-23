import MCButton from "../components/MCButton"
import CodeBlock from "../components/CodeBlock";
import RotatingWrapper from "../components/RotatingWrapper";

function SceneMCQuestion(props) {

    return (
        <>  

            <RotatingWrapper>
                <div className="question-number">
                    <h2>{props.Q.num}</h2>
                </div>
            </RotatingWrapper>

            <RotatingWrapper>
                <h2> {props.Q.prompt} </h2>
            </RotatingWrapper>

            <RotatingWrapper>
                <CodeBlock lang="js" >
                   {props.Q.code}
                </CodeBlock>
            </RotatingWrapper>
                
            
            <RotatingWrapper>
                <div className="mcq-options">
                    <MCButton>{formatKeywords(props.Q.choices[0])}</MCButton>
                    <MCButton>{formatKeywords(props.Q.choices[1])}</MCButton>
                    <br />
                    <MCButton>{formatKeywords(props.Q.choices[2])}</MCButton>
                    <MCButton>{formatKeywords(props.Q.choices[3])}</MCButton>
                </div>
            </RotatingWrapper>
            
        </>
    )
}

export default SceneMCQuestion;


function formatKeywords(str) {
    if (keywords[str] != null) {
        return keywords[str];
    }

    const numbery_chars = "+-.1234567890"
    if (!str.split("").some((v) => {!numbery_chars.includes(v)})) {
        return <span className="reservedNum">{str}</span>
    }

    return str
}

const keywords = {
    "true" : <span className="reservedBool">{"true"}</span>,
    "false" : <span className="reservedBool">{"false"}</span>,
    "null" : <span className="reservedBool">{"null"}</span>,
    "undefined" : <span className="reservedBool">{"undefined"}</span>,
    "SyntaxError" : <span className="reservedErr">{"SyntaxError"}</span>,
}