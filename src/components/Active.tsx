import React from "react";

interface ActiveProps {
    onClick: () => void;
}

const Active: React.FC<ActiveProps> = ({ onClick }) => {
    return (
        <button className="active" onClick={onClick}>
            Active
        </button>
    );
};
export default Active;


// rounded-r-lg    для кнопки?
