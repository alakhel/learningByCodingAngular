import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

/**@declaration_and_exportation*/
export class AppComponent implements OnInit {
  title = 'Angular v0.1.0';
  constructor() {
    console.log('new...')
  }
  log(): void {
    console.log(`${this.title}`)
  }
  ngOnInit() {
    this.log();
  }
}
