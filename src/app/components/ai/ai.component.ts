import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ai',
  templateUrl: './ai.component.html',
  styleUrls: ['./ai.component.css']
})
export class AiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }
  data = {
    heading: "AI",
    description: "it's Artificiel intelegence",
    related: [
      "DP",
      "ML"
    ]
  }
}
