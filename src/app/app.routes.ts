import { RouterModule, Routes } from '@angular/router';
import { AlmacenesComponent } from './components/almacenes/almacenes.component';
import { ProduccionHomeComponent } from './components/produccion-home/produccion-home.component';
import { RHComponent } from './components/rh/rh.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { FinanzasComponent } from './components/finanzas/finanzas.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { InventarioComponent } from './components/inventario/inventario.component';

const routes: Routes = [
    { path: 'almacenes', component: AlmacenesComponent },
    { path: 'produccion', component: ProduccionHomeComponent },
    { path: 'RH', component: RHComponent },
    { path: 'catalogo', component: CatalogoComponent },
    { path: 'finanzas', component: FinanzasComponent },
    { path: 'clientes', component: ClientesComponent },
    { path: 'inventario', component: InventarioComponent },
    { path: '**', pathMatch:'full', redirectTo: '/catalogo' }
];

export const appRouting = RouterModule.forRoot(routes);


