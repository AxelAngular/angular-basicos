import { Component } from "@angular/core";


@Component({
    selector :'app-heroe',
    templateUrl :'heroe.component.html'
})

export class HeroeComponente{
    nombre : string ='Ironman';
    edad : number = 45;

    get nombreCapitalizado():string { //crear mediante co´digo que va a ser procesada
        return this.nombre.toUpperCase();
    }  

    obtenerNombre (): string{
        
        return `${ this.nombre } - ${ this.edad }`;
        // return this.nombre + ' - ' + this.edad; 
    }

    cambiarNombre(): void {
        this.nombre = 'Spiderman';
    }
    cambiarEdad(): void {
        this.edad = 30;
    }
}
