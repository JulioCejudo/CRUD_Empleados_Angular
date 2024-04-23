import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AllEmpleadosComponent } from "./pages/all-empleados/all-empleados.component";
import { EmpleadosByIdComponent } from "./pages/empleados-by-id/empleados-by-id.component";
import { RegistrarEmpleadoComponent } from "./pages/registrar-empleado/registrar-empleado.component";
import { RegistroEmpleadoComponent } from "./components/registro-empleado/registro-empleado.component";

const routes: Routes = [
    {
        path: 'all-empleados',
        component: AllEmpleadosComponent
    },
    // {
    //     path: 'empleados-by-id',
    //     component: EmpleadosByIdComponent
    // },
    {
        path: 'registrar-empleado',
        component: RegistrarEmpleadoComponent 
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]

})
export class EmpleadosRoutingModule { }