import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-materas',
  templateUrl: './materas.page.html',
  styleUrls: ['./materas.page.scss'],
})
export class MaterasPage implements OnInit {

  constructor(private menuCtrl:MenuController) {}

  ngOnInit() {
  }

  onClick(){
    this.menuCtrl.toggle()
  }


}
