import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-billeteras',
  templateUrl: './billeteras.page.html',
  styleUrls: ['./billeteras.page.scss'],
})
export class BilleterasPage implements OnInit {

  constructor(private menuCtrl:MenuController) {}

  ngOnInit() {
  }

  onClick(){
    this.menuCtrl.toggle()
  }
}