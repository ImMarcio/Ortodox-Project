import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CsvService {
  constructor() {}

  downloadCSV(data: any[], filename: string) {
    const csvContent = this.convertToCSV(data);
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });

    const link = document.createElement('a');
    link.setAttribute('href', window.URL.createObjectURL(blob));
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  convertToCSV(data: any[]): string {
    const header = Object.keys(data[0]).join(',');
    const rows = data.map(obj => Object.values(obj).join(',')).join('\n');
    return `${header}\n${rows}`;
  }
}



