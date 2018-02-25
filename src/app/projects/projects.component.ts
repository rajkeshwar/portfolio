import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'pfl-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [
    trigger('slideUp', [
      state('true', style({ transform: 'translateY(-400px)' })),
      state('false', style({ transform: 'translateY(0px)' })),
      transition('* => *', animate(300))
    ])
  ]
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
