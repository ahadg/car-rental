import styled from 'styled-components'
import Link from 'next/link'
import {FaFacebook, FaInstagram, FaYoutube} from 'react-icons/fa'
import Image from 'next/image'
import Pic from '../public/white.png'

export const FooterContainer = styled.footer`
background-color: #005b96;
`

export const FooterWrap = styled.div`
padding: 100px 24px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
max-width: 1100px;
margin: 0 auto;
`
export const FooterLinksContainer = styled.div`
display: flex;
justify-content: center;

@media screen and (max-width: 820px){
    padding-top: 32px;
}
`
export const FooterLinkWrapper = styled.div`
display: flex;

@media screen and (max-width: 820px){
    flex-direction: column;
}
`
export const FooterLinkItems = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
margin: 16px;
text-align: left;
width: 160px;
box-sizing: border-box;
color: #fff;

@media screen and (max-width: 420px){
    margin: 0;
    padding: 10px;
    width: 100%;
}
`
export const FooterLinkTitle = styled.h2`
font-size: 14px;
margin-bottom: 16px;
`
export const FooterLink = styled.a`
color: #fff;
text-decoration: none;
margin-bottom: 0.5rem;
font-size: 14px;

&:hover{
    color: #01bf71;
    transition: 0.3s ease-oute;
}
`
export const SocialMedia = styled.section`
max-width: 1000px;
width: 100%;
`

export const SocialMediaWrap = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
max-width: 1100px;
margin: 40px auto 0 auto;

@media screen and (max-width: 820px){
    flex-direction: column;
}
`

export const SocialLogo = styled(Link)`
color: #fff;
justify-self: start;
cursor: pointer;
text-decoration: none;
font-size: 1.5rem;
display: flex;
align-items: center;
margin-bottom: 16px;
font-weight: bold;
`

export const WebsiteRights = styled.small`
color: #fff;
margin-bottom: 16px;
`

export const SocialIcons = styled.div`
display: flex;
justify-content; space-between;
align-items: center;
width: 240px;
`
export const SocialIconLink = styled.a`
color: #fff;
font-size: 24px;
`



const Footer = () => {
    return (
        <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinkWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink href="/termsandconditions" passHref>Terms and Conditions</FooterLink>
                            <FooterLink href="/privacypolicy" passHref>Privacy Policy</FooterLink>
                            <FooterLink href="/faq" passHref>FAQ</FooterLink>
                            <FooterLink href="/contactus" passHref>Contact Us</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Videos</FooterLinkTitle>
                            <FooterLink href="/contactus" passHref>Submit Video</FooterLink>
                            <FooterLink href="/aboutus" passHref>Agency</FooterLink>

                    </FooterLinkItems>
                </FooterLinkWrapper>
                <FooterLinkWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLink href="/aboutus" passHref>Instagram</FooterLink>
                            <FooterLink href="/aboutus" passHref>Facebook</FooterLink>

                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Rental</FooterLinkTitle>
                            <FooterLink href="/termsandconditions" passHref>Long Term Rental</FooterLink>
                            <FooterLink href="/privacypolicy" passHref>Short Term Rental</FooterLink>
                            <FooterLink href="/faq" passHref>Purchase Vehicle</FooterLink>

                    </FooterLinkItems>
                </FooterLinkWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo href='/' passHref>
                     <Image src={Pic} alt='Home Page' width={180} height={70} /> 

                    </SocialLogo>
                    <WebsiteRights>Agile © 2021 All rights reserved</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
                            <FaFacebook/>
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
                            <FaInstagram/>
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank' aria-label='Youtube'>
                            <FaYoutube/>
                        </SocialIconLink>
                    </SocialIcons>

                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
