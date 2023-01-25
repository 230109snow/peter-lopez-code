import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayComponent } from './display/display.component';
import { AboutUsComponent } from './about-us/about-us.component'; 
const routes: Routes = [
  
  {path: "app-display",
   component: DisplayComponent,
   title: "Home"},
   {
    path: "app-about-us",
    component: AboutUsComponent,
    title: "About Us"},
    {
      path: "**",
      component: DisplayComponent,
      title: "Home"
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
