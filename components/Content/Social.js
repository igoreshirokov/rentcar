import { LINKS } from "../Constants"
export default function Social() {
    return (
        <div className="social">
            <a href={LINKS.facebook} target="_blank">
                <div className="icon icon__facebook-red"></div>
            </a>
            <a href={LINKS.instagram} target="_blank">
                <div className="icon icon__instagram-red"></div>
            </a>
        </div>
    )
}