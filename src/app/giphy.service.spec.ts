import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { GiphyService } from './giphy.service';

describe('GiphyService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientModule ] // added 
  }));

  
  it('should be created', () => {
    const service: GiphyService = TestBed.get(GiphyService);
    expect(service).toBeTruthy();
  });

  /*
  it(`should have as title 'Search in Wikipedia and Giphy'`, () => {
    const fixture = TestBed.createComponent(GiphyService);
    const app = fixture.debugElement.componentInstance;
    //expect(giphy.apiKey).toEqual('Search in Wikipedia and Giphy');
    
  });
  */
  
});
