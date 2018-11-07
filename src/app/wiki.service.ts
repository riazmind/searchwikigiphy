import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { wiki } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WikiService {

  constructor(private http: HttpClient) {
  }

  search(text: string) {

    const query = `${wiki.urlBase}${text}`; 

    // store all titles streams in dataObject  
    const dataObject = this.http.get(query)
    .pipe(
      map(response => response['query'].search
        .map(result => result['title'])
      )
    );

    // subscribe to get titles 
    //dataObject.subscribe(results => { console.log(`results = ${results}`); });
    
    return dataObject;
  }
}
