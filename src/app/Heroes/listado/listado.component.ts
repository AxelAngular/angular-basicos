import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes :string [] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Cap. America '];

  heroeBorrado:string = '';

  constructor() { 
    console.log("Constructor");
  }

  borrarHeroe() {
    // this.heroes.splice(1,1); 
    this.heroeBorrado = this.heroes.shift() || '';
    console.log(this.heroeBorrado);
  }
}
