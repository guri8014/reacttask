import React from "react";
import ReactDOM from "react-dom/client";
import Body from './Body'
const AppData = () => {
    return(
        <div>
        <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppData />);