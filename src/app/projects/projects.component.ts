import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pfl-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  public projects = [];

  constructor() { 
    for(let i = 0; i < 3; i++ ) {
      this.projects.push({
        item: i,
        isReveled: false
      });
    }
  }

  ngOnInit() {
    
  }

  public setRevel( item ) {
    console.log('item : ', item);
    item.isReveled = true;
    console.log('AllItems : ', this.projects, item);
  }

}
