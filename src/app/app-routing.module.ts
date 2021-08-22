import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlightsComponent } from './components/flights/flights.component';
import { FlightDetailComponent} from './components/flight-detail/flight-detail.component';
import { AddFlightComponent } from './components/add-flight/add-flight.component';


const routes: Routes = [
  { path: 'flights', component: FlightsComponent },
  { path: 'addFlight', component: AddFlightComponent },
  { path: 'v1/flights/:airlineId', component: FlightDetailComponent }
  // { path: '', redirectTo: 'flights', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
