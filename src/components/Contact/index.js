import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Loader from 'react-loaders'
import { useEffect, useState } from 'react'

const Contact = () => {
    const[letterClass,setLetterClass]=useState('text-animate')
    useEffect(()=> {
        return () => setTimeout(() => {
            setLetterClass('text-animate-hover')
       },4000)
  }, [])

    return(
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1> 
                    <AnimatedLetters letterClass={letterClass}
                     strArray={['L','e','t᾿','s',' ','G','e','t', ' ','i','n',' ','t','o','u','c','h']} idx={15}/>
                </h1>
                <p>
                I'm keenly interested in internship opportunities for the winter of 2024 ( February 2024 ),
                 particularly those involving  significant projects. 
                If you have any inquiries or require further information, 
                please feel free to get in touch with me..
                </p>
                <div className='contact-form'></div>
            </div>
        </div>
        <Loader type ="ball-scale-ripple-multiple"/>

        </>
    )
}





export default Contact