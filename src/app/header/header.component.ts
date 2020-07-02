import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './../auth/auth.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
	constructor(private router: Router, private authService: AuthService) { }

	onLogout() { this.authService.logoutUser(); }
	isAuth() { return this.authService.isAuthenticated(); }
	isAdmin() { return this.authService.isAdmin(); }
}