import { Component } from '@angular/core';
import { ToastController, Platform } from 'ionic-angular';

//Servicios
import { HistorialProvider } from "../../providers/historial/historial";

//Plugings
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private barcodeScanner: BarcodeScanner,
    private toastCtrl: ToastController,
    private platform: Platform,
    private _historialProvider: HistorialProvider) {

  }

  scan() {
    
    if (!this.platform.is('cordova')){

      this._historialProvider.agregar_historial("http://google.com");
      this.presentToast('No es una plataforma movil');
      return;

    }

    console.log('Realizando scan...');
    this.barcodeScanner.scan().then((barcodeData) => {
      console.log('Exito', barcodeData);
    }, (err) => {
      console.error(err);
      this.presentToast(err);
    });
  }

  presentToast(err) {
    let toast = this.toastCtrl.create({
      message: err,
      duration: 3000
    });
    toast.present();
  }

}
