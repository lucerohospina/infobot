import React from 'react';
import './../App.css';

const Form = () => {
    return(
    <div className="container-fluid">
      <div className="row">
        <form className="col-12 col-md-4 offset-md-4 mt-5">
          <div className="form-group">
            <label for="doi">Tipo de documento de identidad</label>
            <select className="form-control" id="doi">
              <option>DNI</option>
              <option>Pasaporte</option>
              <option>CE</option>
            </select>
          </div>
          <div className="form-group">
            <label for="doiNumber">Número de documento de identidad</label>
            <input type="text" className="form-control" id="doiNumber"/>
          </div>
          <div className="form-group">
            <label for="names">Nombres</label>
            <input type="text" className="form-control" id="names"/>
          </div>
          <div className="form-group">
            <label for="lastName">Apellidos</label>
            <input type="text" className="form-control" id="lastName"/>
          </div>
        </form>
      </div>
    </div>
    )
}

export default Form;