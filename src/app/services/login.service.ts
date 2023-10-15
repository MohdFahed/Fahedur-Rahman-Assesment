import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  loginDetails = {
    email: 'admin@gmail.com',
    password: 'admin',
  };

  data = new BehaviorSubject([{ info: 'country' }]);
  address = new BehaviorSubject([
    {
      id: '1',
      country: 'India',
      state: 'Maharashtra',
      city: 'Pune',
      area: 'Magarpatta',
      subarea: 'sector 1',
      address: 'shivaji Nagar pune',
    },
    {
      id: '2',
      country: 'India',
      state: 'Maharashtra',
      city: 'Pune',
      area: 'Magarpatta',
      subarea: 'sector 2',
      address: 'shivaji Nagar pune',
    },
    {
      id: '3',
      country: 'India',
      state: 'Maharashtra',
      city: 'Pune',
      area: 'Magarpatta',
      subarea: 'sector 3',
      address: 'shivaji Nagar pune',
    },
    {
      id: '4',
      country: 'India',
      state: 'Maharashtra',
      city: 'Pune',
      area: 'Magarpatta',
      subarea: 'sector 4',
      address: 'shivaji Nagar pune',
    },
    {
      id: '5',
      country: 'India',
      state: 'Maharashtra',
      city: 'Pune',
      area: 'Magarpatta',
      subarea: 'sector 5',
      address: 'shivaji Nagar pune',
    },
  ]);

  constructor() {}
}
