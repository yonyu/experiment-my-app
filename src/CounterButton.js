import React from "react";

export const CounterButton = () => {

    const [numberOfClicks, setNumberOfClicks] = React.useState(0);
    const handleClick = () => {
        setNumberOfClicks(numberOfClicks + 1);
    };

    return (
        <>
            <p>{numberOfClicks}</p>
            <button onClick={handleClick}>Click me</button>
        </>
    )
}