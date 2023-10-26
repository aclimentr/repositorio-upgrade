import { Link } from "react-router-dom";

export default function Menu(){
    return (
        <header className="headermenu">
            <Link to="">Home</Link>
            <Link to="characters">Characters</Link>
            <Link to="contactpage">Contact</Link>
        </header>
    )
}