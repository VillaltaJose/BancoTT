import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { lastValueFrom } from 'rxjs';
import { Producto } from 'src/app/models/producto';
import { RespuestaError } from 'src/app/models/respuesta';
import { ProductoService } from 'src/app/shared/services/productos/producto.service';

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.scss']
})
export class NuevoProductoComponent {
	formRegistro: FormGroup;
	dateToCompare?: Date;

	today = new Date();

	errors: string[] = [];

	constructor(
		private _productoService: ProductoService,
	) {
		this.formRegistro = new FormGroup({
			id: new FormControl(null, [
				Validators.required,
				Validators.minLength(3),
				Validators.maxLength(10),
			]),
			name: new FormControl(null, [
				Validators.required,
				Validators.minLength(5),
				Validators.maxLength(100),
			]),
			description: new FormControl(null, [
				Validators.required,
				Validators.minLength(10),
				Validators.maxLength(200),
			]),
			logo: new FormControl(null, [Validators.required]),
			date_release: new FormControl(null, [Validators.required]),
			date_revision: new FormControl({ value: null, disabled: false }, [
				Validators.required,
			]),
		});
	}

	reiniciarForm() {
		this.formRegistro.reset();
	}

	async registrarProducto() {
		this.errors = [];

		if (this.formRegistro.invalid) {
			this.formRegistro.markAllAsTouched();
			return;
		}

		if (!this.checkDateValidation()) {
			return;
		}

		if (await this.checkIfExists()) {
			this.errors.push('El producto ya existe');
			return;
		}

		const producto: Producto = this.formRegistro.getRawValue();

		this._productoService.registrarProducto(producto)
		.subscribe(resp => {
			console.log(resp);
			this.reiniciarForm();
		}, (error: RespuestaError) => {
			this.errors.push(error.message);
		})
	}

	checkDateValidation(): boolean {
		const dateRelease = new Date(this.formRegistro.get('date_release')?.value);
		const dateRevision = new Date(this.formRegistro.get('date_revision')?.value);

		dateRelease.setFullYear(dateRelease.getFullYear() + 1);
		dateRelease.setHours(0, 0, 0, 0);

		dateRevision.setHours(0, 0, 0, 0);

		if (dateRelease.getTime() != dateRevision.getTime()) {
			this.formRegistro.get('date_revision')?.setErrors({ InvalidDate: true });
			return false;
		}

		this.formRegistro.get('date_revision')?.setErrors(null);
		return true;
	}

	async checkIfExists() {
		const id = this.formRegistro.get('id')?.value;
		if (!id) return;

		try {
			const resp = await lastValueFrom(this._productoService.verificarExistencia(id));

			return resp;
		} catch {
			return false;
		}
	}
}
