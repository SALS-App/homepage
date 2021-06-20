import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlobDownloaderService {

  constructor(
    private httpClient: HttpClient
  ) { }

  private async getContents(url: string, options: {}): Promise<any> {
    return await new Promise((resolve, reject) => {
      this.httpClient.get(url, options)
        .subscribe(res => resolve(res));
    });
  }

  async getDLLink(): Promise<string> {
    const providerInfo = await this.getContents(
      `https://update.sals-app.com/beta.yml`,
      { responseType: 'text' }
    );

    const regex = /path: ?([-0-9a-zA-Z .,]){1,420}/gm;
    let m: any;

    while ((m = regex.exec(providerInfo.toString())) !== null) {
      if (m.index === regex.lastIndex) {
        regex.lastIndex++;
      }

      return ('https://update.sals-app.com/' + m[0].substring(6));
    }

  }
}

