import React from 'react'
import { styled } from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';

const MenuContent = () => {

      return (
            <div>
                  <MenuCont>
                        <ul>
                              <form>
                                    <input type="text" placeholder='Search...' />
                                    <SearchIcon />
                              </form>
                              <li>About Us</li>
                              <li>About Us</li>
                              <li>About Us</li>
                              <li>About Us</li>
                        </ul>

                  </MenuCont>
            </div>
      )
}

export default MenuContent

const MenuCont = styled.div`
 position: fixed;
 display: flex;
 flex-direction: column;
 top: 7%;
 right: 0%;
 width: 40vw;
 height: 40vh;
 background-color: white;
box-shadow: 3px 7px 12px 5px  black;
padding:12px;
z-index:1;
input[type='text']{
      padding: 12px 12px;
      background-color: 
      outline: none;
}
form{
      display: flex;
      align-items: center;
      background-color: gray;
      width: 230px;
      color: white;
      cursor: pointer;
}

 
 li{
      transition: margin-right 2s .5s;
      padding: 32px 30px 0px;
      color: black;
      cursor: pointer;
 }
 li:hover{
      font-weight: bold;
 }

 @media (min-width: 764px){
      display: none
    }
@media (max-width: 640px){
      width: 70vw;
    }

`

