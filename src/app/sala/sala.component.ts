import { Component, OnInit } from '@angular/core';
import { RetadoresService } from './retadores.service';

@Component({
  selector: 'app-sala',
  templateUrl: './sala.component.html',
  styleUrls: ['./sala.component.css'],
  providers: [RetadoresService]
})
export class SalaComponent implements OnInit {
  siguiente : string = ""

  constructor(private retadoresService: RetadoresService) { }

  ngOnInit(): void {
    this.siguiente = this.retadoresService.getRetador()!;
  }

  onSiguientePopped(event: {siguiente: string}){
    console.log(event.siguiente);
    this.siguiente = event.siguiente;
  }

}
