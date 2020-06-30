import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, UrlSegment } from '@angular/router';

@Component({
	selector: 'app-auth',
	templateUrl: './auth.component.html',
	styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
	authForm: FormGroup;
	buttonText: string;
	isLoading = true;
	isSignup = false;

	constructor(private route: ActivatedRoute) { }

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
		console.log(username, password);
		// Use AuthService to either signup or login the user!
		this.isLoading = false;
	}
}