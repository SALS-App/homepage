import { Injectable } from '@angular/core';
import Plausible from 'plausible-tracker';
import { IPlausible } from '../interface/IPlausible';

@Injectable({
  providedIn: 'root'
})
export class TelemetryService {

  client: IPlausible;

  constructor() {
    this.client = Plausible({
      domain: 'beta.sals-app.com'
    });
  }
}
