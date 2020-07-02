import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, UrlSegment, Router } from '@angular/router';

import { AuthService } from './auth.service';

@Component({
	selector: 'app-auth',
	templateUrl: './auth.component.html',
	styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
	authForm: FormGroup;
	buttonText: string;
	isLoading = false;
	isSignup = false;

	constructor(private route: ActivatedRoute, private authService: AuthService, private router: Router) { }

	ngOnInit() {
		this.authForm = new FormGroup({
			'username': new FormControl(null, Validators.required),
			'password': new FormControl(null, Validators.required),
		});
		this.route.url.subscribe((urlSegment: UrlSegment[]) => {
			// This is called whenever the route URL changes
			const path = urlSegment[0].path;
			this.isSignup = (path === 'signup');
			this.buttonText = (this.isSignup) ? 'Sign up' : 'Login';
		});
	}

	onSubmit() {
		this.isLoading = true;
		const username = this.authForm.value['username'];
		const password = this.authForm.value['password'];
		if (this.isSignup) {
			this.signupUser(username, password);
		} else {
			this.loginUser(username, password);
		}
	}

	signupUser(username: string, password: string) {
		this.authService.createUser(username, password)
			.then(response => {
				this.isLoading = false;
				this.router.navigate(['login']);
			})
			.catch(error => {
				this.isLoading = false;
				alert(error.error.message);
			});
	}

	loginUser(username: string, password: string) {
		this.authService.loginUser(username, password)
			.then(response => {
				this.isLoading = false;
				this.router.navigate(['']);
			})
			.catch(error => {
				this.isLoading = false;
				alert(error.error.message);
			});
	}
}