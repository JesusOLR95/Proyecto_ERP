import { EmpladosService } from './../../services/emplados.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rh',
  templateUrl: './rh.component.html',
  styles: []
})
export class RHComponent implements OnInit {

  empleados = null;

  empleado = {
    idEmpleado: null,
    nombre: null,
    apellidoP: null,
    apellidoM: null,
    edad: null,
    rfc:null,
    domicilio: null,
    colonia: null,
    telefono:null,
    turno:null,
    rol:null,
    sexo:null
  };

  constructor( public empleadoS: EmpladosService) { }

 
  ngOnInit() {
    this.obtenerEmpleados();
  }

  obtenerEmpleados() {
    this.empleadoS.obtenerEmpleados().subscribe(
      result => this.empleados = result
    );
  }

  altaEmpleado() {
    this.empleadoS.altaEmpleado(this.empleado).subscribe(
      datos => {
        if(datos['resultado'] == 'OK') {
          alert(datos['mensaje']);
          this.obtenerEmpleados();
        }
      }
    );
}
bajaEmpleado(idEmpleado) {
  this.empleadoS.bajaEmpleado(idEmpleado).subscribe(
    datos => {
      if(datos['resultado'] == 'OK') {
        alert(datos['mensaje']);
        this.obtenerEmpleados();
      }
    }
  );
}
editarEmpleado() {
  this.empleadoS.editarEmpleado(this.empleado).subscribe(
    datos => {
      if(datos['resultado'] == 'OK') {
        alert(datos['mensaje']);
        this.obtenerEmpleados();
      }
    }
  );
}

seleccionarEmpleado(idEmpleado) {
  this.empleadoS.seleccionarEmpleado(idEmpleado).subscribe(
    result => this.empleado = result[0]
  );
}

hayRegistros() {
  if(this.empleados == null) {
    return false;
  } else {
    return true;
  }
}


}
