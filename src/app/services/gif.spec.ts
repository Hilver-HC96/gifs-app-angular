import { TestBed } from '@angular/core/testing';
import { Gif } from './gif';

describe('Gif', () => {
  let service: Gif;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Gif);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
