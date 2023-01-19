import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FetchCatsComponent } from './fetch-cats/fetch-cats.component';
import { NewtestComponent } from './newtest/newtest.component';
import { SelfStudyComponent } from './self-study/self-study.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {
    path: 'cats',
    component: FetchCatsComponent
  },
  {
    path: 'newtest',
    component: NewtestComponent
  },
  {
    path:'two',
    component: TestComponent
  },
  {
    path: 'self/:mode',
    component: SelfStudyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
