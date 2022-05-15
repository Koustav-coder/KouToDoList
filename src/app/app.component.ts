import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Software Developer';
  constructor(){
    //To change title.
    // setTimeout(() => {
    //   this.title = 'Data Engineer';
    // }, 2000);
  
  }
 
}
