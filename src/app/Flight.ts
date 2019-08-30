import { v4 as uuid } from 'uuid';

export class Flight {
  airlineId: string;
  airlineName: string;
  start: string;
  destination: string;

  constructor(name: string, start: string, destination: string) {
      this.airlineId = uuid();
      this.airlineName = name;
      this.start = start;
      this.destination = destination;
  }
}
