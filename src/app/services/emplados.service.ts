import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpladosService {

  URL = 'http://localhost/API_ERP/Empleados/';

  constructor(private http: HttpClient) { }

  altaEmpleado(empleado:any){
    return this.http.post(`${this.URL}AltaEmpleado.php`,empleado)
  }

  obtenerEmpleados(){
    return this.http.get(`${this.URL}ObtenerEmpleados.php`);
  }

  bajaEmpleado(idEmpleado: number){
    return this.http.get(`${this.URL}BajaEmpleado.php?idEmpleado=${idEmpleado}`);
  }

  seleccionarEmpleado(idEmpleado: number){
    return this.http.get(`${this.URL}SeleccionarEmpleado.php?idEmpleado=${idEmpleado}`);
  }

  editarEmpleado(empleado){
    return this.http.post(`${this.URL}EditarEmpleado.php`,JSON.stringify(empleado));
  }

}
