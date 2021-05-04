import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// import { ContadorComponent } from './Contador/contador/contador.component';  // Aqui le indico de que ruta // path debe importar esa clase
// import { HeroeComponente } from './Heroes/heroe/heroe.component';
// import { ListadoComponent } from './Heroes/listado/listado.component';
import { HeroeModule } from './Heroes/heroes.module';
import { ContadorModule } from './Contador/contador.module';


@NgModule({
  declarations: [
    AppComponent,
    // ContadorComponent,  // Esto es la clase que se hace referencia
    // HeroeComponente, 
    // ListadoComponent,
  ],
  imports: [
    BrowserModule,
    HeroeModule,
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
