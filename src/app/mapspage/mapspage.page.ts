import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import {Map,tileLayer,marker} from 'leaflet';
import * as tokenMap from '../../environments/environment';

@Component({
  selector: 'app-mapspage',
  templateUrl: './mapspage.page.html',
  styleUrls: ['./mapspage.page.scss'],
})
export class MapspagePage implements OnInit {

  //mapbox vars
  map: mapboxgl.Map;
  public mapbox = (mapboxgl as typeof mapboxgl);
  public style = 'mapbox://styles/mapbox/streets-v11';
  public lat = 40.415185;
  public lng = -3.694114;
  public zoom = 14;
  public pitch = 45;
  public bearing = -10.6;
  public scale = new mapboxgl.ScaleControl({
    maxWidth: 60,
    unit: 'meters'
  });

  //leaflet vars
  mapL:Map;
  newMarker:any;
  address:string[];

  constructor() {
    (mapboxgl as any).accessToken = tokenMap.environment.tokenMapBox;
   }

  ngOnInit() {
    this.buildMap();
  }

  ionViewDidEnter(){
    this.buildMapLeaflet();
  }


  buildMap() {
    this.map = new mapboxgl.Map({
      container: 'map', //el tag del html #map
      style: this.style,
      zoom: this.zoom,
      center: [this.lng, this.lat],
      pitch: this.pitch,
      bearing: this.bearing
    });
    this.map.addControl(new mapboxgl.NavigationControl());
    this.map.addControl(this.scale);

    return this.map;
  }

  buildMapLeaflet(){
    this.mapL = new Map("mapId").setView([17.3850,78.4867], 13);tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    { 
      attribution: '© Map data '
    })
    .addTo(this.mapL); // This line is added to add the Tile Layer to our map
  }

}
