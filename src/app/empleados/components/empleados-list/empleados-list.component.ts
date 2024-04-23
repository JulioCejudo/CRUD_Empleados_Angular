import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Datum, Empleado } from '../../interfaces/empleado.interface';
import { MatDialog } from '@angular/material/dialog';
import { PopDialogEditarEmpleadoComponent } from '../pop-dialog-empleado/pop-dialog-empleado.component';
import { Block } from '@angular/compiler';

@Component({
  selector: 'empleados-list',
  templateUrl: './empleados-list.component.html',
  styles: ``
})
export class EmpleadosListComponent{
  @Output()
  public onMax: EventEmitter<number> = new EventEmitter();

  @Output()
  public onDeleteById = new EventEmitter();

  @Output()
  public onUpdateConfirm = new EventEmitter();

  @Input()
  public empleadosList!: Empleado;

  @Input()
  public individual: boolean=false;

  @Input()
  public limite!: number;

  public deleteConfirm: boolean= false;

  public idToDelete:number = 0;

  public max:number=0;
  public empleadoEditar!:Datum;

  public total!:number;

  isArray(obj: any) {
    if(Array.isArray(obj)){
      return true;
    }else{
      return false;
    }
  }

  //Modificar este metodo para poder mostrar nuevamente el mensaje de "No hay empleados para mostrar"
  //Este metodo se podria ahorrar si siempre recibieramos un array siempre desde el backEnd
  getEmpleados(data: Datum | Datum[] | undefined) {
    if (data instanceof Array) {
      this.total=data.length;
      this.onMax.emit(this.total);
      return data;
    } else if (data instanceof Object) {
      return [data];
    } else{
      return undefined;
    }
  }

  eliminarByIdModal(id:number | undefined){
    const modelDiv = document.getElementById('myModalDelete');
    if(modelDiv!=null){
    modelDiv.style.display = "block"
    }
    if(id){
      this.idToDelete = id;
    }
  }

  recibirRespuestaDelete(confirm:boolean){
    if(confirm){
      this.onDeleteById.emit(this.idToDelete);
    }
  }

  respuestaUpdate(confirmUpdate:boolean){
    setTimeout(() => {
      this.onUpdateConfirm.emit(true);
    }, 1000);
  }

  openModel(empleado:Datum){
    const modelDiv = document.getElementById('myModal');
    if(modelDiv!=null){
      this.empleadoEditar = empleado;
      modelDiv.style.display = "block"
    }
  }
}