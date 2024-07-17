export interface Respuesta<T> {
	data: T;
	message?: string;
}

export interface RespuestaError {
	name: string;
	message: string;
}
