import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-mochilas',
  templateUrl: './mochilas.page.html',
  styleUrls: ['./mochilas.page.scss'],
})
export class MochilasPage implements OnInit {

  constructor(private menuCtrl:MenuController) {}

  ngOnInit() {
  }

  onClick(){
    this.menuCtrl.toggle()
  }


}
