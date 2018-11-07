import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

import { giphy } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {

  constructor(private http: HttpClient) {
  }

  search(text: string) {

    const query = `${giphy.urlBase}${giphy.apiKey}&q=${text}`;

    const dataObject = this.http.get(query)
                                .pipe(
                                  map(response => response['data']
                                    .map(result => result['images']['original']['url'])
                                  )
                                );

    //dataObject.subscribe(results => { console.log(`results = ${results}`); });

    return dataObject;
  }
}
