import { NgModule } from '@angular/core';

import {
	MatToolbarModule,
	MatCardModule,
	MatGridListModule,
	MatButtonModule,
	MatInputModule,
} from '@angular/material';

@NgModule({
	exports: [
		MatToolbarModule,
		MatCardModule,
		MatGridListModule,
		MatButtonModule,
		MatInputModule,
	],
})
export class AngularMaterialModule { }