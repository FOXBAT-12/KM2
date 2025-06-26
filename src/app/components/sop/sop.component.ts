import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {ScrollingModule} from '@angular/cdk/scrolling';
interface SopFile {
  id: number;
  fileName: string;
  fileType: string;
  content: string;
  sopFolderId: number;
}

interface SopFolder {
  id: number;
  name: string;
}

@Component({
  selector: 'app-sop',
  standalone: true,
  templateUrl: './sop.component.html',
  styleUrls: ['./sop.component.css'],
  imports: [CommonModule, HttpClientModule, ScrollingModule]
})
export class SopComponent implements OnInit {
  folderList: SopFolder[] = [
    { id: 1, name: 'DEB SFDC Operations Support' },
    { id: 2, name: 'Direct Energy Neon QE&A' },
    { id: 3, name: 'Direct -NAB EDW Support - Addn' },
    { id: 4, name: 'DE Admiral Steady State' },
    { id: 5, name: 'DE BizTalk Admin Support' },
    { id: 6, name: 'DE Lithium NPO Services' },
    { id: 7, name: 'Direct -NA Home Digital Dev-SE' },
    { id: 8, name: 'Direct -NAB Retail Sales Apps-' }
  ];

  selectedFolder: SopFolder | null = null;
  loading = false;
  error = '';
  pdfList: SopFile[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    window.location.href = 'https://cognizantonline.sharepoint.com/:f:/r/sites/DirectEnergy-RepoCognizant/Shared%20Documents/General/01%20SOP?csf=1&web=1&e=LmHgdL';
  }

  selectFolder(folder: SopFolder) {
    this.selectedFolder = folder;
    this.loading = true;
    this.error = '';
    this.pdfList = [];

    this.http.get<any>(`https://localhost:7244/api/SOPFile/folder/${folder.id}`)
      .subscribe({
        next: (response) => {
          console.log('Raw API Response:', response);
          
          if (response && response.$values) {
            this.pdfList = response.$values;
          } else if (Array.isArray(response)) {
            this.pdfList = response;
          } else if (response) {
            this.pdfList = [response];
          }
          
          console.log('Processed PDF List:', this.pdfList);
          this.loading = false;
        },
        error: (err) => {
          console.error('Error:', err);
          this.error = 'Failed to load files';
          this.loading = false;
        }
      });
  }

  downloadPdf(file: SopFile) {
    const byteCharacters = atob(file.content);
    const byteNumbers = new Array(byteCharacters.length);
    
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: 'application/pdf' });
    
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = file.fileName;
    link.click();
    window.URL.revokeObjectURL(link.href);
  }

  getFileIcon(fileType: string): string {
    switch(fileType.toLowerCase()) {
      case 'pdf':
        return 'far fa-file-pdf';
      case 'doc':
      case 'docx':
        return 'far fa-file-word';
      case 'xls':
      case 'xlsx':
        return 'far fa-file-excel';
      case 'ppt':
      case 'pptx':
        return 'far fa-file-powerpoint';
      case 'txt':
        return 'far fa-file-alt';
      case 'zip':
      case 'rar':
        return 'far fa-file-archive';
      default:
        return 'far fa-file';
    }
  } 
  displaycount = 7; 
  get visibleFolder(){
    return this.pdfList.slice(0, this.displaycount);
  } 
  onScroll(event: Event) {
    const target = event.target as HTMLElement;
    if (
      target &&
      target.scrollTop + target.clientHeight >= target.scrollHeight - 10
    ) {
      this.onScrollHandler(); // Call your actual scroll handler logic here
    }
  }

  onScrollHandler() {
    if(this.displaycount < this.pdfList.length){ 
      this.displaycount += 7;
    }
  }
}
