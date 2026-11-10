import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';

export const authGuard: CanActivateChildFn = () => {
  const router = inject(Router)
  const isdatapresent = globalThis.localStorage?.getItem('newuser')

  return isdatapresent ? true : router.createUrlTree(['/login'])
};
