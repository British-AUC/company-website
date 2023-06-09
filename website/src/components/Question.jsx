import React, { useState } from "react";
import plusicon from "../assets/plus.svg";
import minusicon from "../assets/minus.svg";

export default function Question(props){
    const [isAnswerVisible, setIsAnswerVisible] = useState(false);

    const toggleAnswer = () => {
        setIsAnswerVisible((prevState) => !prevState);
    };

    return (
        <div className="question-container" onClick={toggleAnswer}>
            <div className="left">
                <b>{props.question}</b>
                <p className={`${isAnswerVisible ? "visible" : "hidden"}`}>
                    {props.answer}
                </p>
            </div>
            <div className="right">
                <img 
                    src={isAnswerVisible ? minusicon : plusicon} 
                    alt="Toggle Icon" 
                    id="toggle-button" 
                    onClick={toggleAnswer}
                />
            </div>
        </div>
    )
}