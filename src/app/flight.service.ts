import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {environment} from '../environments/environment';
import {Flight} from './Flight';
import {log} from 'util';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  private baseUrl = environment.getFlightEndpoint;
  private createFlightUrl = environment.createFlightEndPoint;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getAllFlights(): Observable<Flight[]> {
    console.log('Get stuff from ' + this.baseUrl );
    const debugList =  this.http.get<Flight[]>(this.baseUrl);

    debugList.subscribe(lists => {
      lists.forEach(fli => {
        console.log(fli.id + ' , ' + fli.airlineName);
      })
    })


    return this.http.get<Flight[]>(this.baseUrl);
  }

  getFlight(airlineId: string): Observable<Flight> {
    const url = `${ this.baseUrl}/${airlineId}`;
    return this.http.get<Flight>(url).pipe(
      catchError(this.handleError<Flight>(`getFlight airlineId=${airlineId}`))
    );
  }

  addFlight(flight: Flight): Observable<Flight> {
    return this.http.post<Flight>(this.createFlightUrl, flight, this.httpOptions).pipe(
      catchError(this.handleError<Flight>('addFlight'))
    );
  }
}
