import LazyHero from 'react-lazy-hero';
import React from 'react';
import Button from "@material-ui/core/Button";
import Link from 'next/link'
import EventIcon from '@material-ui/icons/Event'
import Type from "./Type"

const HeroSection = ()  => {
return(
  
        <div>
            <LazyHero 
            imageSrc="https://images.unsplash.com/photo-1557598003-15d7d605adaa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80" 
            color = '#001096' 
            parallaxOffset='100'
            minHeight='70vh'
            opacity='0.73'
            >

                <h1 style={{ color: 'white', fontSize: "3rem" }}>A Car <span style={{color: "orange"}}>Rental</span> Service That Makes  <span style={{color: "orange"}}>Travel</span> Easy.{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                🏝️
                </span></h1>
                
                <p style={{ color: 'white', fontSize: "1.5rem", fontFamily: "revert" }}><Type /></p>
                <>
                <Link href="/carsandservices" passHref>
                <Button variant="contained" color="primary" size='medium'>
                  Select My Car
                </Button>
                </Link>
                {' '}
                <Link href="/rent/3" passHref>
              <Button endIcon={ <EventIcon style={{fill: "orange"}}/>} variant="contained" color="primary" size='medium' >
                Book Now
              </Button>
              </Link>
</>

            </LazyHero>
            
        </div>
  

)};
export default HeroSection 