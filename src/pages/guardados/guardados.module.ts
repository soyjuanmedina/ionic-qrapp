import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GuardadosPage } from './guardados';

//Providers
import { HistorialProvider } from "../../providers/historial/historial";

@NgModule({
  declarations: [
    GuardadosPage,
  ],
  imports: [
    IonicPageModule.forChild(GuardadosPage),
  ],
})
export class GuardadosPageModule {

  constructor(){

  }

}
