import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/f.png'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {BiHomeAlt2, BiUser, BiEnvelope} from 'react-icons/bi'
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'

const sidebar = () => (
<div className='nav-bar'>
    <Link className='logo' to='/' >
        <img src={LogoS} alt="logo"/>
        {/* <img className="sub-logo" src={LogoSub} alt="logo"/> */}
    </Link>
    <nav>
        <NavLink exact="true" activeclassname="active" to="/">
             <BiHomeAlt2 size={24} />

        </NavLink>
 
        <NavLink exact="true" activeclassname="active"className="about-link" to="/about">
            <BiUser size={24} />

        </NavLink>
    
        <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
            <BiEnvelope size={24} />

        </NavLink>
    </nav>
    <ul>
        <li>
            <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/fatima-khoudidir-55204123a'>
                <FontAwesomeIcon icon={faLinkedin} color='#F2926F'/>
            </a>
        </li>
        <li>
            <a target="_blank" rel='noreferrer' href='https://github.com/FatimaKhoudidir'>
                <FontAwesomeIcon icon={faGithub} color='#F2926F'/>
            </a>
        </li>
    </ul>


  

</div>
)



export default sidebar