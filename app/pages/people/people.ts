import {Component} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'

@Component({
    templateUrl: 'build/pages/people/people.html'
})
export class PeoplePage {
    people: Array<{}>[];
    nextUrl: string;
    countRemaining: number;

    constructor(private http: Http) {
        var peopleUrl = 'http://swapi.co/api/people/';
        this.getPeople(peopleUrl);
    }

    /**
     * Get people from URL
     * @param  {string} peopleUrl
     */
    getPeople(peopleUrl) {
        this.http.get(peopleUrl).map(response => response.json()).subscribe(data => {
            if (!this.people)
            {
                this.people = data.results;
            }
            else
            {
                // ES6 for array extend
                this.people.push(...data.results);
            }
            this.nextUrl = data.next;
            this.countRemaining = data.count - this.people.length;
            console.log(data);
        });
    }

    /**
     * Get person's details
     * @param  {MouseEvent} mouse event on click
     * @param  {Object} person's details
     */
    getPersonDetails(event, person) {
        console.log(event);
        console.log(person);
    }
}
