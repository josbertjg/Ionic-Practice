import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ActionSheetController } from "@ionic/angular";
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-examen',
  templateUrl: './examen.page.html',
  styleUrls: ['./examen.page.scss'],
})
export class ExamenPage implements OnInit {

  constructor(public actsheet:ActionSheetController,private router:Router, public toast:ToastController, public alert:AlertController) { }

  ngOnInit() {
  }


  //VARIABLE QUE CONTROLA EL PASO DE LAS PREGUNTAS
  numPregunta:number=1;

  sigPregunta(){
    if(this.numPregunta==this.opciones.length){
      this.mostrarAlert("Examen Finalizado","Felicidades, has finalizado el examen teorico")
      this.router.navigate(['home'])
      this.numPregunta=1;
    }
    else
      this.numPregunta++
  }

  //OPCIONES
  opciones=[
    {
      id:1,
      enunciado:"Primera pregunta de ejemplo",
      op1:"Opcion 1 de ejemplo",
      op2:"Opcion 2 de ejemplo",
      op3:"Opcion 3 de ejemplo",
      op4:"Opcion 4 de ejemplo"
    },
    {
      id:2,
      enunciado:"Segunda pregunta de ejemplo",
      op1:"respuesta de prueba",
      op2:"otra respuesta",
      op3:"ejemplo",
      op4:"una respuesta mas"
    },
    {
      id:3,
      enunciado:"Tercera pregunta de ejemplo",
      op1:"Opcion 1 de ejemplo",
      op2:"Opcion 2 de ejemplo",
      op3:"Opcion 3 de ejemplo",
      op4:"Opcion 4 de ejemplo"
    },
    {
      id:4,
      enunciado:"Cuarta pregunta de ejemplo",
      op1:"Opcion 1",
      op2:"Opcion 2",
      op3:"Opcion 3",
      op4:"Opcion 4"
    },
    {
      id:5,
      enunciado:"Quinta pregunta de ejemplo",
      op1:"1",
      op2:"2",
      op3:"3",
      op4:"4"
    }
  ];

  //ACTION SHEET
  async actionSheet() {
    const actionSheet = await this.actsheet.create({
      header: 'Seleeciona una opcion',
      subHeader: 'Puedes seleccionar la opcion de tu preferencia',
      cssClass: 'my-custom-class',
      buttons: [
        {
          text: 'Salir del Desafio',
          icon: "exit",
          handler:()=>{
            this.router.navigate(["home"])
          }
        },
        {
          text: 'Info',
          icon: "information-circle-outline",
          handler:()=>this.mostrarToast("Informacion...")
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
}
