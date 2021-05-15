import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-goodsite',
  templateUrl: './goodsite.component.html',
  styleUrls: ['./goodsite.component.css']
})
export class GoodsiteComponent  {

 
  contentA = "." // ATheProject
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { content: this.contentA ,title: 'Contact Us', cols: 2, rows: 2 },

 
        ];
      }

      return [
        { content: this.contentA ,title: 'Contact Us', cols: 2, rows: 2 },


      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
  
}
