import { NgModule } from "@angular/core";
import { AllEmpleadosComponent } from './pages/all-empleados/all-empleados.component';
import { EmpleadosRoutingModule } from "./empleados-routing.module";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { MatDialogModule } from '@angular/material/dialog'

import { EmpleadosListComponent } from './components/empleados-list/empleados-list.component';
import { EmpleadosByIdComponent } from './pages/empleados-by-id/empleados-by-id.component';
import { RegistrarEmpleadoComponent } from './pages/registrar-empleado/registrar-empleado.component';
import { RegistroEmpleadoComponent } from './components/registro-empleado/registro-empleado.component';
import { PopDialogEditarEmpleadoComponent } from './components/pop-dialog-empleado/pop-dialog-empleado.component';

@NgModule({
    declarations: [
        AllEmpleadosComponent,
        EmpleadosListComponent,
        EmpleadosByIdComponent,
        RegistrarEmpleadoComponent,
        RegistroEmpleadoComponent,
        PopDialogEditarEmpleadoComponent
    ],
    imports: [
        CommonModule,
        EmpleadosRoutingModule,
        SharedModule,
        FormsModule,
        MatDialogModule
    ]
})
export class EmpleadosModule {}