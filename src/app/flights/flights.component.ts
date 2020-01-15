import { Component, OnInit } from '@angular/core';
import { Flight } from '../Flight';
import { FlightService} from '../flight.service';


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

  addFlight(name: string, start: string, destination: string): void {
    const newFlight = new Flight(name, start, destination);
    if (!newFlight) { return; }
    this.flightService.addFlight( newFlight)
      .subscribe(() => this.flights.push(newFlight))
    ;
  }
}
