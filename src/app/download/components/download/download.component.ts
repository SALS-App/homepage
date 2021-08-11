import { HttpClient, HttpEventType, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AckeeService } from 'ngx-ackee-wrapper';
import { FileSaverService } from 'ngx-filesaver';
import { BlobDownloaderService } from '../../services/blob-downloader.service';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent implements OnInit {

  dlPercent: string = 'Starting...';

  constructor(
    private blobDownloader: BlobDownloaderService,
    private httpClient: HttpClient,
    private fSaver: FileSaverService,
    private dialogRef: MatDialogRef<DownloadComponent>,
    private ackeeServ: AckeeService
  ) { }

  async ngOnInit() {
    this.ackeeServ.event("658262e3-13d5-4bb2-bead-7dad93cf9c4f", { key: "Download", value: 1 });

    const req = new HttpRequest('GET', await this.blobDownloader.getDLLink(), {
      reportProgress: true,
      responseType: 'blob',
      headers: new HttpHeaders({ 'Content-Type': 'application/octet-stream' })
    });

    this.httpClient.request(req).subscribe(async event => {
      if (event.type === HttpEventType.DownloadProgress) {
        this.dlPercent = `${Math.round(100 * event.loaded / event.total)}%`;
      } else if (event instanceof HttpResponse) {
        this.fSaver.save((<any>event.body), `SALS Installer.exe`);
        setTimeout(() => {
          this.dialogRef.close();
        }, 500);
      }
    });


  }

}
