import {Component} from '@angular/core';
import {Http} from '@angular/http';
import {NavController, NavParams} from 'ionic-angular';
import {ResourceDetailsPage} from '../resource-details/resource-details';
import 'rxjs/add/operator/map'

@Component({
    templateUrl: 'build/pages/resources/resources.html'
})
export class ResourcesPage {
    title: string;
    resources: Array<{}>[];
    attributes: [string, string];
    nextUrl: string;
    countRemaining: number;

    constructor(private http: Http
              , private params: NavParams
              , private navCtrl: NavController) {
        this.title = this.params.get('title');
        this.attributes = this.params.get('attributes');
        this.getResources('http://swapi.co/api/' + this.title.toLowerCase() + '/');
    }

    /**
     * Get resources from URL
     * @param  {string} resourceUrl
     */
    getResources(resourceUrl) {
        this.http.get(resourceUrl).map(response => response.json()).subscribe(data => {
            if (!this.resources)
            {
                this.resources = data.results;
            }
            else
            {
                // ES6 for array extend
                this.resources.push(...data.results);
            }
            this.nextUrl = data.next;
            this.countRemaining = data.count - this.resources.length;
        });
    }

    /**
     * Get resource's details
     * @param  {MouseEvent} mouse event on click
     * @param  {Object} resource's details
     */
    resourceTapped(event, resource) {
        console.log(resource);
        this.navCtrl.push(ResourceDetailsPage, {
            resource: resource,
            attribute: this.attributes[0]
        });
    }
}
