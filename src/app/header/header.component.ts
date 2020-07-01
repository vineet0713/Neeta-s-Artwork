import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
	isAuthenticated = true;
	isAdmin = true;

	constructor(private router: Router) { }

	onLogout() {
		this.isAuthenticated = false;
		this.isAdmin = false;
		this.router.navigate(['']);
	}
}