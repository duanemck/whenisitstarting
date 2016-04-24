import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';

//Grab everything with import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch';


@Injectable()
export class DataService {
  
    baseUrl: string = 'http://localhost:1337/';

    constructor(private http: Http) { }
    
    getChannels() {
        return this.http.get(this.baseUrl + 'channels?limit=200')
                        .map((res: Response) => res.json())
                        .catch(this.handleError);
    }

    getOrders(){
      return this.http.get(this.baseUrl + 'orders.json')
                      .map((res: Response) => res.json())
                      .catch(this.handleError);               
    }
    
    handleError(error: any) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}
