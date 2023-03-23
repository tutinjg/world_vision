import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  
//FUNCIÓN QUE APLICA ESTILO A OPCIÓN SELECCIONADA Y QUITA EL ESTILO A LA SELECCIÓN ANTERIOR
seleccionar(link:any) {
  let opciones:any = document.querySelectorAll('#links a');
  opciones[0].className = "";
  opciones[1].className = "";
  opciones[2].className = "";
  opciones[3].className = "";
  opciones[4].className = "";
  link.className = "seleccionado";
// Desaparecemos el menu una vez seleccionada una opción en el modo responsive
var x:any = document.getElementById("nav");
x.className = "";
}

}
