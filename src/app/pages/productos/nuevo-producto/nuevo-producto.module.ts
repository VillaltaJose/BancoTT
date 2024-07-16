import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuevoProductoComponent } from './nuevo-producto.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [NuevoProductoComponent],
	imports: [
		CommonModule,
		RouterModule.forChild([{ path: '', component: NuevoProductoComponent }]),
		FormsModule,
		ReactiveFormsModule,
	],
})
export class NuevoProductoModule {}
