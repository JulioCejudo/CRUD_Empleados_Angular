import { Component, OnInit } from '@angular/core';
import { Datum, Empleado } from '../../interfaces/empleado.interface';
import { EmpleadosServices } from '../../services/empleados.service';
import { MatDialog } from '@angular/material/dialog';
import { PopDialogEditarEmpleadoComponent } from '../../components/pop-dialog-empleado/pop-dialog-empleado.component';

@Component({
  selector: 'page-all-empleados',
  templateUrl: './all-empleados.component.html',
  styles: ``
})
export class AllEmpleadosComponent implements OnInit{
  public empleados!: Empleado;
  public aumentar:number = 9;
  public limite:number = 0;
  public isLoading:boolean = false;
  public mensajeAlert:string = "";
  public claseAlert: string = "";
  public mostrarAlerta:boolean = false;

  constructor (private empleadosService: EmpleadosServices) {
    
  }

  ngOnInit(update?:boolean): void {
      this.empleadosService.allEmpleados()
      .subscribe( empleados => {
        this.empleados = empleados;
      });
  }

  buscarEmpleadoPorID(id:number){
    this.empleadosService.searchById(id)
    .subscribe(empleado => {
      this.empleados = empleado;
      this.aumentar=9;
    });
    if(!id){
      this.ngOnInit();
    }
  }

  buscarEmpleadosPorNombre(name: string){
    let nombreSearch = {nombre : name}
    this.empleadosService.searchByName(nombreSearch)
    .subscribe(empleados => {
      this.empleados = empleados;
    });
  }

  public recibirMax(max:number){
    this.limite = max;
  }

  public clickAumentar(){
    if(this.aumentar<this.limite-1){
      this.aumentar+=10;    
    }
  }


  public clickRegresar(){
    if(this.aumentar!==9){
      this.aumentar-=10;
    }
  }

  eliminarEmpleado(id:number){
    this.empleadosService.deleteById(id)
    .subscribe(empleados => {
      if(empleados.meta.status === "OK"){
        console.log(empleados.data);
      }
    });
    
    this.isLoading=true;
    
    setTimeout(() => {
      this.ngOnInit();
      this.isLoading = false;
      this.mostrarAlerta=true;
      this.mensajeAlert = "Empleado eliminado correctamente";
      this.claseAlert = "alert alert-info";
    }, 1500);

    setTimeout(() => {
      this.mostrarAlerta = false;
    },5000)
  }

}
