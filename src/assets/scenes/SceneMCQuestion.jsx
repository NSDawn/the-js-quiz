import MCButton from "../components/MCButton"
import CodeBlock from "../components/CodeBlock";
import RotatingWrapper from "../components/RotatingWrapper";
import { useGlobal } from "../../AppContextProvider";

function SceneMCQuestion(props) {

    const [global, setGlobal] = useGlobal();

    function answerClicked(is_correct) {
        if (is_correct) {
            setGlobal({...global, currQuestion: global.currQuestion +1});
            return true;
        }
        if (global.lives == 1) {
            setGlobal({...global, currQuestion: 0, lives: 3});
            return false;
        }
        setGlobal({...global, lives: global.lives -1})
    }

    const isChoiceCorrect = Array.from([0, 1, 2, 3], (v) => {return props.Q.choices[v] == props.Q.correctchoice})
    const isNumCorrect = props.Q.num == props.Q.correctchoice;

    return (
        <>  

            <RotatingWrapper>
                <div className="question-number" onClick={()=>{answerClicked(isNumCorrect)}}>
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
                    <MCButton onClick={()=>{answerClicked(isChoiceCorrect[0])}}>{formatKeywords(props.Q.choices[0])}</MCButton>
                    <MCButton onClick={()=>{answerClicked(isChoiceCorrect[1])}}>{formatKeywords(props.Q.choices[1])}</MCButton>
                    <br />
                    <MCButton onClick={()=>{answerClicked(isChoiceCorrect[2])}}>{formatKeywords(props.Q.choices[2])}</MCButton>
                    <MCButton onClick={()=>{answerClicked(isChoiceCorrect[3])}}>{formatKeywords(props.Q.choices[3])}</MCButton>
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

    const numbery_chars = "+-.1234567890Na"
    if (!str.split("").some((v) => {return !numbery_chars.includes(v)})) {
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

