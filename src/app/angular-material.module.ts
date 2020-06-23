import { NgModule } from '@angular/core';

import {
	MatToolbarModule,
	MatCardModule,
} from '@angular/material';

@NgModule({
	exports: [
		MatToolbarModule,
		MatCardModule,
	],
})
export class AngularMaterialModule { }