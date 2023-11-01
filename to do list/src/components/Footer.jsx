import React from 'react'
import styled from 'styled-components'

const Footer = () => {
      return (
            <Container>
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
            </Container>
      )
}

export default Footer

const Container = styled.div`
 display: flex;
 flex-wrap: wrap;
 justify-content: space-around;

 height: 30vh;
//  width: 100vw;
 padding: 1rem;
 background-color: gray;

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
            font-size: 1.1rem;
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
            font-size: 1.1rem;
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
           font-size: 1.1rem;
           font-weight: bold;
          }
      }
      }
`