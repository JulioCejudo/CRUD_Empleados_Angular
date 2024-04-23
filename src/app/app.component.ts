import { Component } from '@angular/core';
import { AutenticationService } from './shared/services/autentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-Flujo-App';

  constructor(private autenticationService:AutenticationService) {
   
  }

  visualizarPrincipal(){
    return this.autenticationService.validacionEntrar();
  }


}
