import { NgModule } from '@angular/core';

import {
	MatToolbarModule,
	MatCardModule,
	MatGridListModule,
	MatButtonModule,
} from '@angular/material';

@NgModule({
	exports: [
		MatToolbarModule,
		MatCardModule,
		MatGridListModule,
		MatButtonModule,
	],
})
export class AngularMaterialModule { }