import {Injectable, Output, EventEmitter} from '@angular/core';

@Injectable()
export class SharedService {
  @Output() fire: EventEmitter<any> = new EventEmitter();

   constructor() {}

   change(toggle: string) { this.fire.emit(toggle); }

   getEmittedValue() { return this.fire; }

}