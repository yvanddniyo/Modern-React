import React, { useState } from 'react';
import { styled } from 'styled-components';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

const TaskPlace = () => {

      const [addText, setAddText] = useState([]) //display task state
      const [tasks, setTask] = useState('');  // typing task state
      const maxTaskCount = 2;

      const typeTask = (e) => setTask(e.target.value)



      const submitTask = () => {
            if (tasks && addText.length < maxTaskCount) {
                  setAddText([...addText, tasks]);
                  // setTask('');
            }
            else if (tasks && addText.length >= maxTaskCount) {
                  alert('You have reached your daily task.');
            }

      };
      return (
            <Container>
                  <WrapInput>
                        <h3>Keep tracking <span>your time </span> and task</h3>
                        <label htmlFor="">Add Your Daily Task:</label>
                        <InputTask>
                              <input type="text" name="text" id="task" placeholder="Add your Task"
                                    value={tasks}
                                    onChange={typeTask}
                              />
                              <span onClick={submitTask} ><AddIcon size={30} /></span>
                        </InputTask>
                  </WrapInput>
                  <TaskZone>
                        {addText.map((text, index) => (

                              <div key={index}>
                                    <input type="checkbox" name="check" id="box" />
                                    <p>{text}</p>

                                    <div>
                                          <EditOutlinedIcon />
                                          <DeleteIcon />
                                    </div>
                              </div>
                        )
                        )}
                  </TaskZone>
            </Container>
      )
}

export default TaskPlace

const Container = styled.div`
background-color: #0a0a0a;
color: #e2e3ca;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
  h3{
      padding: 5rem 20px;
      text-align: center;
      // z-index: -1;
      letter-spacing: 2px;
      
  }
  @media (max-width: 640px){
      h3{   
            // padding: 5rem 20px;
            font-size: 20px;
            letter-spacing: .2rem;
      }
  }
`
const WrapInput = styled.div`
 padding: 0 20px;
 display: flex;
 flex-direction: column;
 align-items: center;
 label{
      padding-bottom: 17px;
      letter-spacing: 1px;
      font-weight: 00;
 }
`
const InputTask = styled.div`
 display: flex;
 background-color: white;
 color: black;
 padding-right: 12px;
 border-radius: 12px;
 align-items: center;
 outline: 5px solid #000;
 cursor: pointer;
 input[type="text"]{
      width: 500px;
      padding: 9px;
      outline: none;
      border: none;
     
      @media (max-width: 640px){
          width: 240px;
 }
`
const TaskZone = styled.div`
 margin: 2rem 12px 0.5rem 2.5rem;
 display: flex;
 flex-direction: column;
 width: 560px;
 color: white;
 justify-content: space-between;
 gap:3px;
 div{
      display: flex;
      justify-content: space-between;
      gap:4px;
      cursor: pointer;
 }
 p{
      padding-left: 8px;
 }
 input[type="checkbox"]{
      padding-left: 23px;
 }
 @media (max-width: 640px){
      padding: 20px 0px;
      width: 290px;
`