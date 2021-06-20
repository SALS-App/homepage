import { Component, OnInit } from '@angular/core';
import { BlobDownloaderService } from 'src/app/providers/blob-downloader.service';
import { HttpRequest, HttpHeaders, HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';
import { FileSaverService } from 'ngx-filesaver';
import { MatDialogRef } from '@angular/material/dialog';

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
    private dialogRef: MatDialogRef<DownloadComponent>
  ) { }

  async ngOnInit() {
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
