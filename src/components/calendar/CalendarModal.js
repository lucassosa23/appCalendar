import React, { useState } from 'react'
import Modal from 'react-modal';
import moment from "moment";
import DateTimePicker from 'react-datetime-picker';


const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  
  Modal.setAppElement('#root');

  const now = moment().minutes(0).seconds(0).add(1, "hours");
  const nowTwo=now.clone().add(1, "hours");

export const CalendarModal = () => {


    const handleSubmitForm = (e) => {
        e.preventDefault();

        console.log(formValues)
    }

    const [formValues, setFormValues] = useState({
        title: "evento",
        notes: "",
        start: now.toDate(),
        end: nowTwo.toDate()

    })

    const { notes, title } = formValues;

    const handleInputChange  = ({target}) => {


            setFormValues({
                ...formValues,
                [target.name]: target.value
            });
    }

    const [dateStart, setDateStart] = useState(now.toDate())
    const [dateEnd, setDateEnd] = useState(nowTwo.toDate())

    const handleEndDateChange = (e ) => {
        setDateEnd(e);
        setFormValues({
            ...formValues,
            end:e
        })
    }

    const handleStartDateChange = (e) =>{
       setDateStart(e);
       setFormValues({
        ...formValues,
        start:e
    })
    }


    const closeModal = () => {
       
    }
  return (
    <Modal
        isOpen={true}
        //onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        closeTimeoutMS={100}
        className="modal"
        overlayClassName="modal-fondo">


        <h1> Nuevo evento </h1>
    <hr />
    <form className="container"
    onSubmit={handleSubmitForm}
    >

    <div className="form-group">
        <label>Fecha y hora inicio</label>
        <DateTimePicker onChange={handleStartDateChange} value={dateStart}
        className="form-control" />
    </div>

    <div className="form-group">
        <label>Fecha y hora fin</label>
        <input className="form-control" placeholder="Fecha fin"/>
        <DateTimePicker
        onChange={handleEndDateChange} 
        value={dateEnd}
        minDate={dateStart}
        />
    </div>

    <hr />
    <div className="form-group">
        <label>Titulo y notas</label>
        <input 
            type="text" 
            className="form-control"
            placeholder="Título del evento"
            name="title"
            autoComplete="off"
            value={title}
            onChange={handleInputChange}
        />
        <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
    </div>

    <div className="form-group">
        <textarea 
            type="text" 
            className="form-control"
            placeholder="Notas"
            rows="5"
            name="notes"
            value= {notes}
            onChange={handleInputChange}
        ></textarea>
        <small id="emailHelp" className="form-text text-muted">Información adicional</small>
    </div>

    <button
        type="submit"
        className="btn btn-outline-primary btn-block"
    >
        <i className="far fa-save"></i>
        <span> Guardar</span>
    </button>

</form>
        </Modal>
  )
}
