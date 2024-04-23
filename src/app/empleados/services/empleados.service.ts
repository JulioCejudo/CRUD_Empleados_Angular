import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, catchError, of, throwError } from "rxjs";
import { Datum, Empleado } from "../interfaces/empleado.interface";
import { Name } from "../interfaces/nombre.interface";


@Injectable({providedIn: 'root'})
export class EmpleadosServices {

    constructor ( private http: HttpClient) {
        
    }

    private apiUrl = 'http://localhost:8080/api/v1';

    public allEmpleados():Observable<Empleado>{
        const url = `${this.apiUrl}/empleados`;
        return this.getEmpleadosRequest(url);

    }

    public searchById(id:number):Observable<Empleado>{
        const url = `${this.apiUrl}/empleado/${id}`;
        return this.getEmpleadosRequest(url);
    }

    private getEmpleadosRequest(url:string):Observable<Empleado>{
        const resp = this.http.get<Empleado>(url);
        return resp;
    }

    public newEmpleado(empleadoNuevo:Datum):Observable<Empleado>{
        const url = `${this.apiUrl}/empleado`;
        // console.log(empleadoNuevo.fecharegistro);
        return this.http.post<Empleado>(url, empleadoNuevo).pipe(
            catchError((error:any) => {
                return throwError('Error al comunicarse');
            })
        )
    }

    public searchByName(obj: Name):Observable<Empleado>{
        const url = `${this.apiUrl}/buscarPorNombre`;
        const resp = this.http.post<Empleado>(url, obj);
        return resp;
    }

    public deleteById(id:number):Observable<Empleado>{
        const url = `${this.apiUrl}/empleado/${id}`
        return this.http.delete<Empleado>(url);
    }

}