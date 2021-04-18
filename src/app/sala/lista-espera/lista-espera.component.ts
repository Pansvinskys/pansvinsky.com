import { AfterViewChecked, AfterViewInit, EventEmitter } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import { RetadoresService } from '../retadores.service';

@Component({
  selector: 'app-lista-espera',
  templateUrl: './lista-espera.component.html',
  styleUrls: ['./lista-espera.component.css']
})
export class ListaEsperaComponent implements OnInit {
  usuarios : string[] = []

  constructor(private retadoresService: RetadoresService) { }

  ngOnInit(): void {
    this.usuarios = this.retadoresService.getRetadores();
  }



}
