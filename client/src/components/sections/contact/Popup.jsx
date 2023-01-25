import { Alert } from "flowbite-react";
import React from "react";

function Popup() {
    return (
        <Alert color="success" className="absolute">
            Wiadomość wysłana!
        </Alert>
    );
}

export default Popup;
