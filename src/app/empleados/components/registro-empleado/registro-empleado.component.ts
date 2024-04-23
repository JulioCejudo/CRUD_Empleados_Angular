import { getLocaleDateFormat } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Datum } from '../../interfaces/empleado.interface';
import { EmpleadosServices } from '../../services/empleados.service';
import { pipe, tap } from 'rxjs';

type genero= "Masculino" | "Femenino";

@Component({
  selector: 'registro-empleado',
  templateUrl: './registro-empleado.component.html',
  styleUrl: './registro-empleado.component.css'
})
export class RegistroEmpleadoComponent {
  //Rec: Se puede usar NgModel//ViewChild//ReactiveForms; se vera sobre la marcha
  public generos:string[] = ["Masculino", "Femenino"];

  @Input()
  public id?: number;
  
  @Input()
  public nombre:string = "";
  
  @Input()
  public apellidoP:string = "";
  
  @Input()
  public apellidoM:string = "";
  
  @Input()
  public gener:genero | undefined;
  
  @Input()
  public fecharegistro:Date = new Date;
  
  @Input()
  public edad!:number | undefined;

  @Input()
  public botonText:string = "";

  @Output()
  public onUpdate = new EventEmitter();

  public statusResult: string = "";
  public alertShow:boolean = false;

  public message:string = "";

  public claseAlert:string = "";



  constructor( private empleadosService:EmpleadosServices){

  }
  
  // public fechaActual(){
  //   let fecha = new Date();
  //   let z="0";
  //   if(fecha.getDay()>8){
  //     z="";
  //   }
  //   let fechaHoy:string = `${fecha.getFullYear().toString()}-${fecha.getMonth().toString()+1}-${z}${fecha.getDay().toString()}`;
  //   return fechaHoy;
  // }

  reiniciarValores() {
    this.nombre = "";
    this.apellidoP = "";
    this.apellidoM = "";
    this.gener = undefined;
    this.edad = undefined;
    //Pendiente reiniciar la fecha
  }

  guardarEmpleado(){
    const idU = this.id;
    const nombreN = this.nombre;
    const apellidoPN = this.apellidoP;
    const apellidoMN = this.apellidoM;
    const generoN = this.gener;
    const fechaRegistroN = this.fecharegistro;
    const edadN = this.edad;

    if(!this.validaciones(nombreN,generoN,
      fechaRegistroN, edadN)){
        this.message="Algunos datos son invalidos";
        this.showAlert();
      }else{
        let empleadoNew = {
          id:            idU, 
          nombre:        nombreN,
          apellidoP:     apellidoPN,
          apellidoM:     apellidoMN,
          genero:        generoN,
          fecharegistro: fechaRegistroN,
          edad:          edadN,
        }
        
        this.empleadosService.newEmpleado(empleadoNew)
        .subscribe(
          empleado => {
            console.log("here");
            this.statusResult = empleado.meta.status;
            if(this.botonText==="Actualizar"){
              this.onUpdate.emit(true);
              this.message = "Empleado actualizado con exito"
            }else if (this.botonText!=="Actualizar"){
              this.message = "Empleado agregado con exito";
              this.reiniciarValores();
            }
            this.showAlert()
      },
        (error:any) =>{
          console.log(error);
          this.showAlert();
        }
      )
      }
  }

  private showAlert(){
    if (this.message === "Algunos datos son invalidos") {
      this.alertShow=true;
      this.claseAlert = "alert alert-danger";
      setTimeout(()=> {
        this.alertShow = false;
      },5000);
    }
    else if(this.statusResult === "OK"){
      this.alertShow=true;
      this.claseAlert = "alert alert-success";
      setTimeout(()=> {
        this.alertShow = false;
      },5000);
    }
    else{
      this.message="Error de conexión";
      this.alertShow=true;
      this.claseAlert = "alert alert-danger";
      setTimeout(()=> {
        this.alertShow = false;
      },5000);
    }
  }

  private validaciones(nombreN:string,generoN:string|undefined,
    fechaRegistroN:Date,edadN:number|undefined){
      if(nombreN===""){
        return false;
      }
      if(generoN === "" || generoN === undefined){
        return false;
      }
      if(fechaRegistroN == undefined){
        return false;
      }
      if(edadN!<18 || edadN!>60 || edadN===undefined){
        return false;
      }
      return true;
  }
}