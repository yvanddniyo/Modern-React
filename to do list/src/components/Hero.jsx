import React from 'react'
import { styled } from 'styled-components';
import Typed from 'react-typed';
import { Link } from 'react-router-dom'

const Hero = () => {
      return (
            <Container>
                  <Wrapper>
                        <Wrap>
                              <h1>Y-Do List</h1>
                              <p>Build the Best To Do list by you have been dream of and unleash your power with our cutting edge technology with best : </p>
                              <Replay>
                                    <Typed
                                          strings={['Developer', ' Designer', 'Researcher',
                                                'Engineers']}
                                          typeSpeed={80}
                                          backSpeed={70} loop
                                    />
                              </Replay>
                        </Wrap>
                  </Wrapper>

                  <Link to="/taskplace">
                        <Button>
                              Do List Now
                        </Button>
                  </Link>
            </Container>
      )
}

export default Hero

const Container = styled.div`
  width: 100vw;
  height: 80vh;
  color: #3E403F;
  background-color: #E5EAE7;
  display: block;
  margin: 0px auto;
  text-align: center;
  padding-top: 10em;

  `
const Wrapper = styled.div`
  display:flex;
  justify-content: center;
  `
const Wrap = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1{
      text-align: center;
      padding-bottom: 12px;
      font-weight: bold;
      color: #E4197A;
      font-size: 42px;
  }
  p{
      font-size: 20px;
      color: #000;
      opacity: 0.8;
      line-height: 1.5;
  }
  @media (max-width: 640px) {
      width: 90%;
      }
  @media (min-width: 640px) {
      width: 40%;
      }
  
`
const Replay = styled.div`
  font-size: 32px;
  font-weight: 700;
  text-align: center;
  color: #36CA80;
  opacity: 0.9;
  padding-top: 23px;
`
const Button = styled.button`
  width: 150px;
  margin: 0px auto;
  padding: 12px;
  font-size: 18px;
  margin-top: 3em;
  font-weight: bold;
  opacity: 0.8;
  background-color: #5B635F;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  
  &:hover{
      background-color: #209CAE ;
      color: black;
      transition: all 1s ease-out;
  }

`
