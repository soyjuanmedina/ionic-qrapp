import { Component } from '@angular/core';

//Páginas
import { HomePage, GuardadosPage } from "../index.paginas";

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1: any = HomePage;
  tab2: any = GuardadosPage;

  constructor() {
  }

  ionViewDidLoad() {
    console.log("Dentro de ionViewDidLoad");
  }

}
