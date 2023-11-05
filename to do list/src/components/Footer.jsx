import React from 'react'
import styled from 'styled-components'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer = () => {
      return (
            <Container>
                  <Content>
                        <Wrap>
                              <h3>Y-Do List</h3>
                              <ul>
                                    <li>Know us</li>
                                    <li>What we do</li>
                                    <li>Our community</li>
                                    <li>Get in Touch</li>
                              </ul>
                        </Wrap>
                        <Policy>
                              <h3>Links</h3>
                              <ul>
                                    <li>About</li>
                                    <li>Blog</li>
                                    <li>Careers</li>
                                    <li>Jobs</li>
                              </ul>
                        </Policy>
                        <Developer>
                              <h3>More</h3>
                              <ul>
                                    <li>web</li>
                                    <li>Technology</li>
                                    <li>Learn web</li>
                                    <li>Hack Blog</li>
                              </ul>
                        </Developer>
                  </Content>
                  <SocialMedia>
                        <Media>
                              <h3>Follow Us On Our Social Media</h3>
                              <ul>
                                    <li>
                                          <a href="https://web.whatsapp.com/  " target='_blank'><WhatsAppIcon /></a>
                                    </li>
                                    <li>
                                          <a href="https://www.instagram.com/yva.n_/ " target='_blank'><InstagramIcon /></a>
                                    </li>
                                    <li>
                                          <a href="https://www.youtube.com/channel/UCMUpFtTe1ArPnJxHYm4eE7A" target='_blank' ><YouTubeIcon /></a>
                                    </li>
                                    <li>
                                          <a href="https://www.linkedin.com/in/niyonshima-yvan-04247327a/ " target='_blank'><LinkedInIcon /></a>
                                    </li>
                              </ul>
                        </Media>
                  </SocialMedia>
                  <CopyRight>
                        <div>
                              <p><CopyrightIcon /></p>
                              <p>copyright 2023</p>
                        </div>
                        <p>Terms and Condition</p>
                  </CopyRight>
            </Container>
      )
}

export default Footer

const Container = styled.div`
 height: 50vh;
 padding: 1rem;
 background-color: gray;

`
const Content = styled.div`
display: flex;
flex-wrap: wrap;
padding: 0px 1rem;

justify-content: space-around;
border-bottom: 1px solid white;
`
const Wrap = styled.div`

      h3{
      color: #fcfcfc;
      font-size: 18px;
      font-weight: 700;
      cursor: pointer;

      }
      ul{
            padding:  1rem 0;
            cursor: pointer;
            font-size: 15px;

        li{
         padding: 0.5rem 0px;
         &:hover{
            // font-size: 1.1rem;
            font-weight: bold;
           }
       }
            
      }
      
  
`

const Policy = styled.div`

h3{
      color: #fcfcfc;
      font-size: 18px;
      font-weight: 700;
      cursor: pointer;

      }
      ul{
            padding:  1rem 0;
            cursor: pointer;
            font-size: 15px;
            transition: all 1s ease-out;
 
        li{
         padding: 0.5rem 0px;
         &:hover{
            // font-size: 1.1rem;
            font-weight: bold;
           }
       }
            
      }
`
const Developer = styled.div`

h3{
      color: #fcfcfc;
      font-size: 18px;
      font-weight: 700;
      cursor: pointer;

      }
      ul{
            padding:  1rem 0;
            cursor: pointer;
            font-size: 15px;

        li{
         padding: 0.5rem 0px;
         &:hover{
      //      font-size: 1.1rem;
           font-weight: bold;
          }
      }
      }
`
const SocialMedia = styled.div`
 border-bottom: 1px solid white;
`
const Media = styled.div`
padding: 1.3rem 0px;
h3{  
      text-align: center;
      color: white;
      font-weight: 700;
      letter-spacing: 3px;
}
 ul{
       display: flex;
       padding: 15px 0px;
       justify-content: space-around;
       gap: 5rem;
       li{
            a{
                  color: lightgreen;
            }
       }
 }
`
const CopyRight = styled.div`
display: flex;
justify-content: space-between; 
padding: 1.2rem 0px;
font-weight: bold;
cursor: pointer;
 div{
      display: flex;
      text-align: center;
      font-weight: bold;
 }
`