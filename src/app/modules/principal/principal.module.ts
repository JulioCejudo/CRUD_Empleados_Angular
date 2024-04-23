import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { PrincipalComponent } from './pages/principal/principal.component';
import { PrincipalRoutingModule } from "./principal-routing.module";
import { SharedModule } from "../../shared/shared.module";


@NgModule({
    declarations:[
  
    PrincipalComponent
  ],
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      PrincipalRoutingModule,
      SharedModule
    ]
})
export class PrincipalModule {
    
}