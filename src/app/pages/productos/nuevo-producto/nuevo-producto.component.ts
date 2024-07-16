import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/shared/services/productos/producto.service';

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.scss']
})
export class NuevoProductoComponent {
	formRegistro: FormGroup;

	constructor(
		private _productoService: ProductoService,
	) {
		this.formRegistro = new FormGroup({
			id: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
			name: new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(100)]),
			description: new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(200)]),
			logo: new FormControl(null, [Validators.required]),
			date_release: new FormControl(null, [Validators.required]),
			date_revision: new FormControl({value: null, disabled: false}, [Validators.required]),
		});
	}

	reiniciarForm() {
		this.formRegistro.reset();
	}

	registrarProducto() {
		if (this.formRegistro.invalid) {
			this.formRegistro.markAllAsTouched();
			return;
		}

		const producto: Producto = this.formRegistro.getRawValue();

		this._productoService.registrarProducto(producto)
		.subscribe(resp => {
			console.log(resp);
			this.reiniciarForm();
		})
	}
}
