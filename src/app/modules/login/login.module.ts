import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from "./pages/login/login.component";
import { loginRoutingModule } from "./login-routing.module";
import { RegistroComponent } from './pages/registro/registro.component';

@NgModule({
    declarations: [LoginComponent, RegistroComponent],
    exports: [LoginComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        loginRoutingModule    
    ],

})
export class LoginModule {
    
}