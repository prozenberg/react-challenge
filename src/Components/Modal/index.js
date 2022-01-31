import React,{useState} from 'react';
import './index.scss'

const Modal = ({updateParent,modalState}) => {

const [newLastName, setnewLastName] = useState("");
const closeModal = ()=>{
    updateParent(newLastName)
    modalState()
}



  return(
      <div className="modalBG">
          <div className="modal">
          <label>Change lastname of the selected person:</label>
          <input type="text" className="modal-input" onChange={(e) => setnewLastName(e.target.value)}/>
          <button className='inputDiv-button' onClick={()=>closeModal()}>Update</button>

          </div>

      </div>
  )
};

export default Modal;
