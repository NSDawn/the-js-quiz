import MCButton from "../components/MCButton"
import CodeBlock from "../components/CodeBlock";
import RotatingWrapper from "../components/RotatingWrapper";

function SceneMCQuestion(props) {

    return (
        <>  

            <RotatingWrapper>
                <div class="question-number">
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
                
            

            <div className="mcq-options">
                <MCButton>{props.Q.choices[0]}</MCButton>
                <MCButton>{props.Q.choices[1]}</MCButton>
                <br />
                <MCButton>{props.Q.choices[2]}</MCButton>
                <MCButton>{props.Q.choices[3]}</MCButton>
            </div>
        </>
    )
}

export default SceneMCQuestion;