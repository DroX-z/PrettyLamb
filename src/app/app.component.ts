import { Component } from '@angular/core';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { trigger, transition, style, animate } from '@angular/animations';
import { Router, Event, NavigationEnd,RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavBarComponent,FooterComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
   animations: [
    trigger('fadeAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s ease-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('1s ease-in', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class AppComponent {

  constructor(private readonly router: Router,){
     this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }
  title = 'PrettyLamb';
}
