import { Component, OnInit } from '@angular/core';
import { JumbotronComponent } from "../jumbotron/jumbotron.component";
import { FeaturesComponent } from "../features/features.component";
import { HeroComponent } from "../hero/hero.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [JumbotronComponent, FeaturesComponent, HeroComponent]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
