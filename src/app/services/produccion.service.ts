import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProduccionService {

  URL = 'http://localhost/API_ERP/Produccion/';

  constructor(private http: HttpClient) { }

  obtenerProductos(){
    return this.http.get(`${this.URL}ObtenerProductos.php`);
  }

  editarProducto(producto){
    return this.http.post(`${this.URL}EditarProduccion.php`,JSON.stringify(producto));
  }
  actualizarInventario(producto){
    return this.http.post(`${this.URL}ActualizarInventario.php`,JSON.stringify(producto));
  }
}
