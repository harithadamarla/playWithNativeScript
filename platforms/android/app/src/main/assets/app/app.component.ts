// import { Component } from "@angular/core";
import {Component, ViewChild} from '@angular/core';
import { registerElement } from 'nativescript-angular/element-registry';
import { MapView, Marker, Position } from 'nativescript-google-maps-sdk';
import { SegmentedBar, SegmentedBarItem } from "ui/segmented-bar";

registerElement('MapView', () => MapView);


@Component({
  selector: "my-app",
  templateUrl: "views/rc.xml",
  styleUrls: ["views/main.css"]
})
// export class AppComponent {
 
// }
exports.myChangeEvent = function(args){
    var changeEventText = "Page changed to index: " + args.index;
    console.log(changeEventText);
}
 
exports.myScrollingEvent = function(args){
    console.log("Scrolling: " + args.state.offset);
}
export class AppComponent {
    public items: Array<SegmentedBarItem>;
    public selectedIndex = 0;
    public visibility1 = true;
    public visibility2 = false;
    public visibility3 = false;
    tabNames = ["Facebook","Twitter","Instagram"];

  latitude =  39.1710032;
  longitude = -86.5171975;
  zoom = 15;
  minZoom = 0;
  maxZoom = 22;
  bearing = 0;
  tilt = 0;
  padding = [40, 40, 40, 40];
  mapView: MapView;

  lastCamera: String;
  constructor() {
    this.items = [];
    for (let i = 1; i < 4; i++) {
        let segmentedBarItem = <SegmentedBarItem>new SegmentedBarItem();
        segmentedBarItem.title = this.tabNames[i-1];
        this.items.push(segmentedBarItem);
    }
    this.selectedIndex = 0;
}


  public onSelectedIndexChange(args) {
    let segmetedBar = <SegmentedBar>args.object;
    this.selectedIndex = segmetedBar.selectedIndex;
    switch (this.selectedIndex) {
        case 0:
            this.visibility1 = true;
            this.visibility2 = false;
            this.visibility3 = false;
            break;
        case 1:
            this.visibility1 = false;
            this.visibility2 = true;
            this.visibility3 = false;
            break;
        case 2:
            this.visibility1 = false;
            this.visibility2 = false;
            this.visibility3 = true;
            break;
        default:
            break;
    }
}

  onMapReady(event) {
      console.log('Map Ready');

      this.mapView = event.object;

      console.log("Setting a marker...");

      var marker = new Marker();
      marker.position = Position.positionFromLatLng(39.1710032, -86.5171975);
      marker.title = "Wells Library";
      marker.snippet = "Indiana";
      marker.userData = {index: 1};
      this.mapView.addMarker(marker);
  }

  onCoordinateTapped(args) {
      console.log("Coordinate Tapped, Lat: " + args.position.latitude + ", Lon: " + args.position.longitude, args);
  }

  onMarkerEvent(args) {
      console.log("Marker Event: '" + args.eventName
          + "' triggered on: " + args.marker.title
          + ", Lat: " + args.marker.position.latitude + ", Lon: " + args.marker.position.longitude, args);
  }

  onCameraChanged(args) {
      console.log("Camera changed: " + JSON.stringify(args.camera), JSON.stringify(args.camera) === this.lastCamera);
      this.lastCamera = JSON.stringify(args.camera);
  }

}