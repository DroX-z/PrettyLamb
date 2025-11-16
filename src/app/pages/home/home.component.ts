import { Component } from '@angular/core';
import { CarrouselComponent } from '../../components/carrousel/carrousel.component';
import { FavoritesComponent } from '../../components/favorites/favorites.component';
import { PromotionComponent } from '../../components/promotion/promotion.component';
import { LocationComponent } from '../../components/location/location.component';
import { MembersComponent } from '../../components/members/members.component';
import { AboutComponent } from '../../components/about/about.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarrouselComponent,FavoritesComponent,PromotionComponent,LocationComponent,MembersComponent,AboutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
}
