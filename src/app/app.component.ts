import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'neetas-artwork';

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.authService.autoAuthUser();
  	this.router.events.subscribe(event => {
  		if (!(event instanceof NavigationEnd)) {
  			return;
  		}
  		window.scrollTo(0, 0);
  	});
  }
}
