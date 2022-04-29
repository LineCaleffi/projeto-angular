import { TestBed } from '@angular/core/testing';

import { UsuaripsService } from './usuarios.service';

describe('UsuaripsService', () => {
  let service: UsuaripsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuaripsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
