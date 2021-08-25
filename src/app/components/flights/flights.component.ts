import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Flight } from '../../models/Flight';
import { FlightService} from '../../services/flight.service';


@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {
  displayedColumns: string[] = ['airlineName', 'start', 'destination'];
  dataSource: MatTableDataSource<Flight>;

  constructor(private flightService: FlightService) { 
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit() {
    this.getFlights();
  }

  getFlights(): void {
    this.flightService.getAllFlights().subscribe(flights => {
      console.log("Flights: ", flights);
      this.dataSource.data = flights as Flight[];
    });
  }
}
