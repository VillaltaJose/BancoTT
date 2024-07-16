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

	busqueda: string = '';

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
			console.log(resp)
			this.productos = resp.data;
		});
	}

	eliminar(id: string) {
		this._productoService.eliminarProducto(id)
		.subscribe(resp => {
			console.log(resp);
			this.obtenerProductos();
		})
	}

}
