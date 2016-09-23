import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChoicePage } from '../choice/choice';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {

  }
  gotoChoice(){
    this.navCtrl.push(ChoicePage);
  }
}
