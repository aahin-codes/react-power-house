import './_FeaturedCard.scss';
import { Link, useNavigate } from "react-router-dom";
import type { IconType } from "react-icons";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { CodeRender } from '../code/CodeRender';

type FeaturedCardProps = {
    type?: {
        label: string,
        className?: string | undefined
    },
    icon?: IconType,
    title: string,
    shortDescription: string,
    link: string,
    className?: string,
    code?: string,
    language?:string
}

const FeaturedCard = ({ type, icon: Icon = FaReact, title, shortDescription, link, className = "feature-card", code, language}: FeaturedCardProps) => {
    const navigate = useNavigate();
    return (
        <div className={className} onClick={()=> navigate(link)}>
            <div className="left-section">
                <div className="first-layout">
                    {Icon && <Icon />}
                    <span className={type?.className}>{type?.label}</span>
                </div>
                <h2>{title}</h2>
                <p>{shortDescription}</p>
                <p className='view'><span>view docs</span> <FaLongArrowAltRight /></p>
            </div>
            <div className="right-section">
                <h2>Quick Look</h2>
                <CodeRender code={code || ""} language={language}/>
            </div>

        </div>
    )
}


export default FeaturedCard;