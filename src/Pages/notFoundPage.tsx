import { Link, Navigate } from "react-router-dom";

export default function NotFoundPage () {
    return (
    <>
        <div>Не туда</div>
        <Link to='/'>На главную</Link>
        </>)
}