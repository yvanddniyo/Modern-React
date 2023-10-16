import React from 'react'
import { styled } from 'styled-components'

const Hero = () => {
      return (
            <Container>
                  <Wrap>
                        <h1>Y-Do List</h1>
                  </Wrap>
            </Container>
      )
}

export default Hero

const Container = styled.div`
  width: 100vw;
  height: 80vh;
  background-color: #868181;
`
c