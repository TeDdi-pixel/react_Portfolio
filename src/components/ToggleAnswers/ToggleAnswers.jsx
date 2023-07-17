import { useContext, useState } from "react";
import { DataContext } from "../../App";
import {Link} from "react-router-dom";

function ToggleAnswers() {
    const data = useContext(DataContext);
    const [toggle, setToggle] = useState(Array(data.FAQ.length).fill(false));

    const handleToggleClick = (index) => {
        setToggle((prev) => {
            const updatedToggle = [...prev];
            updatedToggle[index] = !updatedToggle[index];
            return updatedToggle;
        });


    };

    const toggleQuestion = data.FAQ.map((item, index) => {
        return (
            <div
                key={item.id}
                className={
                    toggle[index]
                        ? "toggle-answers__wrapper toggle-answers__wrapper_active"
                        : "toggle-answers__wrapper"
                }
                onClick={() => handleToggleClick(index)}
            >
                <div className={"toggle-answers__question"}>
                    <p className="toggle-answers-question__text">{item.question}</p>
                    <img className={toggle[index] ? 'toggle-answers__arrow toggle-answers__arrow_active' : 'toggle-answers__arrow'} src="./img/Frame 3675534.svg" alt="" />
                </div>
                <div
                    className={
                        toggle[index]
                            ? "toggle-answers__answer toggle-answers__answer_active"
                            : "toggle-answers__answer"
                    }
                >
                    <div style={{ minHeight: 0 }}>{item.answer}</div>
                </div>
            </div>
        );
    });

    return (
        <div className="toggle-answers">
            <h2 className="toggle-answers__title">FAQ</h2>
            {toggleQuestion}
        </div>
    );
}

export default ToggleAnswers;
