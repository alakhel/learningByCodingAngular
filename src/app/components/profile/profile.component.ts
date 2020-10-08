import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  public key;
  ngOnInit(): void {
    this.key = this.route.snapshot.params.key
  }
  data = {
    heading: "Profile",
    description: "it's Artificiel intelegence",
    related: [
      "DP",
      "ML"
    ]
  }


}
