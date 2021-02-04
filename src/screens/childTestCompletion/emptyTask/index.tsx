import react from "react";

import "./emptyTask.css";


export const EmptyTask:react.FC = () => {
    return <div className="lineOfButtons">
        <div className="button">to</div>
        <div className="button">with</div>
        <div className="button">from</div>
        <div className="button">who</div>
    </div>
}