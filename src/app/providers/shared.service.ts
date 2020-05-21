import { Injectable, Output, EventEmitter, Directive } from '@angular/core';

@Directive()
@Injectable()
export class SharedService {
  @Output() fire: EventEmitter<any> = new EventEmitter();
  @Output() dlProg: EventEmitter<any> = new EventEmitter();

   constructor() {}

   change(toggle: string) { this.fire.emit(toggle); }
   changeDownloadVal(val: any) { this.dlProg.emit(val); }

   getEmittedValue() { return this.fire; }

   getDownloadValue() { return this.dlProg; }

}