import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  searches: any[];

  constructor() {
    this.searches = [];
  }

  push(text: string) {
    this.searches.push(
        {
          searchText: text, 
          timestamp: new Date()
        }
      );
    //console.log(this.searches);
  }

  get() {
    return this.searches;
  }
}
