import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharePointService {
  private siteUrl = 'https://cognizantonline.sharepoint.com/sites/DirectEnergy-RepoCognizant';
  private apiUrl = `${this.siteUrl}/_api`;

  constructor(private http: HttpClient) {}

  getFolderContents(folderPath: string): Observable<any> {
    const endpoint = `${this.apiUrl}/web/GetFolderByServerRelativeUrl('/Shared Documents/General${folderPath}')/Files`;
    
    const headers = new HttpHeaders({
      'Accept': 'application/json;odata=verbose',
      'Content-Type': 'application/json;odata=verbose',
    });

    return this.http.get(endpoint, { headers });
  }

  downloadFile(fileUrl: string): Observable<Blob> {
    return this.http.get(fileUrl, {
      responseType: 'blob',
      headers: new HttpHeaders({
        'Accept': 'application/json;odata=verbose'
      })
    });
  }
}