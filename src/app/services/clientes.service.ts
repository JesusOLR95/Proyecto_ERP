import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

 
  URL = 'http://localhost/API_ERP/Clientes/';

  constructor(private http: HttpClient) { }

  altaCliente(cliente:any){
    return this.http.post(`${this.URL}AltaCliente.php`,cliente)
  }

  obtenerClientes(){
    return this.http.get(`${this.URL}ObtenerClientes.php`);
  }

  bajaCliente(idCliente: number){
    return this.http.get(`${this.URL}BajaCliente.php?idCliente=${idCliente}`);
  }

  seleccionarCliente(idCliente: number){
    return this.http.get(`${this.URL}SeleccionarCliente.php?idCliente=${idCliente}`);
  }

  editarCliente(cliente){
    return this.http.post(`${this.URL}EditarCliente.php`,JSON.stringify(cliente));
  }
}
