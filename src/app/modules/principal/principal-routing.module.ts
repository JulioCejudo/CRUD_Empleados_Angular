import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PrincipalComponent } from "./pages/principal/principal.component";
import { SidebarComponent } from "../../shared/components/sidebar/sidebar.component";

const rutas: Routes = [
    // {
    //     path: 'principal',
    //     component: SidebarComponent
    // },
    {

        path: 'empleados',
        loadChildren: () => import('../../empleados/empleados.module').then( m => m.EmpleadosModule)

    }
];

@NgModule({
    imports: [RouterModule.forChild(rutas)],
    exports: [RouterModule]
}) 

export class PrincipalRoutingModule{

}