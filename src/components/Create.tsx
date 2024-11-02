import React from "react";

interface CreateProps {
    onCreateClick: () => void; // Пропс для обробки кліка
}

const Create: React.FC<CreateProps> = ({ onCreateClick }) => {
    return (
        <button className="create-button" onClick={onCreateClick}>
            + Create
        </button>
    );
};

export default Create;
