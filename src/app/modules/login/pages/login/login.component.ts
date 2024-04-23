import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutenticationService } from '../../../../shared/services/autentication.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  public myForm!:FormGroup

  constructor(
    private fb:FormBuilder, 
    private autenticationService: AutenticationService,
    private routerProvider: Router){ }

  ngOnInit(){
    this.myForm = this.createMyForm();
  }

  private createMyForm():FormGroup{
    return this.fb.group({
      usuario:  ["",[Validators.required]],
      password: ["",[Validators.required]]
    })
  }

  public submitFormulario(){
    if(this.myForm.invalid){
      Object.values(this.myForm.controls).forEach(control=>{
        control.markAllAsTouched();
      })
    }else{
      if(!this.autenticationService.ingresarAplicativo(this.myForm.value)){
        alert("Usuario o contraseña incorrectos");
      }else{
        this.routerProvider.navigateByUrl("/sesion/empleados");
      }
    }
  }

  public get f():any{
    return this.myForm.controls;
  }


}
