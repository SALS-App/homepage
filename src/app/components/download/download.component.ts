import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/providers/shared.service';
import { BlobDownloaderService } from 'src/app/providers/blob-downloader.service';
import { HttpRequest, HttpHeaders, HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';
import { FileSaverService } from 'ngx-filesaver';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent implements OnInit {


  dlPercent: string = 'Starting...';

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private ss: SharedService,
    private blobDownloader: BlobDownloaderService,
    private httpClient: HttpClient,
    private fSaver: FileSaverService
  ) { }

  async ngOnInit() {
    this.activeRoute.params.subscribe(async res => {
      if (typeof(res.id) === 'undefined') {
        this.router.navigate(['/']);
      }

      const req = new HttpRequest('GET', await this.blobDownloader.getDLLink(res.id), {
        reportProgress: true,
        responseType: 'blob',
        headers: new HttpHeaders({ 'Content-Type': 'application/octet-stream' }) 
      });
      
      this.httpClient.request(req).subscribe(async event => {
        if (event.type === HttpEventType.DownloadProgress) {
          this.dlPercent = `${Math.round(100 * event.loaded / event.total)}%`;
          this.ss.changeDownloadVal({
            'loaded': event.loaded,
            'total': event.total
          });
        } else if (event instanceof HttpResponse) {
          this.fSaver.save((<any>event.body), `${res.id} Installer.exe`);
          this.router.navigate(['/']);
        }
      });





    });
  }

}
