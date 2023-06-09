import { Inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from './services/auth/auth.service';

export const authGuard: CanActivateFn = async (route, state) => {
  const authService = Inject(AuthService);
  const user =  await authService.userSubject;
  if(user){
    return true
  }else{
    return false
  }
};
