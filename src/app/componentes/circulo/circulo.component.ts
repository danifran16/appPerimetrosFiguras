import { Component, OnInit } from '@angular/core';
import { IonButton, IonInput ,IonCardContent, IonCardSubtitle, IonCardHeader, IonCardTitle, IonCard, IonItem, IonButtons } from "@ionic/angular/standalone";
import { Circulo } from 'src/app/modelo/figurasGeometricas';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  standalone: true,
  imports: [FormsModule, IonButton, IonButtons, IonItem, IonInput, IonCardContent, IonCardSubtitle, IonCardHeader, IonCardTitle, IonCard]
})
export class CirculoComponent  implements OnInit {
  resultado: string = ""
  radioInputStr: string = ""
  nombre: string = "circulo"
  constructor() { }

  ngOnInit() {}

  calcularPerimetro() {

    const parseIntRadio =  parseInt(this.radioInputStr)

    const CirculoClass = new Circulo(parseIntRadio, this.nombre) 
    const rCir = CirculoClass.calcularPerimetro()

    this.resultado = `el perimetro del circulo es ${(rCir)}`

  }


}
