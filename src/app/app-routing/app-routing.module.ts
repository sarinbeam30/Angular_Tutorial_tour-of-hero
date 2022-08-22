import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from '../heroes/heroes.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { AugularLifeCycleComponent } from '../augular-life-cycle/augular-life-cycle.component';

const routes: Routes = [
  { path: '', redirectTo: '/angularLifeCycle', pathMatch: 'full' },
  { path: 'angularLifeCycle', component: AugularLifeCycleComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent }
];


// @NgModule metadata initalizes the router and starts it listening for browser location changes
// forRoot() method supplies the service providers and directives needed for routing, and performs 
// the initial navigation based on the current browser URL.
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]   // exports `RouterModule` to be available throughout the application,
})

export class AppRoutingModule { }
