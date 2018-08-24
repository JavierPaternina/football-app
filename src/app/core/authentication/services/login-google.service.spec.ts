import { TestBed, inject } from '@angular/core/testing';

import { LoginGoogleService } from './login-google.service';

describe('LoginGoogleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginGoogleService]
    });
  });

  it('should be created', inject([LoginGoogleService], (service: LoginGoogleService) => {
    expect(service).toBeTruthy();
  }));
});
