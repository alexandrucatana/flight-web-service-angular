import { Component, OnInit } from '@angular/core';
import { Flight } from 'src/app/models/Flight';
import { FlightService } from 'src/app/services/flight.service';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent implements OnInit {

  constructor(private flightService: FlightService) { }

  ngOnInit(): void {
  }

  addFlight(name: string, start: string, destination: string): void {
    const newFlight = new Flight(name, start, destination);
    if (!newFlight) { return; }
    this.flightService.addFlight( newFlight).subscribe();
  }

}
