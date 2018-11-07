import { Component, OnInit } from '@angular/core';

import { GiphyService } from '../giphy.service';
import { HistoryService } from '../history.service';
import { WikiService } from '../wiki.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  searches: any[];
  wikiResults: string[];
  giphyResults: string[];
  totalWikiResults: number;
  totalGiphyResults: number;

  constructor(
    private wikiService: WikiService,
    private giphyService: GiphyService,
    private historyService: HistoryService) {
    
  //this.searches = [];
  //this.wikiResults = [];
  //this.giphyResults = [];
}

search(text: string) {
  
  this.historyService.push(text);

  this.wikiService.search(text).subscribe(results => {
    this.wikiResults = results;
    this.totalWikiResults = results.length;
    },
    (error) => {
      console.log('Search error in wikipedia');
      console.log(error);
    }
  );


  this.giphyService.search(text).subscribe(results => { 
    this.giphyResults = results
    this.totalGiphyResults = results.length;
    },
    (error) => {
      console.log('Search error in giphy');
      console.log(error);
    }
  );
}

  ngOnInit() {
  }

}
