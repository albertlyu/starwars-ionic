import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';


@Component({
  templateUrl: 'build/pages/resource-details/resource-details.html'
})
export class ResourceDetailsPage {
  selectedResource: {};
  attributeName: string;
  attributes: Array<string>;

  constructor(public navCtrl: NavController, navParams: NavParams) {
    // If we navigated to this page, we will have a resource available as a nav param
    this.selectedResource = navParams.get('resource');
    this.attributeName = navParams.get('attribute');
    this.attributes = Object.keys(this.selectedResource);
  }
}
