import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portafolio-kendall';

  public slides = [
    { src: "https://image1.com" },
    { src: "https://image2.com" },
    { src: "https://image3.com" },
    { src: "https://image4.com" }
  ];



  // downloadFile() {
  //   const link = document.createElement('a');
  //   link.setAttribute('target', '_blank');
  //   link.setAttribute('href', 'assets/CV_Kendall.pdf');
  //   link.setAttribute('download', `CV_Kendall.pdf`);
  //   document.body.appendChild(link);
  //   link.click();
  //   link.remove();
  // }

  downloadFile() {
    const link = document.createElement('a');
    link.href = './assets/CV_Kendall.pdf'; 
    link.download = 'CV_Kendall.pdf'; 
    link.click();
  }
}
