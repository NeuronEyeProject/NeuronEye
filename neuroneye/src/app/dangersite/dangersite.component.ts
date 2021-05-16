import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dangersite',
  templateUrl: './dangersite.component.html',
  styleUrls: ['./dangersite.component.css']
})
export class DangersiteComponent {

  contentA = "We searched NeuronEye's database and found this domain in the database. The domain is recognized as dangerous." // ATheProject
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { content: this.contentA ,title: 'This Domain is registered as danger', cols: 2, rows: 2 },

 
        ];
      }

      return [
        { content: this.contentA ,title: 'This Domain is registered as danger', cols: 2, rows: 2 },


      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}

 
}
