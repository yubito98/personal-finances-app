import './DatePicker.css'



function DatePicker({datePickerData}){

const handleForm = (event)=> {
  event.preventDefault();
  const form = new FormData(event.target);
  const formData = Object.fromEntries(form);
  datePickerData(formData);
}



  return(
    <div className='date-picker'>
      <p>Filtrar por:</p>
      <div className='date-picker-options'>
        <span className='btn btn-secondary' >Mes anterior</span>
        <span className='btn btn-secondary'>Este mes</span>
        <form onSubmit={handleForm} className='date-picker-form'>
          <input type='date' name='startDate' placeholder="Fecha inicio" />
          <input type='date' name="endDate" placeholder="fecha de corte" />
          <button type="submit" className='btn btn-primary'>Filtrar</button>
        </form>
      </div>
    </div>
  )
}


  export default DatePicker