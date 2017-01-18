import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Event } from './event';

@Injectable()
export class EventService {
    private eventsUrl = "http://localhost:3001/api/events";

    constructor(private http: Http) { }

    getEvents(){
      return this.http
            .get(this.eventsUrl)
            .toPromise()
            .then(response => response.json() as Event[])
            .catch(this.handleError);
    }

    handleError(error: any):Promise<any>{
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);        
    }
}