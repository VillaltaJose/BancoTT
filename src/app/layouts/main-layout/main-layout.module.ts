import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderModule } from 'src/app/shared/components/header/header.module';

const routes: Routes = [
	{ path: '', component: MainLayoutComponent, children: [
		{ path: '', redirectTo: 'productos', pathMatch: 'full' },
		{ path: 'productos', loadChildren: () => import('../../pages/productos/listar-productos/listar-productos.module').then(m => m.ListarProductosModule) },
	],}
];

@NgModule({
	declarations: [MainLayoutComponent],
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		HeaderModule,
	],
})
export class MainLayoutModule {}
