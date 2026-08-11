import { TestBed } from '@angular/core/testing';

import { ServicioAPIDjangoService } from './servicio-apidjango.service';

describe('ServicioAPIDjangoService', () => {
  let service: ServicioAPIDjangoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioAPIDjangoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
