import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-filtrar-peliculas',
  templateUrl: './filtrar-peliculas.component.html',
  styleUrls: ['./filtrar-peliculas.component.css']
})
export class FiltrarPeliculasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('select').formSelect();
  }

}
