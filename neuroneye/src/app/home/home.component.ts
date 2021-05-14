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

  contentA = "NeuronEye is a project started in spring 2021. NeuronEye is a Web Application where you can check if the URL Website is contained of Cyberthreats. We are trying to make a new OSINT Tool for Security Researches. We have a flex Database that will updated with time. The web application also offers a user-friendly interface for each user." // ATheProject
  contentB = "Hey I'm Dev" // ATheDev
  contentC = "We are collecting threated URL/Domains from diffrent Sources and putting them in one." // Source

  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { content: this.contentA ,title: 'About This Project', cols: 2, rows: 1 },
          { content: this.contentB ,title: 'About The Developer', cols: 2, rows: 1 },
          { content: this.contentC ,title: 'Source Collection', cols: 2, rows: 1 },

 
        ];
      }

      return [
        { content: this.contentA ,title: 'About This Project', cols: 2, rows: 1 },
        { content: this.contentB ,title: 'About The Developer', cols: 2, rows: 1 },
        { content: this.contentC ,title: 'Source Collection', cols: 2, rows: 1 },

      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
