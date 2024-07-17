import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormErrorComponent } from './form-error.component';
import { FormsModule } from '@angular/forms';

@NgModule({
	declarations: [FormErrorComponent],
	exports: [FormErrorComponent],
	imports: [
		CommonModule,
		FormsModule,
	],
})
export class FormErrorModule {}
