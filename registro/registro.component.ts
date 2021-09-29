import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';
import { PersonaService } from '../persona.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
persona!:Persona;
  constructor(private personaService: PersonaService) { }

  ngOnInit(): void {
    this.persona= new Persona;
  }

add(){
  alert('Se agrego una nueva persona');
  this.personaService.post(this.persona);
}
}
