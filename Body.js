import React from 'react';
import { useState } from 'react';
import Data from './data.json';

const EditMember = ({current, data, setData})=>{
  function handleName(e){
    const name = e.target.value;
    const updatedData = data.map((d)=> d.id === current.id ? {...d, name:name}: d)
    setData(updatedData);
  }
  function handleEmail(e){
    const email = e.target.value;
    const updatedData = data.map((d)=> d.id === current.id ? {...d, email:email}: d)
    setData(updatedData);
  }
  function handlePhone(e){
    const phone = e.target.value;
    const updatedData = data.map((d)=> d.id === current.id ? {...d, phone:phone}: d)
    setData(updatedData);
  }
  return(
    <tr>
     <td> <input type="text" onChange={handleName} value={current.name} name='name'/></td>
     <td><input type="text" onChange={handleEmail} value={current.email} name='email' /></td>
      <td><input type="text" onChange={handlePhone} value={current.phone} name='phone'/></td>
      <td><button type='submit'>Updata</button></td>
    </tr>
  )
}

const AddMember = ({setData})=>{

  function handleValues(e){
      e.preventDefault();
      const name = e.target.elements.name.value;
      const email = e.target.elements.email.value;
      const phone = e.target.elements.phone.value;
      const newMember = {
        id: 4,
        name,
        email,
        phone
      } 
      setData(prevData=> prevData.concat(newMember))
      // nameRef.current.value =""
      // emailRef.current.value =""
      // phoneRef.current.value =""
  }
  return(
    <div>
    <form onSubmit={handleValues}>
      <input type="text" name='name'/>
      <input type="text" name='email' />
      <input type="text" name='phone'/>
      <button>Add</button>
    </form>
    </div>
  )
}


const Body = () => {
  const [data, setData] = useState(Data);
  const [editState, setEditState] = useState(-1);
  return (
    <div>
      <AddMember setData={setData} />
      <form onSubmit={handleUpdate}>
      <table>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
          <td>Action</td>
        </tr>
     {
      data.map((current)=>(
        editState === current.id ? <EditMember current={current} data={data} setData={setData}  /> :
        <tr>
          <td>{current.name}</td>
          <td>{current.email}</td>
          <td>{current.phone}</td>
          <td>
            <button type='button' onClick={()=>handleEdit(current.id)}>Edit</button>
            <button type='button' onClick={()=>handleDelete(current.id)}>Delete</button>
          </td>
        </tr>
      ))
     }
     </table>
     </form>
    </div>
  )

  function handleUpdate(e){
    e.preventDefault()
    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    const phone = e.target.elements.phone.value;
    const updatedState = data.map(d=> d.id === editState? {...d, name:name, email:email, phone:phone}:d)
    setEditState(-1)
    setData(updatedState)
  }

  function handleEdit(id){
    setEditState(id)
  }

  function handleDelete(id){
    const updatedData = data.filter((d)=>id !== d.id)
    setData(updatedData)
  }
}
export default Body
