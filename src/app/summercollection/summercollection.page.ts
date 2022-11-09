import { Component, OnInit } from '@angular/core';
import { MenuController} from '@ionic/angular';

@Component({
  selector: 'app-summercollection',
  templateUrl: './summercollection.page.html',
  styleUrls: ['./summercollection.page.scss'],
})
export class SummercollectionPage implements OnInit {
  [x: string]: any;

  constructor(private menuCtrl:MenuController) {}

  ngOnInit() {
  }


  onClick(){
    this.menuCtrl.toggle()
  }
}
