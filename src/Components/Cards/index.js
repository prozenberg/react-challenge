import React, { useState, useEffect } from 'react';
import './index.scss'
import Modal from '../Modal';
import IMAGES from '../../Assets';
import CustomImg from '../Imgs/customImg';
function Cards({props,changesFn, changesA}) {
const [currentLastName, setCurrentLastName] = useState(props.name.last);
const [showModal, setShowModal] = useState(false);

const handleModal = () => showModal ? setShowModal(false) : setShowModal(true)

    

const updateLastName= (e) => setCurrentLastName(e);

const applyChanges = ()=> changesA ? changesFn(false) : changesFn(true)


const capitalizeFirstLetter = (string) =>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

useEffect(() => {
        props.name.last = capitalizeFirstLetter(currentLastName)
        applyChanges()
}, [currentLastName])

    return (
        <>
            
                <div className="cardConteiner">
                    <div className="cardConteiner__content">
                    <CustomImg {...IMAGES.edit} classN="cardConteiner__content-edit"  fn={handleModal}/>
                    <p className="cardConteiner__content-name">{props.name.first} {props.name.last}</p>
                    <img src={props.picture.large} alt="" className="cardConteiner__content-picture" />
                    <p className="cardConteiner__content-email">{props.email}</p>
                    <p className="cardConteiner__content-number">{props.cell}</p>
                    <p className="cardConteiner__content-location">{props.location.city}, {props.location.state}</p>
                    </div>

                </div>
                {showModal  ? <Modal updateParent={updateLastName} modalState={handleModal}/> : null}
                
        </>
    );
}
export default Cards;
