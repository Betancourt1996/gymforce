import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { Map, MapStyle, Marker, config } from '@maptiler/sdk';
import '@maptiler/sdk/dist/maptiler-sdk.css';
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
export class SedeComponent implements OnInit, AfterViewInit, OnDestroy {
  map: Map | undefined;
  @ViewChild('map')
  private mapContainer!: ElementRef<HTMLElement>;
  ngOnInit(): void {
    config.apiKey = 'uyW0XCa9sIcc2L4D5SZS';
  }
  ngAfterViewInit() {
    const initialState = { lng: -79.9091878, lat: -2.1416158, zoom: 15 };
  
    this.map = new Map({
      container: this.mapContainer.nativeElement,
      style: MapStyle.STREETS,
      center: [initialState.lng, initialState.lat],
      zoom: initialState.zoom
    });
    new Marker({color: "#FF0000"})
      .setLngLat([-79.9091878,-2.1416158])
      .addTo(this.map);
  }
  ngOnDestroy() {
    this.map?.remove();
  }
}
