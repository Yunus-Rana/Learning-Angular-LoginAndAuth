import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Layout } from './components/layout/layout';
import { About } from './components/pages/about/about';
import { Contact } from './components/pages/contact/contact';
import { Home } from './components/pages/home/home';
import { NotFound } from './components/pages/not-found/not-found';
import { authGuard } from './guards/auth-guard';


export const routes: Routes = [
  { path: 'login', component: Login },
  {
    path: '',
    component: Layout,
    canActivateChild: [authGuard],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: Home },
      { path: 'about', component: About },
      { path: 'contact', component: Contact },
    ],
  },
  { path: '**', component: NotFound },
];
