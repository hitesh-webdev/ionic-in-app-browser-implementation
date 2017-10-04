import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  htmlContent: string = 'Implementation of In App Browser (Note - Dynamic attribute addition is not supported in Angular 2). <a href="https://www.google.com">Link to Google</a>';

  constructor(public navCtrl: NavController) {}

}
