import { TestBed, inject } from '@angular/core/testing';

import { LoginFacebookService } from './login-facebook.service';

describe('LoginFacebookService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginFacebookService]
    });
  });

  it('should be created', inject([LoginFacebookService], (service: LoginFacebookService) => {
    expect(service).toBeTruthy();
  }));
});
