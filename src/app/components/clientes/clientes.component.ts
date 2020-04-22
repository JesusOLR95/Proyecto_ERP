import { ClientesService } from './../../services/clientes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styles: []
})
export class ClientesComponent implements OnInit {

  clientes = null;

  cliente = {
    idCliente: null,
    nombre: null,
    apellidoM: null,
    apellidoP: null,
    correo: null,
    domicilio: null,
    colonia: null,
    telefono: null,
    usuario: null,
    pass: null
  };

  constructor( public clienteS: ClientesService ) { }

  ngOnInit() {
    this.obtenerClientes();
  }

  obtenerClientes() {
    this.clienteS.obtenerClientes().subscribe(
      result => this.clientes = result
    );
  }

  altaCliente() {
    this.clienteS.altaCliente(this.cliente).subscribe(
      datos => {
        if(datos['resultado'] == 'OK') {
          alert(datos['mensaje']);
          this.obtenerClientes();
        }
      }
    );
}
bajaCliente(idCliente) {
  this.clienteS.bajaCliente(idCliente).subscribe(
    datos => {
      if(datos['resultado'] == 'OK') {
        alert(datos['mensaje']);
        this.obtenerClientes();
      }
    }
  );
}
editarCliente() {
  this.clienteS.editarCliente(this.cliente).subscribe(
    datos => {
      if(datos['resultado'] == 'OK') {
        alert(datos['mensaje']);
        this.obtenerClientes();
      }
    }
  );
}

seleccionarCliente(idCliente) {
  this.clienteS.seleccionarCliente(idCliente).subscribe(
    result => this.cliente = result[0]
  );
}

hayRegistros() {
  if(this.clientes == null) {
    return false;
  } else {
    return true;
  }
}

}
