import { Component } from '@angular/core';
declare var require: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  constructor() { }

  launcherImg = require('../../../../images/launcher.png');

}
