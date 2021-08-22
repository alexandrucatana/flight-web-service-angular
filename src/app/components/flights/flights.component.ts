import { Component, OnInit } from '@angular/core';
import { Flight } from '../../models/Flight';
import { FlightService} from '../../services/flight.service';


@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {
  flights: Flight[];

  constructor(private flightService: FlightService) { }

  ngOnInit() {
    this.getFlights();
  }

  getFlights(): void {
    this.flightService.getAllFlights().subscribe(flights => this.flights = flights);
  }
}
