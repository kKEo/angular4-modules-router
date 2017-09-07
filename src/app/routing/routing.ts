import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AppComponent} from '../app.component';

const appRoutes = [
  {
    path: 'login',
    component: AppComponent
  },
  {
    path: '',
    redirectTo: '/projects',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRouterModule {
}
