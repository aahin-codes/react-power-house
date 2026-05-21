import './_Footer.scss';
import { FaCopyright } from "react-icons/fa";
import { GoHeartFill } from "react-icons/go";
export const Footer = () => {
  return (
    <footer>
        <p><FaCopyright/> {new Date().getFullYear()} Sheik Aahin &middot; Built with React & <GoHeartFill/></p>
    </footer>
  )
}
