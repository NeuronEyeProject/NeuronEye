import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-goodsite',
  templateUrl: './goodsite.component.html',
  styleUrls: ['./goodsite.component.css']
})
export class GoodsiteComponent  {

 
  contentA = "We searched NeuronEye's database and found nothing. The domain has not been recognized as dangerous." // ATheProject

  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { content: this.contentA ,title: 'This Domain isnt registered as danger', cols: 2, rows: 2 },

 
        ];
      }

      return [
        { content: this.contentA ,title: 'This Domain isnt registered as danger', cols: 2, rows: 2 },


      ];
    })
  );

 

  constructor(private breakpointObserver: BreakpointObserver) {}
  
}
