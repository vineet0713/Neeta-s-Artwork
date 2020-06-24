import { NgModule } from '@angular/core';

import {
	MatToolbarModule,
	MatCardModule,
	MatGridListModule,
} from '@angular/material';

@NgModule({
	exports: [
		MatToolbarModule,
		MatCardModule,
		MatGridListModule,
	],
})
export class AngularMaterialModule { }