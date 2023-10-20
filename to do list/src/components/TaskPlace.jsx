import React, { useState } from 'react';
import { styled } from 'styled-components';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

const TaskPlace = () => {
      const [addText, setAddText] = useState([
            { id: 0, text: "coding ", done: false },
            { id: 1, text: "reading", done: true },
            { id: 2, text: "gaming", done: false }

      ]) //display task state
      const [tasks, setTask] = useState('');  // typing task state
      const maxTaskCount = 5;
      const [icon, setIcons] = useState('')
      const [nextId, setNextId] = useState(4);
      const [editItem, setEditItem] = useState(null);


      const handleIconName = () => setIcons(!icon);

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
      // console.log('Before edit:', addText);
      const handleEdit = (id, newName) => {
            const editIt = addText.map((item) => {
                  if (item.id === id) {
                        return { ...item, text: newName }
                  }
                  return item;
            });
            setAddText(editIt);
            setEditItem(null);
            // Reset the editing state
      }



      const closeIcon = () => {
            if (!icon) {
                  setIcons(!icon)
            }
      }
      return (
            <Container onClick={closeIcon}>
                  <WrapInput>
                        <h3>Keep tracking <span>your time </span> and task</h3>
                        <label htmlFor="">Add Your Daily Task:</label>
                        <InputTask>
                              <input type="text" name="text" id="task" placeholder="Add your Task"
                                    value={tasks}
                                    onChange={typeTask}
                              />
                              <span onClick={submitTask} ><AddIcon size={30} /></span>
                              <Reset>
                                    <div>
                                          {!icon ? <span>Reset</span> : null}
                                          <p onClick={handleReset}><RestartAltIcon size={30} /></p>
                                    </div>
                              </Reset>
                        </InputTask>
                  </WrapInput>
                  <TaskZone>
                        {addText.map((item) => (

                              <div key={item.id}>
                                    <input type="checkbox" name="check" id="box" />
                                    {editItem === item.id ? (
                                          <div className='editInput'>
                                                <input
                                                      type="text"
                                                      value={item.text}
                                                      id='editTask'
                                                      placeholder='edit your text'
                                                      name="inputBox"
                                                      onChange={(e) => handleEdit(
                                                            item.id, e.target.value
                                                      )

                                                      }
                                                />
                                                <button onClick={() => setEditItem(null)}>Done</button>
                                          </div>
                                    ) : (

                                          <p>{item.text}</p>
                                    )}
                                    <div>
                                          <span onClick={() => setEditItem(item.id)}><EditOutlinedIcon /></span>
                                          <span onClick={() => handleDelete(item.id)}><DeleteIcon /></span>
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
 gap: 6px;
 align-items: center;
 color: black;
 padding-right: 12px;
 border-radius: 12px;
 align-items: center;
 outline: 5px solid #000;
 cursor: pointer;
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
const Reset = styled.div`
   position: relative;
   display: flex;
  

 span{
     position: absolute;
     opacity: 1;
     background-color: gray;
     padding: 3px;
     top:-137%;
     left: 30%;
     border-radius: 8px 8px 8px 0px;
     color: white;
     transition: all 1s ease-out;
    
     &:after{
          opacity: 1;
          content: "";
          width: 20px;
          height:12px;
          background-color: gray;
          position: absolute;
          top: 100%;
          left: 0%;
          border-radius: 0% 0% 100% 0%;
          transition: all 1s ease-out;
         
         }
 }
 

`
