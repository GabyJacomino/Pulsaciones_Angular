import { Component, OnInit } from '@angular/core';

import { Persona } from '../persona';
import { PersonaService } from '../persona.service';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent implements OnInit {
personas!:Persona[];
searchText!:string;
  constructor(private personaService: PersonaService) { }

  ngOnInit(): void {
    this.get();
  }
get(){
  this.personas= this.personaService.get();
}
}
