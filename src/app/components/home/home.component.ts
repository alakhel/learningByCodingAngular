import { Component, OnInit } from "@angular/core";
import { RequestService } from "../../services/request.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  val = "";
  constructor(private request: RequestService) {} //ici il a initialiser request de type RequestService

  ngOnInit(): void {}

  public async makeRequest() {
    console.log("click");
    const a = await this.request.makeRequest("https://swapi.co/api/planets/9");
    this.val = a.name;
  }
}
