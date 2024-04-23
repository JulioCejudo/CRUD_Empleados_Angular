import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContactPageComponent } from './shared/pages/contact-page/contact-page.component';
import { SesionComponent } from './layout/public/sesion/sesion.component';
import { PrincipalComponent } from './modules/principal/pages/principal/principal.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: HomePageComponent
  // },
  {
    path:'sesion-out',
    component: SesionComponent,
    loadChildren: () => import ('./modules/login/login.module').then(m => m.LoginModule),
  },
  {
    path:'sesion',
    component: PrincipalComponent,
    loadChildren: () => import ('./modules/principal/principal.module').then(m => m.PrincipalModule)
  },
  {
    path: 'about',
    component: AboutPageComponent
  },
  {
    path: 'contact',
    component: ContactPageComponent
  },
  // {
  //   path: 'empleados',
  //   loadChildren: () => import('./empleados/empleados.module').then( m => m.EmpleadosModule)
  // },
  {
    path: 'countries',
    loadChildren: () => import('./countries/countries.module').then( m => m.CountriesModule)
  },
  {
    path: '**',
    redirectTo: 'sesion-out'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
