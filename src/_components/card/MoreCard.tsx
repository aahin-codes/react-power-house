import './_MoreCard.scss'
import type { IconType } from "react-icons";
import { FaReact } from "react-icons/fa";
import { Link } from 'react-router-dom';

type MoreCardrops = {
    icon?: IconType,
    title: string,
    shortDescription: string,
    link: string,
}

export const MoreCard = ({ icon: Icon = FaReact, title, shortDescription, link}: MoreCardrops) => {
    return (
        <div className='more-hook-card'>
            <div className="first-layout">
                {Icon && <Icon />}
                <h4>{title}</h4>
            </div>
            <p>{shortDescription}</p>

            <Link to={link}/>
        </div>
    )
}
