import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayComponent } from './display/display.component';
import { AboutusComponent } from './aboutus/aboutus.component';
const routes: Routes = [
  {
    path: "**",
    component: DisplayComponent,
    title: "Home"
  },
  {path: "app-display",
   component: DisplayComponent,
   title: "Home"},
   {
    path: "app-aboutus",
    component: AboutusComponent,
    title: "About Us"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
