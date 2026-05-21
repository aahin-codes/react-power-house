import { useNavigate } from "react-router-dom";
import type { IconType } from "react-icons";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import './_Card.scss'
type CardProps = {
    type?: {
        label: string,
        className: string
    },
    icon?: IconType,
    title: string,
    shortDescription: string,
    link: string,
    className?: string
}

const Card = ({ type, icon: Icon = FaReact, title, shortDescription, link, className = "classic-card" }: CardProps) => {
    const navigate = useNavigate();
    return (
        <div className={className} onClick={()=>{
            navigate(`${link}`)
        }}>
            <div className="first-layout">
                {Icon && <Icon />}
                <span className={type?.className}>{type?.label}</span>
            </div>
            <h2>{title}</h2>
            <p>{shortDescription}</p>

            <p className="view"><span>view docs</span> <FaLongArrowAltRight/></p>
        </div>
    )
}

export default Card;