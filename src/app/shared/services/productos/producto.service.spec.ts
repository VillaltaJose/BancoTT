import { TestBed } from '@angular/core/testing';
import {
	HttpClientTestingModule,
	HttpTestingController,
} from '@angular/common/http/testing';
import { ProductoService } from './producto.service';
import { Producto } from 'src/app/models/producto';
import { Respuesta } from 'src/app/models/respuesta';

describe('ProductoService', () => {
	let service: ProductoService;
	let mock: HttpTestingController;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			providers: [ProductoService],
		});

		service = TestBed.inject(ProductoService);
		mock = TestBed.inject(HttpTestingController);
	});

	afterEach(() => {
		mock.verify();
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should retrieve products', () => {
		const mockResponse: Respuesta<Producto[]> = {
			data: [
				{
					id: 'AB1',
					name: 'Pruebas',
					description: 'asd asdasdasd',
					logo: 'asdasdas',
					date_release: new Date('2021-01-01'),
					date_revision: new Date('2022-01-01'),
				},
			],
		};

		service.obtenerProductos().subscribe((response) => {
			expect(response.data.length).toBe(1);
			expect(response.data).toEqual(mockResponse.data);
		});

		const req = mock.expectOne('products');
		expect(req.request.method).toBe('GET');
		req.flush(mockResponse);
	});

	it('should register a product', () => {
		const mockProduct: Producto = {
			id: 'AB1',
			name: 'Pruebas',
			description: 'asd asdasdasd',
			logo: 'asdasdas',
			date_release: new Date('2021-01-01'),
			date_revision: new Date('2022-01-01'),
		};
		const mockResponse: Respuesta<Producto> = { data: mockProduct };

		service.registrarProducto(mockProduct).subscribe((response) => {
			expect(response.data).toEqual(mockResponse.data);
		});

		const req = mock.expectOne('products');
		expect(req.request.method).toBe('POST');
		expect(req.request.body).toEqual(mockProduct);
		req.flush(mockResponse);
	});

	it('should delete a product', () => {
		const mockResponse: Respuesta<null> = { data: null };

		service.eliminarProducto('1').subscribe((response) => {
			expect(response.data).toBeNull();
		});

		const req = mock.expectOne('products/1');
		expect(req.request.method).toBe('DELETE');
		req.flush(mockResponse);
	});

	it('should retrieve a single product', () => {
		const mockResponse: Respuesta<boolean> = { data: true };

		service.obtenerProducto('1').subscribe((response) => {
			expect(response.data).toBeTrue();
		});

		const req = mock.expectOne('products/1');
		expect(req.request.method).toBe('GET');
		req.flush(mockResponse);
	});

	it('should verify product existence', () => {
		const mockResponse = true;

		service.verificarExistencia('1').subscribe((response) => {
			expect(response).toBeTrue();
		});

		const req = mock.expectOne('products/verification/1');
		expect(req.request.method).toBe('GET');
		req.flush(mockResponse);
	});
});
