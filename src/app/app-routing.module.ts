import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BioComponent } from './bio/bio.component';
import { ExperienceComponent } from './experience/experience.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
{path:"", redirectTo:'/home', pathMatch:"full"},
{path:"home",component:HomeComponent},
{path:"bio",component:BioComponent},
{path:"experience",component:ExperienceComponent},
{path:"portfolio",component:PortfolioComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled', // Restores scroll position when navigating
      anchorScrolling: 'enabled',          // Enables fragment (anchor) scrolling
    }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
