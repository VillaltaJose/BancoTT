import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuevoProductoComponent } from './nuevo-producto.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormErrorModule } from 'src/app/shared/components/form-error/form-error.module';

@NgModule({
	declarations: [NuevoProductoComponent],
	imports: [
		CommonModule,
		RouterModule.forChild([{ path: '', component: NuevoProductoComponent }]),
		FormsModule,
		ReactiveFormsModule,
		FormErrorModule,
	],
})
export class NuevoProductoModule {}
