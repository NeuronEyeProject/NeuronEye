import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  /** Based on the screen size, switch from standard to one column per row */

  contentA = "NeuronEye is a project started in spring 2021. NeuronEye is a new coming OSINT Tool. We are trying to make a new OSINT tool for security researches and also a new tool for the safety of others. Currently Functions: Domain Information and URL Expander. The web application also offers a user friendly interface for desktop user. The Webapp is in early access and will not be the greates from the design. If you want to contribute to the designs, feel free to do it."
  
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { content: this.contentA ,title: 'About This Project', cols: 2, rows: 1 },
        ];
      }

      return [
        { content: this.contentA ,title: 'About This Project', cols: 2, rows: 1 },
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver,
  ) {}
}
