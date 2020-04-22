import { InventarioService } from './../../services/inventario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: []
})
export class InventarioComponent implements OnInit {

  productos = null;

  producto = {
    idProducto: null,
    nombre: null,
    cantidad: null,
    tipo: null,
    precio: null,
    descripcion: null,
    caducidad: null,
  };

  constructor( public productoS: InventarioService) { }

  ngOnInit() {
    this.obtenerProductos();
  }

  obtenerProductos() {
    this.productoS.obtenerProductos().subscribe(
      result => this.productos = result
    );
  }

  altaProducto() {
    this.productoS.altaProducto(this.producto).subscribe(
      datos => {
        if(datos['resultado'] == 'OK') {
          alert(datos['mensaje']);
          this.obtenerProductos();
        }
      }
    );
}
bajaProducto(idProducto) {
  this.productoS.bajaProducto(idProducto).subscribe(
    datos => {
      if(datos['resultado'] == 'OK') {
        alert(datos['mensaje']);
        this.obtenerProductos();
      }
    }
  );
}
editarProducto() {
  this.productoS.editarProducto(this.producto).subscribe(
    datos => {
      if(datos['resultado'] == 'OK') {
        alert(datos['mensaje']);
        this.obtenerProductos();
      }
    }
  );
}

seleccionarProducto(idProducto) {
  this.productoS.seleccionarProducto(idProducto).subscribe(
    result => this.producto = result[0]
  );
}

hayRegistros() {
  if(this.productos == null) {
    return false;
  } else {
    return true;
  }
}
}
