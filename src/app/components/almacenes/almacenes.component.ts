import { AlmacenService } from './../../services/almacen.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-almacenes',
  templateUrl: './almacenes.component.html',
  styles: []
})
export class AlmacenesComponent implements OnInit {

  panes = null;

  pan = {
    idPan: null,
    nombre: null,
    precio: null,
    tipo: null,
    cantidad: null,
    descripcion: null
  };

  constructor( public panS: AlmacenService) {
    this.obtenerPanes();
   }

  ngOnInit() {
   
  }

  obtenerPanes() {
    this.panS.obtenerPanes().subscribe(
      result => this.panes = result
    );
  }

  altaPan() {
    this.panS.altaPan(this.pan).subscribe(
      datos => {
        if(datos['resultado'] == 'OK') {
          alert(datos['mensaje']);
          this.obtenerPanes();
        }
      }
    );
}
bajaPan(idPan) {
  this.panS.bajaPan(idPan).subscribe(
    datos => {
      if(datos['resultado'] == 'OK') {
        alert(datos['mensaje']);
        this.obtenerPanes();
      }
    }
  );
}
editarPan() {
  this.panS.editarPan(this.pan).subscribe(
    datos => {
      if(datos['resultado'] == 'OK') {
        alert(datos['mensaje']);
        this.obtenerPanes();
      }
    }
  );
}

seleccionarPan(idPan) {
  this.panS.seleccionarPan(idPan).subscribe(
    result => this.pan = result[0]
  );
}

hayRegistros() {
  if(this.panes == null) {
    return false;
  } else {
    return true;
  }
}

}
