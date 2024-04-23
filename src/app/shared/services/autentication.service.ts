import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutenticationService {
  private validado:boolean = false;


  constructor() { }

  public ingresarAplicativo(obj:any) {
    this.validado = obj.usuario === "CejudoJulio" && obj.password == "123456";
    return this.validado;
  }

  public validacionEntrar(){
    return this.validado;
  }
}
