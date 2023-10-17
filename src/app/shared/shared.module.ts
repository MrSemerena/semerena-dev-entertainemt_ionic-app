import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomeHeaderSliderComponent } from './components/home/home-header-slider/home-header-slider.component';
import { HomeBannersComponent } from './components/home/home-banners/home-banners.component';
import { HomeCardsComponent } from './components/home/home-cards/home-cards.component';
import { AnimeHeaderSliderComponent } from './components/anime/anime-header-slider/anime-header-slider.component';
import { AnimeBannersComponent } from './components/anime/anime-banners/anime-banners.component';
import { AnimeCardsComponent } from './components/anime/anime-cards/anime-cards.component';
import { DauHeaderSliderComponent } from './components/dau/dau-header-slider/dau-header-slider.component';
import { DauBannersComponent } from './components/dau/dau-banners/dau-banners.component';
import { DauCardsComponent } from './components/dau/dau-cards/dau-cards.component';
import { HorrorHeaderSliderComponent } from './components/horror/horror-header-slider/horror-header-slider.component';
import { HorrorBannersComponent } from './components/horror/horror-banners/horror-banners.component';
import { HorrorCardsComponent } from './components/horror/horror-cards/horror-cards.component';
import { MangaHeaderSliderComponent } from './components/manga/manga-header-slider/manga-header-slider.component';
import { MangaBannersComponent } from './components/manga/manga-banners/manga-banners.component';
import { MangaCardsComponent } from './components/manga/manga-cards/manga-cards.component';
import { MgtowHeaderSliderComponent } from './components/mgtow/mgtow-header-slider/mgtow-header-slider.component';
import { MgtowBannersComponent } from './components/mgtow/mgtow-banners/mgtow-banners.component';
import { MgtowCardsComponent } from './components/mgtow/mgtow-cards/mgtow-cards.component';
import { VideogamesHeaderSliderComponent } from './components/videogames/videogames-header-slider/videogames-header-slider.component';
import { VideogamesBannersComponent } from './components/videogames/videogames-banners/videogames-banners.component';
import { VideogamesCardsComponent } from './components/videogames/videogames-cards/videogames-cards.component';
import { SemerenaDevEntService } from '../services/api/semerena-dev-ent.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  exports: [
    HomeHeaderSliderComponent,
    HomeBannersComponent,
    HomeCardsComponent,
    AnimeHeaderSliderComponent,
    AnimeBannersComponent,
    AnimeCardsComponent,
    DauHeaderSliderComponent,
    DauBannersComponent,
    DauCardsComponent,
    HorrorHeaderSliderComponent,
    HorrorBannersComponent,
    HorrorCardsComponent,
    MangaHeaderSliderComponent,
    MangaBannersComponent,
    MangaCardsComponent,
    MgtowHeaderSliderComponent,
    MgtowBannersComponent,
    MgtowCardsComponent,
    VideogamesHeaderSliderComponent,
    VideogamesBannersComponent,
    VideogamesCardsComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    HomeHeaderSliderComponent,
    HomeBannersComponent,
    HomeCardsComponent,
    AnimeHeaderSliderComponent,
    AnimeBannersComponent,
    AnimeCardsComponent,
    DauHeaderSliderComponent,
    DauBannersComponent,
    DauCardsComponent,
    HorrorHeaderSliderComponent,
    HorrorBannersComponent,
    HorrorCardsComponent,
    MangaHeaderSliderComponent,
    MangaBannersComponent,
    MangaCardsComponent,
    MgtowHeaderSliderComponent,
    MgtowBannersComponent,
    MgtowCardsComponent,
    VideogamesHeaderSliderComponent,
    VideogamesBannersComponent,
    VideogamesCardsComponent
  ],
  providers: [
    SemerenaDevEntService
  ]
})
export class SharedModule { }
