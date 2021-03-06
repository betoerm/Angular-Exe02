import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { TituloComponent } from "../titulo/titulo.component";
import { CapaComponent } from "../capa/capa.component";

@NgModule({
  declarations: [AppComponent, TituloComponent, CapaComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
