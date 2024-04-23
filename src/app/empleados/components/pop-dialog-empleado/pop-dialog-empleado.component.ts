import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Datum } from '../../interfaces/empleado.interface';

@Component({
  selector: 'pop-dialog-empleado',
  templateUrl: './pop-dialog-empleado.component.html',
  styleUrl: './pop-dialog-empleado.component.css'
})
export class PopDialogEditarEmpleadoComponent{

  @Input()
  public empleado!:Datum;

  @Input()
  public id:number = 0;

  @Input()
  public update: boolean = true;

  @Input()
  public titulo: string = "";

  @Output()
  public onDeleteConfirm = new EventEmitter();

  @Output()
  public onUpdateConfirm = new EventEmitter();
  
  closeModel(onUpdate?:boolean){
    let modelDiv;
    if(this.update){
      console.log("entro");
      modelDiv = document.getElementById('myModal');
      this.onUpdateConfirm.emit(true);
    }else{
      modelDiv = document.getElementById('myModalDelete');
    }

    if(modelDiv!=null){
      modelDiv.style.display = "none";
    }
  }

  confirmDelete(){
    this.onDeleteConfirm.emit(true);
    this.closeModel();
  }
}
