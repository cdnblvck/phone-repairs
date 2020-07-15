import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet.markercluster';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  mymap;
  showMap = false;
  markers: any = [];
  markerClusterGroup = new L.MarkerClusterGroup();
  bounds = L.latLngBounds([]);
  marker: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {

  }

  initLeafletMap() {
    this.mymap = L.map('map').setView([39.00622, -77.4286], 4);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    }).addTo(this.mymap);
    //var tabMarkers = [];

    this.marker = new L.Marker([39.00622, -77.4286]).bindPopup('<p><span><b></b></span></p><p>');
    //tabMarkers.push(this.marker);
    this.bounds.extend(this.marker.getLatLng());  //Récupere les données et fait un zoom auto
    this.markerClusterGroup.addLayer(this.marker);//Ajouter les points au markers de group

    this.mymap.fitBounds(this.bounds, { padding: [50, 50] });
    this.mymap.addLayer(this.markerClusterGroup);//associe le markerde groupe à la map












/*

    this.mymap = L.map('map').setView([39.00622, -77.4286], 14);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 20
    }).addTo(this.mymap);*/
  }
  ngAfterViewInit() {
    this.showMap = false;
    this.initLeafletMap();
  }
}
