import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-bandoleras',
  templateUrl: './bandoleras.page.html',
  styleUrls: ['./bandoleras.page.scss'],
})
export class BandolerasPage implements OnInit {

  constructor(private menuCtrl:MenuController) {}

  ngOnInit() {
  }

  onClick(){
    this.menuCtrl.toggle()
  }

}
