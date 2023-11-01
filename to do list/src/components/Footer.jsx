import React from 'react'
import styled from 'styled-components'

const Footer = () => {
      return (
            <Container>
                  <Wrap>
                        <div>
                              <logo>Y-Do List</logo>
                        </div>
                        <OurWork>
                              <p>Build website</p>
                              <p>Build mobile apps</p>
                              <p>Cyber Security</p>
                              <p>Penetration tester</p>
                        </OurWork>
                  </Wrap>
                  <Policy>
                        <ul>
                              <li></li>
                        </ul>
                  </Policy>
            </Container>
      )
}

export default Footer

const Container = styled.div`
 height: 30vh;
 padding: 1rem;
 background-color: gray;

`
const Wrap = styled.div`
  div{
      logo{
       color: #fcfcfc;
      font-size: 24px;
      font-weight: 700;
      }
      
      
  }
`
const OurWork = styled.div`
   padding: 20px 0px;
`