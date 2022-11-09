import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-bolsos',
  templateUrl: './bolsos.page.html',
  styleUrls: ['./bolsos.page.scss'],
})
export class BolsosPage implements OnInit {

  constructor(private menuCtrl:MenuController) {}

  ngOnInit() {
  }

  onClick(){
    this.menuCtrl.toggle()
  }


}
