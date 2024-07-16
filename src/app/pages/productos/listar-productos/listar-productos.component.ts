import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/shared/services/productos/producto.service';

@Component({
	selector: 'app-listar-productos',
	templateUrl: './listar-productos.component.html',
	styleUrls: ['./listar-productos.component.scss'],
})
export class ListarProductosComponent implements OnInit {
	productos: Producto[] = [];

	constructor(
		private _productoService: ProductoService,
	) { }

	ngOnInit(): void {
		this.obtenerProductos();
	}

	obtenerProductos() {
		this.productos = [];

		this._productoService.obtenerProductos()
		.subscribe(resp => {
			this.productos = resp.data;
		});
	}

}
