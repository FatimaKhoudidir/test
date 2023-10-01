import { Link } from 'react-router-dom'
import LogoF from '../../assets/images/f.png'
import './index.scss'
import Loader from 'react-loaders'
import Logo from './Logo'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'


const Home =() =>{
    const[letterClass,setLetterClass]=useState('text-animate')
    const nameArray = ['a', 't', 'i', 'm','a',' ',' ', 'k', 'h', 'o', 'u', 'd', 'i', 'd', 'i', 'r' ] 
    const jobArray = ['S', 'o', 'f', 't ',' w','a', 'r', 'e', ' ', 'e', 'n', 'g', 'i', 'n', 'e', 'e','r','.']


     useEffect(()=> {
       return () => setTimeout(() => {
                       setLetterClass('text-animate-hover')
          },4000)
     }, [])
    return(
        <>
        <div className="container home-page">
            <div className="text-zone">
            <h1>
               <span className={letterClass}>H</span>
               <span className={letterClass}>i,</span>
               <br/> 
               <span className={letterClass}>I</span>
               <span className={letterClass}>'m</span>
               <img src={LogoF} alt="F"/>
               <AnimatedLetters letterClass={letterClass}
               strArray={nameArray}
               idx={15}/>
               <br/>
               <AnimatedLetters letterClass={letterClass}
               strArray={jobArray}
               idx={19}/>
            </h1> 
               <h2>full stack Developer /Java passionate </h2>
               <Link to="/contact" className='flat-button'> CONTACT ME </Link>
               </div>
               <Logo/>
        </div>
        <Loader type ="ball-scale-ripple-multiple"/>

        </>
    )
}
export default Home