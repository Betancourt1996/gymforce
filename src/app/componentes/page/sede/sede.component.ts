import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import maplibregl, { Map, Marker } from 'maplibre-gl';
import { FooterComponent } from "../../footer/footer.component";
import { CarruselSedeComponent } from "../shared/carrusel-sede/carrusel-sede.component";
import { ContactoFormComponent } from "../shared/contacto-form/contacto-form.component";

@Component({
  selector: 'app-sede',
  standalone: true,
  imports: [FooterComponent, CarruselSedeComponent, ContactoFormComponent],
  templateUrl: './sede.component.html',
  styleUrl: './sede.component.scss'
})
export class SedeComponent implements  AfterViewInit {
  @ViewChild('mapa', { static: true }) mapaContainer!: ElementRef;
  map!: Map;

  ngAfterViewInit() {
    this.map = new maplibregl.Map({
      container: this.mapaContainer.nativeElement,
      style:  'https://api.maptiler.com/maps/streets/style.json?key=uyW0XCa9sIcc2L4D5SZS',
      center: [-79.9091878, -2.1416158],
      zoom: 15,
    });
    // Agrega un marcador
    const marker = new maplibregl.Marker()
      .setLngLat([-79.9091878, -2.1416158])
      .addTo(this.map);
  }
}