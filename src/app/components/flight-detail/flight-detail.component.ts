import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { FlightService } from '../../services/flight.service';
import {Flight} from '../../models/Flight';

@Component({
  selector: 'app-flight-detail',
  templateUrl: './flight-detail.component.html',
  styleUrls: ['./flight-detail.component.css']
})
export class FlightDetailComponent implements OnInit {
  flight: Flight;

  constructor(
    private route: ActivatedRoute,
    private flightService: FlightService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getFlight();
  }

  getFlight(): void {
    const airlineId = this.route.snapshot.paramMap.get('airlineId');

    this.flightService.getFlight(airlineId)
      .subscribe(flight => this.flight = flight);
  }

  goBack(): void {
    this.location.back();
  }
}
