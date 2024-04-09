import React, {useState} from "react";

const Counter = (props) => {
    const {onDecrement, onIncrement, onDelete, value, id} = props

    const formatValue = () => {
        return value === 0
            ? "empty"
            : value;
    };

    const getBadgeClasses = () => {
        let classes = "badge m-2 ";
        classes += value === 0 ? "bg-warning" : "bg-primary";
        return classes;
    };

    return (
        <div>
            <span>{props.name}</span>
            <span className={getBadgeClasses()}>{formatValue()}</span>
            <button className='btn btn-primary btn-sm m-2'
                    onClick={() => {
                        onIncrement(id)
                    }}
            >
                +
            </button>
            <button className='btn btn-primary btn-sm m-2'
                    onClick={() => {
                        onDecrement(id)
                    }}
            >
                -
            </button>
            <button className='btn btn-danger btn-sm m-2'
                    onClick={() => {
                        onDelete(id)
                    }}
            >
                Delete
            </button>
        </div>
    );
}
export default Counter;
