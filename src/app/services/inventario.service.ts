import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  URL = 'http://localhost/API_ERP/Inventario/';

  constructor(private http: HttpClient) { }

  altaProducto(producto:any){
    return this.http.post(`${this.URL}AltaProducto.php`,producto)
  }

  obtenerProductos(){
    return this.http.get(`${this.URL}ObtenerProductos.php`);
  }

  bajaProducto(idProducto: number){
    return this.http.get(`${this.URL}BajaProducto.php?idProducto=${idProducto}`);
  }

  seleccionarProducto(idProducto: number){
    return this.http.get(`${this.URL}SeleccionarProducto.php?idProducto=${idProducto}`);
  }

  editarProducto(producto){
    return this.http.post(`${this.URL}EditarProducto.php`,JSON.stringify(producto));
  }

}
