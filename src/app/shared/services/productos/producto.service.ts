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

	eliminarProducto(id: string) {
		return this._http.delete<Respuesta<null>>(`products/${id}`)
	}

	obtenerProducto(id: string) {
		return this._http.get<Respuesta<boolean>>(`products/${id}`)
	}

	verificarExistencia(id: string) {
		return this._http.get<boolean>(`products/verification/${id}`)
	}
}
