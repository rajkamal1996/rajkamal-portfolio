import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingScreenComponent } from './landing-screen/landing-screen.component';


const routes: Routes = [
    { path: '', redirectTo: '/portfolio', pathMatch: 'full' },
    { path: '**', redirectTo: '/portfolio', pathMatch: 'full' },
    { path: 'portfolio', component: LandingScreenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
