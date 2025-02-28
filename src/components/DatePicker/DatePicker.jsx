import './DatePicker.css'
import { useState, useRef, useEffect } from 'react';


function DatePicker({datePickerData, dateFilter}){

const startDateInput = useRef(null);
const endDateInput = useRef(null);

const handleForm = (event)=> {
  event.preventDefault();
  const form = new FormData(event.target);
  const formData = Object.fromEntries(form);
  datePickerData(formData);
}

const displayStartDate = () =>{
  startDateInput.current.showPicker()
}

const displayEndtDate = () =>{
  endDateInput.current.showPicker()
}

const [startDateDay, setStartDateDay] = useState('');
const [startDateMonth, setStartDateMonth] = useState('');
const [startDateYear, setStartDateYear] = useState('');

const [endDateDay, setEndDateDay] = useState('');
const [endDateMonth, setEndDateMonth] = useState('');
const [endDateYear, setEndDateYear] = useState('');

const monthNames = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
];

const handleStartCalendarChange = (event)=>{
    const [year, month, day] = event.target.value.split('-').map(Number);
    const startDate = new Date(year, month - 1, day);
    setStartDateDay(startDate.getDate())
    setStartDateMonth(monthNames[startDate.getMonth()]);
    setStartDateYear(startDate.getFullYear());
}

const handleEndCalendarChange = (event)=>{
    const [endYear, endMonth, endDay] = event.target.value.split('-').map(Number);
    const endDate = new Date(endYear, endMonth -1,endDay );
    setEndDateDay(endDate.getDate());
    setEndDateMonth(monthNames[endDate.getMonth()]);
    setEndDateYear(endDate.getFullYear());
}


const handleDates = (filter) =>{
  const monthNames = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  const [year, month, day] = filter.startDate.split('-').map(Number);
  const startDate = new Date(year, month - 1, day);
  setStartDateDay(startDate.getDate())
  setStartDateMonth(monthNames[startDate.getMonth()]);
  setStartDateYear(startDate.getFullYear());
  
  const [endYear, endMonth, endDay] = dateFilter.endDate.split('-').map(Number);
  const endDate = new Date(endYear, endMonth -1,endDay );
  setEndDateDay(endDate.getDate());
  setEndDateMonth(monthNames[endDate.getMonth()]);
  setEndDateYear(endDate.getFullYear());


}


useEffect(()=>{
  handleDates(dateFilter)
},[])


  return(
    <div className='date-picker'>
      <p>Filtrar por:</p>
      <div className='date-picker-options'>
        <span className='btn btn-secondary' >Mes anterior</span>
        <span className='btn btn-secondary'>Este mes</span>
        <form onSubmit={handleForm} className='date-picker-form'>
          <div className='date-picker-form-item'>
            <span>Desde</span>
            <div className='date-picker-form-item-placeholder' onClick={displayStartDate}>{startDateDay} de {startDateMonth} del {startDateYear}</div>
            <input onChange={handleStartCalendarChange} ref={startDateInput} id="startDate" type='date' name='startDate' />
          </div>
          <div className='date-picker-form-item'>
            <span>Hasta</span>
            <div className='date-picker-form-item-placeholder' onClick={displayEndtDate}>{endDateDay} de {endDateMonth} del {endDateYear}</div>
            <input onChange={handleEndCalendarChange} ref={endDateInput} type='date' name="endDate" placeholder="fecha de corte" />
          </div>
          <button type="submit" className='btn btn-primary'>Filtrar</button>
        </form>
      </div>
    </div>
  )
}


  export default DatePicker