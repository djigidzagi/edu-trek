import React, { useState } from "react";
import { LeadStatus } from "../slices/studentSlice";
import { Button } from "@mui/material";

// Стиль для кружочков
const statusStyles: Record<LeadStatus, React.CSSProperties> = {
    [LeadStatus.Lead]: { borderColor: "#2ecc71", backgroundColor: "transparent" },
    [LeadStatus.InWork]: { borderColor: "#2ecc71", backgroundColor: "#2ecc71" },
    [LeadStatus.Consultation]: { borderColor: "#2EA8CC", backgroundColor: "#2EA8CC" },
    [LeadStatus.SaveForLater]: { borderColor: "#CCB42E", backgroundColor: "#CCB42E" },
    [LeadStatus.Student]: { borderColor: "#CC772E", backgroundColor: "#CC772E" },
    [LeadStatus.Archive]: { borderColor: "#737975", backgroundColor: "#737975" },
};

interface StatusSelectorProps {
    currentStatus: LeadStatus;
    onStatusChange: (status: LeadStatus) => void;
}

const StatusSelector: React.FC<StatusSelectorProps> = ({ currentStatus, onStatusChange }) => {
    const handleClick = (status: LeadStatus) => {
        onStatusChange(status); // Обновляем статус при клике
    };

    return (
        <div className="status-selector">
            {Object.values(LeadStatus).map((status) => (
                <Button
                    key={status}
                    onClick={() => handleClick(status)}
                    style={{
                        ...statusStyles[status],
                        borderRadius: "50%",
                        width: "5px",
                        height: "5px",
                        marginBottom: "10px",
                        marginRight: "10px",
                        display: "inline-block",
                        borderWidth: "2px",
                    }}
                >{status}
                    {currentStatus === status && (
                        <div
                            style={{
                                width: "15px",
                                height: "15px",
                                backgroundColor: "white",
                                borderRadius: "50%",
                                margin: "auto",
                            }}
                        />
                    )}
                </Button>
            ))}
        </div>
    );
};

export default StatusSelector;