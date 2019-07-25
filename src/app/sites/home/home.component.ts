import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SelectModalDialog } from './select-modal/select-modal';
import { SharedService } from 'src/app/providers/shared.service';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  isDownloading: boolean = false;

  private versionHandler: Subscription
  private isVersionHandler = false;

  private downloadFileHandler: Subscription;
  private isDownloadFileHandler = false;


  constructor(
    private dialog: MatDialog,
    private ss: SharedService,
    private httpClient: HttpClient
    ) {
    ss.getEmittedValue().subscribe((res: any) => {
      httpClient.get('https://sals-euwest-1.fra1.digitaloceanspaces.com/' + res + '.yml', { responseType: 'text' })
      .subscribe(resLayer1 => {
        const regex = /path: ?([-0-9a-zA-Z .,]){1,420}/gm;
        let m: any;

        while ((m = regex.exec(resLayer1.toString())) !== null) {
            if (m.index === regex.lastIndex) {
                regex.lastIndex++;
            }

            window.location.href = 'https://sals-euwest-1.fra1.digitaloceanspaces.com/' + m[0].substring(6);
        }
      })
    })
  }

  ngOnInit() { }


  openDialog(): void {
    this.dialog.open(SelectModalDialog, {
      width: '75%'
    });
  }

}
