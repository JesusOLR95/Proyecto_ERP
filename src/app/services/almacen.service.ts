import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlmacenService {


  URL = 'http://localhost/API_ERP/Almacen/';

  constructor(private http: HttpClient ) { }

  altaPan(pan:any) {
    return this.http.post(`${this.URL}AltaPan.php`, pan);
  }
  obtenerPanes() {
    return this.http.get(`${this.URL}ObtenerPanes.php`);
  }

  bajaPan(idPan: number) {
    return this.http.get(`${this.URL}BajaPan.php?idPan=${idPan}`);
  }

  seleccionarPan(idPan: number) {
    return this.http.get(`${this.URL}SeleccionarPan.php?idPan=${idPan}`);
  }

  editarPan(pan) {
    return this.http.post(`${this.URL}EditarPan.php`, JSON.stringify(pan));
  } 
}
