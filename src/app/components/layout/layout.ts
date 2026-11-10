import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  selector: 'app-layout',
  styleUrl: './layout.css',
  templateUrl: './layout.html',
})
export class Layout {
  loggeduseremail: string = ""
  router = inject(Router)

  constructor(){
    const loggeddata = globalThis.localStorage?.getItem('newuser')
    this.loggeduseremail = loggeddata ?? ''
  }

  logout(){
    globalThis.localStorage?.removeItem('newuser')
    this.router.navigateByUrl('/login')
  }
}
