import React from 'react'
import { styled } from 'styled-components'
import { Link } from 'react-router-dom'
const MenuContent = () => {

      return (
            <Container>
                  <div>
                        <ul>

                              <li>About Us</li>

                              <Link to="/blogsection">
                                    <li>Our Blog</li>
                              </Link>
                              <li>Contact</li>
                              <li>Location</li>
                        </ul>

                  </div>
            </Container>
      )
}

export default MenuContent

const Container = styled.div`
 position: relative;

div{
      position: fixed;
      display: flex;
      flex-direction: column;
      top: 7%;
      right: 0%;
      width: 60vw;
      height: 50vh;
      background-color: white ;
     box-shadow: 3px 7px 12px 5px  black;
     padding:12px;
     
     ul{

           li{
                 transition: margin-right 2s .5s;
                 padding: 32px 30px 0px;
                 color: black;
                 cursor: pointer;
           
            }
            li:hover{
                 font-weight: bold;
            }
     }
}

 @media (min-width: 764px){
      display: none
    }
@media (max-width: 640px){
      width: 70vw;
    
    }

`

