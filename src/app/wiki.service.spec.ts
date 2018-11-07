import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { WikiService } from './wiki.service';

describe('WikiService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientModule ] // added 
  }));

  it('should be created', () => {
    const service: WikiService = TestBed.get(WikiService);
    expect(service).toBeTruthy();
  });
  
});
