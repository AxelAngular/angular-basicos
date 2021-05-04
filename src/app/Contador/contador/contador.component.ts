import { Component } from "@angular/core";

@Component({
    selector : 'app-contador',  // El nombre que queramos
    template : `

        <h1>{{ titulo }}</h1>

        <!-- <button (click)="acumularBase(+5)">+5</button> -->
        <h1>La base es: <strong> {{base}} </strong></h1>
        <!-- <button (click)=" acumularBase(-5) ">-5</button> -->

        <button (click)="acumular(base)">+{{base}}</button>

        <span> {{ numero }} </span>

        <button (click)=" acumular(-base) ">-{{base}}</button>

    `

})


export class ContadorComponent{
    titulo : string = 'Contador App';
    numero :number = 10;
    base   :number =5;

    acumular ( valor:number ){
      this.numero += valor;
    }
}