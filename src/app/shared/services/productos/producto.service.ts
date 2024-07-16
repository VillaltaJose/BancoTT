import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Respuesta } from 'src/app/models/respuesta';
import { Producto } from 'src/app/models/producto';

@Injectable({
	providedIn: 'root',
})
export class ProductoService {
	constructor(
		private _http: HttpClient,
	) {}

	obtenerProductos() {
		return this._http.get<Respuesta<Producto[]>>('products');
	}

	registrarProducto(producto: Producto) {
		return this._http.post<Respuesta<Producto>>('products', producto)
	}
}
