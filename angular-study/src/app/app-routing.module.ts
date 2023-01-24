import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  {
    path: "**",
    component: HomeComponent,
    title: "Home"
  },
  {path: "app-home",
   component: HomeComponent,
   title: "Home"},
   {
    path: "app-about-us",
    component: AboutUsComponent,
    title: "About Us"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
