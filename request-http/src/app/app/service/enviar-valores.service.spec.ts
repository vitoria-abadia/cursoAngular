import { TestBed } from '@angular/core/testing';
import { EnviarValoresService } from './enviar-valores.service';

describe('UnsubscribeRxjsService', () => {
  let service: EnviarValoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnviarValoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
