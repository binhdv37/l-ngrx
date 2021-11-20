import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MyCounterComponent} from "./counter/my-counter.component";

const routes: Routes = [
  {
    path: 'counter',
    component: MyCounterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
