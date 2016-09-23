import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


/*
  Generated class for the ChoicePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/choice/choice.html',
})
export class ChoicePage {

  constructor(private navCtrl: NavController) {

  }
  answer1(){
    alert("คุณตอบถูก");
  }
   answer2(){
    alert("คุณตอบผิด");
  }

}
