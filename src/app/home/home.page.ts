import { Component } from '@angular/core';
//IMPORTS ADICIONALES
import { ActionSheetController } from "@ionic/angular";
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public actsheet: ActionSheetController, public toast:ToastController, public alert:AlertController, private router:Router ) {}

  //ACTION SHEET
  async actionSheet() {
    const actionSheet = await this.actsheet.create({
      header: 'Seleeciona una opcion',
      subHeader: 'Puedes seleccionar la opcion de tu preferencia',
      cssClass: 'my-custom-class',
      buttons: [
        {
          text: 'Presentar Desafío Teórico',
          icon: "book-outline",
          handler:()=>{
            this.router.navigate(["examen"])
          }
        },
        {
          text: 'Info',
          icon: "information-circle-outline",
          handler:()=>this.mostrarToast("Informacion...")
        },
        {
          text: 'Compartir',
          icon: "share-social-outline",
          handler:()=>this.mostrarToast("Compartiste...")
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          icon: "exit-outline",
          handler:()=>this.mostrarToast("Cancelaste...")
        },
      ],
    });

    actionSheet.present();
  }

  //TOAST
  async mostrarToast(s:string){
    const t= await this.toast.create({
      message:s,
      duration:2000,
      translucent:true
    })
    t.present();
  }

  //ALERT
  async mostrarAlert(titulo:string,mensaje:string){
    const a= await this.alert.create({
      header:titulo,
      message:mensaje,
      buttons:['OK']
    })
    a.present();
  }

  //CARDS
  cards=[
    {
      titulo: "Hablando del SCP-682",
      img: "https://i.ytimg.com/vi/QDu-yZ__0og/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCdMiXrGI1ROYNSSN7150tBh0Oqtg",
      asesor: "Eduardo Mejias"
    },
    {
      titulo: "God Of War La Saga en un Video",
      img: "https://i.ytimg.com/vi/qyE6tJHkWZg/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBEyPqKOhIomPKbRgLR4iL6wh0a5Q",
      asesor: "Jose Rojas"
    },
    {
      titulo: "Cosas que Nadie Nota en Vivo",
      img: "https://i.ytimg.com/vi/4_ym-fIF6Ng/hqdefault.jpg?sqp=-oaymwEWCKgBEF5IWvKriqkDCQgBFQAAiEIYAQ==&rs=AOn4CLBiKJ8QqeGENASYD0qh-JJbfflgJg",
      asesor: "Maria Triana"
    }
  ]

  //EVENTO DEL SEGMENT
  segment(evento:any) {
    this.mostrarToast(evento.detail.value);
  }

}
