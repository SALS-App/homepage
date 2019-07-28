import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlobDownloaderService {

  constructor(
    private httpClient: HttpClient
  ) { }

  async getDLLink(provider: string): Promise<any> {
    let end = new Promise((resolve, reject) => {
      this.httpClient.get('https://sals-euwest-1.fra1.digitaloceanspaces.com/' + provider + '.yml', { responseType: 'text' })
      .subscribe(resLayer1 => {
        const regex = /path: ?([-0-9a-zA-Z .,]){1,420}/gm;
        let m: any;
  
        while ((m = regex.exec(resLayer1.toString())) !== null) {
            if (m.index === regex.lastIndex) {
                regex.lastIndex++;
            }

            resolve('https://sals-euwest-1.fra1.digitaloceanspaces.com/' + m[0].substring(6));
          }
      });
    })

    return await end;
  }
}
