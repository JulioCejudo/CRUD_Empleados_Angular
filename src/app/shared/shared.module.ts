import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { SearchboxComponent } from './components/searchbox/searchbox.component';
import { ComboBoxComponent } from './components/combo-box/combo-box.component';
import { FormsModule } from '@angular/forms';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { AlertMessagesComponent } from './components/alert-messages/alert-messages.component';



@NgModule({
  declarations: [
    HomePageComponent,
    AboutPageComponent,
    SidebarComponent,
    ContactPageComponent,
    SearchboxComponent,
    ComboBoxComponent,
    LoadingSpinnerComponent,
    AlertMessagesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    HomePageComponent,
    AboutPageComponent,
    SidebarComponent,
    ContactPageComponent,
    SearchboxComponent,
    ComboBoxComponent,
    LoadingSpinnerComponent,
    AlertMessagesComponent
  ]
})
export class SharedModule { }
