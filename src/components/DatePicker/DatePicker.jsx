import './DatePicker.css'
import { useState, useRef } from 'react';


function DatePicker({datePickerData, dateFilter}){

const startDate = useRef(null);

const monthNames = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
];

const date = new Date(dateFilter.startDate);
const day = date.getDate();
const month = monthNames[date.getMonth()];
const year = date.getFullYear();

const handleForm = (event)=> {
  event.preventDefault();
  const form = new FormData(event.target);
  const formData = Object.fromEntries(form);
  datePickerData(formData);
}

const displayDatePicker = () =>{
  startDate.current.showPicker()
}




  return(
    <div className='date-picker'>
      <p>Filtrar por:</p>
      <div className='date-picker-options'>
        <span className='btn btn-secondary' >Mes anterior</span>
        <span className='btn btn-secondary'>Este mes</span>
        <form onSubmit={handleForm} className='date-picker-form'>
          <div className='date-picker-form-item'>
            <label for="startDate">Desde</label>
            <div className='date-picker-form-item-placeholder' onClick={displayDatePicker}>{day} de {month} del {year}</div>
            <input ref={startDate} id="startDate" type='date' name='startDate' />
          </div>
          <div className='date-picker-form-item'>
            <label>Hasta</label>
            <div className='date-picker-form-item-placeholder'>{dateFilter.endDate}</div>
            <input type='date' name="endDate" placeholder="fecha de corte" />
          </div>
          <button type="submit" className='btn btn-primary'>Filtrar</button>
        </form>
      </div>
    </div>
  )
}


  export default DatePicker