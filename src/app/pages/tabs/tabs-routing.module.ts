import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'anime',
        loadChildren: () => import('../anime/anime.module').then(m => m.AnimePageModule)
      },
      {
        path: 'dau',
        loadChildren: () => import('../dau/dau.module').then(m => m.DauPageModule)
      },
      {
        path: 'horror',
        loadChildren: () => import('../horror/horror.module').then(m => m.HorrorPageModule)
      },
      {
        path: 'manga',
        loadChildren: () => import('../manga/manga.module').then(m => m.MangaPageModule)
      },
      {
        path: 'mgtow',
        loadChildren: () => import('../mgtow/mgtow.module').then(m => m.MgtowPageModule)
      },
      {
        path: 'videogames',
        loadChildren: () => import('../videogames/videogames.module').then(m => m.VideogamesPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
