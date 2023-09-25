import React from "react";

const List = (props) => {
    const sortedArr = props.myArr;
    const sortedArrNum = props.arrNumber;

    // const compare = (a, b) => (a < b ? -1 : 1);
    const compareNumbers = (a, b) => (a - b);

    sortedArr.sort();
    sortedArrNum.sort(compareNumbers)

    return (
        <div className="space-beet">
            <h3>
                <span>Нетипизированный массив</span>
                {sortedArr.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </h3>

            <h3>
                <span>Числовой массив</span>
                {sortedArrNum.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </h3>
        </div>
    )
}

export default List;