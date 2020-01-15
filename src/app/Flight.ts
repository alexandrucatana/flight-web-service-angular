import { v4 as uuid } from 'uuid';

export class Flight {
  id: string;
  airlineName: string;
  start: string;
  destination: string;

  constructor(name: string, start: string, destination: string) {
      // this.id = uuid();
      this.airlineName = name;
      this.start = start;
      this.destination = destination;
  }
}
