import { useState } from "react";
const apiUrl = import.meta.env.VITE_HOST;

const HideSubmarine = () => {
    return (
        <form
            action={`${apiUrl}/api/fight/hide`}
            method="POST"
        >
            <button type="submit">Esconder Submarino</button>
        </form>
    );
};

export default HideSubmarine;
