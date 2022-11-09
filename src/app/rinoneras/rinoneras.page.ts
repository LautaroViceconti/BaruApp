import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-rinoneras',
  templateUrl: './rinoneras.page.html',
  styleUrls: ['./rinoneras.page.scss'],
})
export class RinonerasPage implements OnInit {

  constructor(private menuCtrl:MenuController) {}

  ngOnInit() {
  }

  onClick(){
    this.menuCtrl.toggle()
  }


}
