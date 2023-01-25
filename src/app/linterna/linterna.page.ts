import { Component, OnInit } from '@angular/core';
import { Flashlight } from '@awesome-cordova-plugins/flashlight/ngx';


@Component({
  selector: 'app-linterna',
  templateUrl: './linterna.page.html',
  styleUrls: ['./linterna.page.scss'],
})
export class LinternaPage implements OnInit {

  constructor(private linterna:Flashlight) { }

  ngOnInit() {
  }

  evento:boolean=false;
  switchLinterna(evento:any){
    let power=evento.target.checked;
    if(power)
      this.linterna.switchOn()
    else
      this.linterna.switchOff()
  }


}
