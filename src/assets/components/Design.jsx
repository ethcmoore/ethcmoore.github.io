import { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Design = ({ design, index }) => {

    if (design.pages.length == 1) {
        return (
            <figure key={index}>
                <img src={design.pages[0]} />
            </figure>
        )
    } else {
        const [designIndex, setDesignIndex] = useState(0);

        function slideRight() {
            if (designIndex + 1 == design.pages.length) {
                setDesignIndex(0);
            } else {
                setDesignIndex(designIndex + 1);
            }
        }
        function slideLeft() {
            if (designIndex == 0) {
                setDesignIndex(design.pages.length - 1);
            } else {
                setDesignIndex(designIndex - 1);
            }
        }
        function circleClick(event) {
            setDesignIndex(parseInt(event.target.getAttribute("value")));
        }

        return (
            <figure key={index}>
                <img src={design.pages[designIndex]} />
                <div className="indexCircleBox">
                    <BsChevronLeft className="leftArrow" onMouseUp={slideLeft} />
                    <div className="indexCircles">
                        {design.pages.map(
                            (item, index) => (
                                <div key={index} value={index} className={designIndex == index ? 'circle circleActive' : 'circle'} onMouseUp={circleClick}></div>
                            ))
                        }</div>
                    <BsChevronRight className="rightArrow" onMouseUp={slideRight} />
                </div>
            </figure>
        )

    }
}

export default Design
