import React, { useState } from 'react';
import { styled } from 'styled-components';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

const TaskPlace = () => {
      const [addText, setAddText] = useState([
            { id: 0, text: " set your task ", done: false },
            // { id: 1, text: "reading", done: true },
            // { id: 2, text: "gaming", done: false }

      ]) //display task state
      const [tasks, setTask] = useState('');  // typing task state
      const maxTaskCount = 5;
      const [nextId, setNextId] = useState(4);
      const [editItemId, setEditItemId] = useState(null);
      const [editedText, setEditedText] = useState('');
      const [checkbox, setCheckbox] = useState(false);




      const typeTask = (e) => setTask(e.target.value)



      const submitTask = () => {
            if (tasks && addText.length < maxTaskCount) {
                  const newTask = {
                        id: nextId,
                        text: tasks,
                        done: false,
                  }
                  setAddText([...addText, newTask]);
                  setTask('');
                  setNextId(nextId + 1);

            }
            else if (tasks && addText.length >= maxTaskCount) {
                  alert('You have reached your daily task.');
            }
      };

      const handleReset = (index) => {
            const resetIt = [...tasks];
            resetIt.splice(index, 1);
            setAddText(resetIt);
      }


      const handleDelete = (id) => {
            const deleteIt = addText.filter(item => item.id !== id);
            setAddText(deleteIt);
      };


      const handleEdit = (id, text) => {

            setEditItemId(id);
            setEditedText(text);
            // Reset the editing state
      }

      const handleDoneEditing = () => {
            const editedTasks = addText.map((item) => {
                  if (item.id === editItemId) {
                        if (editedText) {

                              return { ...item, text: editedText }
                        }
                  }
                  return item
            });

            setAddText(editedTasks);
            setEditItemId(null);
            setEditedText('');
      };

      const handleCheckbox = () => setCheckbox(!checkbox)

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
                              <div className='reset-icon'>
                                    <p onClick={handleReset}><RestartAltIcon size={30} /></p>
                              </div>
                        </InputTask>
                  </WrapInput>
                  <TaskZone>
                        {addText.map((item) => (

                              <div key={item.id}>
                                    <input
                                          type="checkbox"
                                          name="check"
                                          id="box"
                                          value={checkbox}
                                          onChange={handleCheckbox}
                                    />
                                    {editItemId === item.id ? (
                                          <div className='editInput'>
                                                <input
                                                      type="text"
                                                      value={editedText}
                                                      id='editTask'
                                                      placeholder='edit your text'
                                                      name="inputBox"
                                                      onChange={e => setEditedText(
                                                            e.target.value
                                                      )
                                                      }
                                                />
                                                <button onClick={handleDoneEditing}>Done</button>
                                          </div>
                                    ) : (

                                          <p>{item.text}</p>
                                    )}
                                    <div>
                                          <span className='edit-icon' onClick={() => setEditItemId(item.id)}><EditOutlinedIcon /></span>
                                          <span className='delete-icon' onClick={() => handleDelete(item.id)}><DeleteIcon /></span>
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
 gap: 12px;
 align-items: center;
 color: black;
 padding-right: 12px;
 border-radius: 12px;
 align-items: center;
 outline: 5px solid #000;
 cursor: pointer;

 div{
      p{
          
            &:after{
                 display: none;
                 content: "";
                 width: 20px;
                 height:12px;
                 color: white;
                 position: absolute;
                 top: 24%;
                 left:85%;
                 }
                 &:hover{
                   &:after{
                         display: block;
                   }
             }
        }
 }
 
 button{
      padding: 3px;
      font-weight: 700;
      
   }
 input[type="text"]{
      width: 500px;
      padding: 12px;
      outline: none;
      border: none;
     
      @media (max-width: 640px){
          width: 210px;
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

  .delete-icon{
      color: red;
  }
  .edit-icon{
      transition: all 1s ease-out;
      &:hover{
            color: green;
      }
  }
      
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

