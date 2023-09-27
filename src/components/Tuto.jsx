import React, { useState } from 'react'

const Tuto = () => {
    
const  initialisation = 0;

const[nom_variable_stocker,nom_function_update] = useState(initialisation);

const increaseSalary = ()=>{
    nom_function_update(nom_variable_stocker + 100);
}

  return (
    <div>
      {/* <label htmlFor="nom_variable">Petite test </label>
      <input
        type="text"
        className=""
        disabled
        value={nom_variable_stocker}
      />{" "}
      Ariary
      <button type="button" onClick={increaseSalary}>
        Augmente mon salaire s'il vous plait
      </button> */}

      <div className="mb-3 my-4">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="value"
          value={nom_variable_stocker}
        />
      </div>
      <button type="button" onClick={increaseSalary} className='btn btn-primary'> 
        Augmente mon salaire s'il vous plait
      </button>
    </div>
  );
}

export default Tuto
