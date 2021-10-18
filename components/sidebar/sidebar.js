import React from 'react'
import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa'
import Link from 'next/link'
import {Link as LinkS} from 'react-scroll'



export const SidebarContainer = styled.aside`
position: fixed;
z-index: 999;
width: 100%;
height: 100%;
background: #0d0d0d;
display: grid;
align-items: center;
top: 0;
left: 0;
transition: 0.3s ease-in-out;
opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
top: ${({isOpen}) => (isOpen? '0' : '-100%')};
`
export const CloseIcon = styled(FaTimes)`
color: #fff
`
export const Icon = styled.div`
position: absolute;
top: 1.2rem;
right: 1.5rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;
`
export const StLink = styled.a`
padding: 0rem 1rem;
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;

&:hover{
    color: #01bf71;
    transition: 0.3s ease-oute;
}
` 
export const SidebarWrapper = styled.div`
color: #fff;
`
export const SidebarMenu = styled.ul`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(6, 80px);
text-align: center;

@media screen and (max-width: 480px){
    grid-template-rows: repeat(6, 60px);
}
`

export const SidebarLink = styled.a`
display: flex;
align-items: center;
justify-content: center;
font-size: 1.5rem;
text-decoration: none;
list-styles: none;
transitions: 0.2s ease-in-out;
text-decoration: none;
color: #fff;
cursor: pointer;

&:hover{
    color: #01b7f1;
    transition: 0.2s ease-in-out;
}
`

export const SideBtnWrap = styled.div`
display: flex;
justify-content: center;
`
export const SidebarRoute = styled.a`
border-radius: 50px;
background: #01bf71;
white-space: nowrap;
padding: 16px 64px;
color: #010606;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
transition: all o.2s ease-in-out;
text-decoration: none;

&:hover{
    color: #01bf71;
   
}
`


const Sidebar = ({isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
           <Icon onClick={toggle}>
               <CloseIcon/>
           </Icon> 
           <SidebarWrapper>
               <SidebarMenu>
                   <SidebarLink>
                   <Link href="/about" passHref>
                    <StLink>About</StLink>  
                   </Link>
                   </SidebarLink>
                   <SidebarLink>
                   <Link href="/faq" passHref>
                    <StLink>FAQ's</StLink>  
                   </Link>
                   </SidebarLink>
                   <SidebarLink>
                   <Link href="/contactus" passHref>
               <StLink>Contact Us</StLink>  
                   </Link>
                   </SidebarLink>
                   <SidebarLink>
                   <Link href="/carsandservices" passHref>
               <StLink>Cars and Services</StLink>  
                   </Link>
                   </SidebarLink>
               </SidebarMenu>
               <SideBtnWrap>
                   <SidebarRoute href='/rent/3' passHref> Book Now! </SidebarRoute>
               </SideBtnWrap>
           </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
