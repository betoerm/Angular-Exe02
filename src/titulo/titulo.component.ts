import { Component } from "@angular/core";

@Component({
  selector: "titulo",
  templateUrl: "./titulo.component.html"
})
export class TituloComponent {
  titulos: aTitulo[] = [
    { id: 1, name: "A origem" },
    { id: 2, name: "Matrix" },
    { id: 3, name: "Parasita" },
    { id: 4, name: "Blade Runner" }
  ];
}
