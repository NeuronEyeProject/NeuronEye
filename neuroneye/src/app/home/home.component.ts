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

  contentA = "NeuronEye is a project started in spring 2021. NeuronEye is a Web Application where you can check if the domain respectively the website is contained of cyberthreats. We are trying to make a new OSINT tool for security researches. We have a database that will updated with time. The web application also offers a user friendly interface for desktop user. The Webapp is in early access and will not be the greates from the design. If you want to contribute to the designs, feel free to do it. BY ENTERING THIS WEBSITE YOU AGREE TO THE PRIVACY POLICY" // ATheProject
  contentB = `https://discord.gg/FGzCdtP`
  contentC = `info@neuroneye.net`

  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { content: this.contentA ,title: 'About This Project', cols: 2, rows: 1 },
          { content: this.contentB ,title: 'Discord', cols: 1, rows: 1 },
          { content: this.contentC ,title: 'Email', cols: 1, rows: 1 }



 
        ];
      }

      return [
        { content: this.contentA ,title: 'About This Project', cols: 2, rows: 1 },
          { content: this.contentB ,title: 'Discord', cols: 1, rows: 1 },
          { content: this.contentC ,title: 'Email', cols: 1, rows: 1 }
    
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver,
  ) {}
}
