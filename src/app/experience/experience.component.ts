import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pfl-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  public experiences = [1, 2];
  
  constructor() { }

  ngOnInit() {
  }

}
