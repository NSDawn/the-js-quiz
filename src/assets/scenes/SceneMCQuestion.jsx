import MCButton from "../components/MCButton"
import CodeBlock from "../components/CodeBlock";
import RotatingWrapper from "../components/RotatingWrapper";
import "./SceneMCQuestion.css";
import { useGlobal } from "../../AppContextProvider";
import { useEffect } from "react";

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

    function JSClicked() {
        // make the game beatable on mobile bc no hover effect
        if ((window.innerWidth <= 768) && (window.innerHeight <= 1024) && /Mobi|Android/i.test(navigator.userAgent)) {
            answerClicked(true); return true;
        }
        const element = document.getElementsByClassName('embedded-js-choice')[0];
        const cursorStyle = window.getComputedStyle(element).getPropertyValue('cursor');
        if (cursorStyle === 'pointer') {answerClicked(true); return true;}
        return false;
    }

    const isChoiceCorrect = Array.from([0, 1, 2, 3, 4, 5, 6], (v) => {return props.Q.choices[v] === props.Q.correctchoice})
    const isNumCorrect = props.Q.num === props.Q.correctchoice;
    const isEmbeddedCorrect = (props.Q.embedded_choice ?? NaN) === props.Q.correctchoice

    return (
        <>  
            { global.currQuestion == '31' ? 
            <h1>
                The&nbsp;
                <span className="embedded-js-choice" onClick={JSClicked}>
                    J<span>ava</span>S<span>cript</span>
                </span> 
                &nbsp;Quiz
            </h1>
            : null}

            <RotatingWrapper>
                { props.Q.num != null ?
                <div className="question-number" onClick={()=>{answerClicked(isNumCorrect)}}>
                    <h2>{props.Q.num}</h2>
                </div>
                : null}
            </RotatingWrapper>

            <RotatingWrapper> 
                <h2 className="prompt"> 
                    {props.Q.prompt}
                    <span className="embedded-choice" onClick={()=>{answerClicked(isEmbeddedCorrect)}}>{props.Q.embedded_choice ?? ""}</span> 
                    {props.Q.prompttail ?? ""}
                </h2>
            </RotatingWrapper>
            
            {![null, ""].includes(props.Q.code) ? (
            <RotatingWrapper>
                <CodeBlock lang="js" >
                   {props.Q.code}
                </CodeBlock>
            </RotatingWrapper>
            ) : null}
                
            
            <RotatingWrapper>
                <div className="mcq-options">
                    {props.Q.choices.map((v, i) => { 
                        return (
                            <>
                                <MCButton onClick={()=>{answerClicked(isChoiceCorrect[i])}} isCorrect={isChoiceCorrect[i]} key={i}>
                                    {formatKeywords(v)}
                                </MCButton>
                            </>
                        )
                    })}
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
    "ReferenceError" : <span className="reservedErr">{"ReferenceError"}</span>,
    "TypeError" : <span className="reservedErr">{"TypeError"}</span>,
}



