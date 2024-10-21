import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonSelect, IonSelectOption, SelectChangeEventDetail} from '@ionic/angular/standalone';
import { IonSelectCustomEvent } from '@ionic/core';
import { CirculoComponent } from '../componentes/circulo/circulo.component';
import { TrianguloComponent } from '../componentes/triangulo/triangulo.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonItem, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonSelect, IonSelectOption, CirculoComponent, TrianguloComponent, CommonModule],
})
export class HomePage {
  figuraGeometricaSeleccionada:string = ""
  
  constructor() {}

  esCirculo() {return this.figuraGeometricaSeleccionada == "circulo"}
  esTringulo() {return this.figuraGeometricaSeleccionada == "triangulo"}

// metodo manejador del select 
  selectFiguraGeometrica($event: IonSelectCustomEvent<SelectChangeEventDetail<any>>) {
    this.figuraGeometricaSeleccionada = ($event.detail.value);
    }



}
