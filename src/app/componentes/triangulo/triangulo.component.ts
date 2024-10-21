import { Component, OnInit } from '@angular/core';
import { IonCard, IonCardContent, IonCardHeader, IonInput, IonCardTitle, IonItem, IonCardSubtitle, IonButton, IonButtons } from "@ionic/angular/standalone";
import { TrianguloEscaleno } from 'src/app/modelo/figurasGeometricas';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
  standalone: true,
  imports: [IonButtons, IonButton, FormsModule, IonCardSubtitle, IonItem, IonCardTitle, IonCard, IonCardContent, IonCardHeader, IonInput]
})
export class TrianguloComponent  implements OnInit {
  resultado: string = ""
  ladoAInputStr: string = "";
  ladoBInputStr: string = "";
  ladoCInputStr: string = "";
  nombre: string = "triangulo"

  constructor() { }

  ngOnInit() {}

  calcularPerimetroTriangulo() {

    const parseIntLadoA = parseInt(this.ladoAInputStr)
    const parseIntLadoB = parseInt(this.ladoBInputStr)
    const parseIntLadoC = parseInt(this.ladoCInputStr)

    const trianguloClass = new TrianguloEscaleno(parseIntLadoA,parseIntLadoB, parseIntLadoC, this.nombre)
    const f = trianguloClass.calcularPerimetro()
    this.resultado = `el perimetro del triangulo es ${(f)}`
  }


}
