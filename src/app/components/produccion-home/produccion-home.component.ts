import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ProduccionService } from './../../services/produccion.service';
import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-produccion-home',
  templateUrl: './produccion-home.component.html',
  styles: []
})
export class ProduccionHomeComponent implements OnInit {

  levadura = 10;
  agua = 120;
  lecheE = 60;
  azucar = 210;
  sal = 10;
  mantequella = 190;
  harina = 625;
  canela = 25;
  vainilla = 20;
  huevo = 1;
  piezas: number = 0;

  resultados = {
    resultado1 : null,
    resultado2 : null,
    resultado3 : null,
    resultado4 : null,
    resultado5 : null,
    resultado6 : null,
    resultado7 : null,
    resultado8 : null,
    resultado9 : null,
    resultado10 : null
  }

  productos = null;

  producto:any = {
    idProducto: null,
    nombre: null,
    cantidad: null,
  };

  @ViewChild("txtPiezas", { static: true }) txtPiezas: ElementRef;

  constructor(  public productoS: ProduccionService) { }

  ngOnInit() {
    this.obtenerProductos();
    console.log('Progreso', this.piezas)
   
  }

  obtenerProductos() {
    this.productoS.obtenerProductos().subscribe( result =>{ console.log(result);
    this.productos = result
    }
    );
  };

  actualizarInvnetario() {
    this.productoS.actualizarInventario(this.resultados).subscribe(
      datos => {
        if(datos['resultado'] == 'OK') {
          this.obtenerProductos();
        }
      }
    );
    this.productoS.editarProducto(this.resultados).subscribe(
      datos => {
        if(datos['resultado'] == 'OK') {
        Swal.fire('El inventario se actualizo')
          this.obtenerProductos();
        }

        if (datos['resultado'] == 'NG' ) {
          Swal.fire('No existe la cantidad suficiente')
        }
      }
    );

    this.resultados.resultado2 = null ;
    this.resultados.resultado1 = null ;
    this.resultados.resultado3 = null ;
    this.resultados.resultado4 = null ;
    this.resultados.resultado5 = null ;
    this.resultados.resultado6 = null ;
    this.resultados.resultado7 = null ;
    this.resultados.resultado8 = null ;
    this.resultados.resultado9 = null ;
    this.resultados.resultado10 = null ;
    this.piezas = null;
  }
  calcular(){
    
    this.resultados.resultado1 = this.levadura * this.piezas;
    this.resultados.resultado2 = this.agua * this.piezas;
    this.resultados.resultado3 = this.lecheE * this.piezas;
    this.resultados.resultado4 = this.azucar * this.piezas;
    this.resultados.resultado5 = this.sal * this.piezas;
    this.resultados.resultado6 = this.mantequella * this.piezas;
    this.resultados.resultado7 = this.harina * this.piezas;
    this.resultados.resultado8 = this.canela * this.piezas;
    this.resultados.resultado9 = this.vainilla * this.piezas;
    this.resultados.resultado10 = this.huevo * this.piezas;

  }



}
