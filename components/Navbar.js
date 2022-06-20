import styled from 'styled-components'
import Link from 'next/link'
import {FaBars} from 'react-icons/fa'
import {Link as LinkS} from 'react-scroll'
import Image from 'next/image'
import Pic from '../public/pic.png'


const Nav = styled.nav` 
height: 60px;
background-color: #005b96;
color: #fff;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0.5rem calc((100vw - 1000px) / 2);
z-index: 10;
position: sticky;
font-size: 1rem;
top: 0;

@media screen and (max-width: 960px){
  transition: 0.8s all ease;
}
`;


export const Bars = styled(FaBars)`
display: none;
color: #fff;

@media screen and (max-width: 768px){
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-100%, 75%);
  font-size: 1.8rem;
  cursor: pointer;
}
`
export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -24px;

@media screen and (max-width: 768px){
  display: none;
}
`
export const NavBtn = styled.nav`
display: flex;
align-items: center;
margin-right: 24px;

@media screen and (max-width: 768px){
  display: none;
}
`
export const NavBtnLink = styled.a`
border-radius: 50px;
background: #01bf71;
padding: 10px 22px;
white-space: nowrap;
color: #fff;
border: none; 
outline: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
font-size:16px;

&:hover{
  transitions: all 0.2s ease-in-out;
  background: #fff;
  color: #010606;
}
`

export const StyledLink = styled(LinkS)`
padding: 0rem 1rem;
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;

&.active{
  color: #15cdfc;
  border-bottom: 3px solid #01bf71;
}
`
export const StLink = styled.a`
padding: 0rem 1rem;
color: #fffaf0;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;

&.active{
  color: #15cdfc;
 
  
}
&:hover{
  border-bottom: 3px solid #01bf71;
  transition: 0.3s ease-oute;
`

export const ImageLink = styled.a`
cursor: pointer;  

}
`


const Navbar = ({toggle})  => {
    // eslint-disable-next-line prettier/prettier
    return (
        <Nav>
           <div>
             <Link href="/" passHref>
               <ImageLink>
             <Image src={Pic} alt='Home Page' width={135} height={50} /> 
             </ImageLink>
             </Link>  
           </div> 
           <Bars onClick={toggle}/>
           <NavMenu>
           <div>
             <Link href="/about" passHref>
               <StLink>About</StLink>  
             </Link>  
           </div> 
           <div>
             <Link href="/faq" passHref>
               <StLink>FAQ's</StLink>  
             </Link>  
           </div> 
           <div>
             <Link href="/contactus" passHref>
               <StLink>Contact Us</StLink>  
             </Link>  
           </div> 
           <div>
             <Link href="/carsandservices" passHref>
               <StLink>Cars and Services</StLink>  
             </Link>  
             
           </div> 
           </NavMenu>
           <NavBtn>
             <NavBtnLink>
             <div>
             <Link href="/rent/3" passHref>
               <StyledLink>Book Now!</StyledLink>  
             </Link>  
           </div> 
             </NavBtnLink>
           </NavBtn>
        </Nav>
    )
};

export default Navbar;
 