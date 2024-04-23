import { Component } from '@angular/core';
import { Empleado } from '../../interfaces/empleado.interface';
import { EmpleadosServices } from '../../services/empleados.service';

@Component({
  selector: 'page-empleados-by-id',
  templateUrl: './empleados-by-id.component.html',
  styles: ``
})
export class EmpleadosByIdComponent {
  public empleados!:Empleado;

  constructor( private empleadosService:EmpleadosServices){

  }

  buscarEmpleado(id:number){
    this.empleadosService.searchById(id)
    .subscribe(empleado => {
      this.empleados = empleado;
    })
  }
}
