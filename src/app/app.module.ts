import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AlmacenesComponent } from './components/almacenes/almacenes.component';
import { ProduccionHomeComponent } from './components/produccion-home/produccion-home.component';
import { appRouting } from './app.routes';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RHComponent } from './components/rh/rh.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { FinanzasComponent } from './components/finanzas/finanzas.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { InventarioComponent } from './components/inventario/inventario.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AlmacenesComponent,
    ProduccionHomeComponent,
    RHComponent,
    CatalogoComponent,
    FinanzasComponent,
    ClientesComponent,
    InventarioComponent
    
    
  ],
  imports: [
    BrowserModule,
    appRouting,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
