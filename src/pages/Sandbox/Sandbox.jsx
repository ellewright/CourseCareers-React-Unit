import "./user.css"
import user from "./user.json"

export default function Sandbox() {
    return (
        <div className="card">
            <h2 className="name">{user.name}</h2>
            <div className="body">
                <div className="label">Age:</div>
                <div>{user.age}</div>
                <div className="label">Phone:</div>
                <div>{user.phoneNumber}</div>
                <div className="label">Address:</div>
                <div>{user.address}</div>
            </div>
        </div>
    )
}