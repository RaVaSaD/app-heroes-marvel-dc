import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: '**', pathMatch: 'full', redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {}

//  {useHash: true} Es para poner la almohadilla, importante para enviar parámetros en la url.
