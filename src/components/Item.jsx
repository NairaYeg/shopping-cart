import { useState, useEffect } from "react";

export function Product({ product, handleChangeState, state }) {
    const [count, setCount] = useState(0);
    const [isDisabled, setDisabled] = useState(false);

    const handleIncrease = () => {
        setCount(count + 1);
    };

    const handleDecrease = () => {
        setCount(count - 1);
    };

    useEffect(() => {
        const newState = state.map((i) => i.id === product.id ? { ...i, count } : i);
        handleChangeState(newState);
        setDisabled(count <= 0);

    }, [count])


    const handleDeleteProduct = () => {
        const newState = state.filter((i) => i.id !== product.id)
        handleChangeState(newState);
    };


    return (
        <div>
            <h4>{product.name}</h4>
            <button onClick={handleIncrease}>+</button>
            <button onClick={handleDecrease} disabled={isDisabled}>-</button>
            <button onClick={handleDeleteProduct}>Delete</button>
            <span> Item Count {count}</span>
        </div >
    );
}
