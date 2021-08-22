

import { TestBed } from '@angular/core/testing';

import { FlightService } from './flight.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import {Flight} from '../models/Flight';
import {environment} from '../../environments/environment';
import createSpyObj = jasmine.createSpyObj;

const mockFlights = [
  { id: '1', airlineName: 'GroovyAirline', start: 'Yaounde', destination: 'Libreville' },
  { id: '2', airlineName: 'RubyAirline', start: 'Brazzaville', destination: 'Kinshasa' },
  { id: '3', airlineName: 'RailAirline', start: 'Ouagadougou', destination: 'Accra' }
] as Flight[];
const mockFlight = mockFlights[0];

describe('FlightService', () => {
  let service: FlightService;
  let httpTestingController: HttpTestingController;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [FlightService,  {provide: Flight, useValue: mockFlights }]
    });
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(FlightService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getAllFlights', () => {
    it('should return all mock flights', () => {
      service.getAllFlights().subscribe(
        flights => expect(flights.length).toEqual(mockFlights.length),
        fail
      );

      const req = httpTestingController.expectOne(environment.flightEndpoint);
      expect(req.request.method).toEqual('GET');
      req.flush(mockFlights);
    });
  });

  describe('getFlight', () => {
    it('should return a single mock flight', () => {
      service.getFlight(mockFlight.id).subscribe(
        response => expect(response).toEqual(mockFlight),
        fail
      );

      const req = httpTestingController.expectOne(`${environment.flightEndpoint}/${mockFlight.id}`);
      expect(req.request.method).toEqual('GET');
      req.flush(mockFlight);
    });
  });

  describe('addFlight', () => {
    it('should add a single Flight', () => {
      service.addFlight(mockFlight).subscribe(
        response => expect(response).toEqual(mockFlight),
        fail
      );
      // Receive GET request
      const req = httpTestingController.expectOne(`${environment.flightEndpoint}`);
      expect(req.request.method).toEqual('POST');
      req.flush(mockFlight);
    });
  });
});


