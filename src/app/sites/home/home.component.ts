import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SelectModalDialog } from './select-modal/select-modal';
import { SharedService } from 'src/app/providers/shared.service';
import { HttpClient, HttpEventType, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BlobDownloaderService } from 'src/app/providers/blob-downloader.service';
import { FileSaverService } from 'ngx-filesaver';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {


  isDownloading: boolean = false;

  private ProvierDialog: any;

  dlPercent: string;

  constructor(
    private dialog: MatDialog,
    private ss: SharedService,
    private httpClient: HttpClient,
    private bloDown: BlobDownloaderService,
    private fSaver: FileSaverService
    ) {
    ss.getEmittedValue().subscribe((res: any) => {
      this.downloadFile(res);
    })
  }

  openDialog(): void {
    this.ProvierDialog =  this.dialog.open(SelectModalDialog, {
      width: '50%'
    });

  }


  async downloadFile(res: string) {
    console.log(res);
    const req = new HttpRequest('GET', await this.bloDown.getDLLink(res), {
      reportProgress: true,
      responseType: 'blob',
      headers: new HttpHeaders({ 'Content-Type': 'application/octet-stream' }) 
    });
    
    this.httpClient.request(req).subscribe(event => {
      if (event.type === HttpEventType.DownloadProgress) {
        this.ProvierDialog.close();
        this.isDownloading = true;

        
        this.dlPercent = Math.round(100 * event.loaded / event.total).toString();
        this.ss.changeDownloadVal({
          'loaded': event.loaded,
          'total': event.total
        });
      } else if (event instanceof HttpResponse) {
        this.fSaver.save((<any>event.body), `${res} Installer.exe`);
        this.isDownloading = false;
      }
    });
  }

}
