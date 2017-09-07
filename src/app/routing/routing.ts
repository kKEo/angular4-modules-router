import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {LoginComponent} from "../components/login.component";
import {PageNotFoundComponent} from '../components/404err.component';
import {PendingChangesGuard} from "./pending-changes-guard";

const appRoutes = [
  {
    path: 'login',
    component: LoginComponent,
    outlet: 'popup'
  },
  {
    path: '',
    redirectTo: '/projects',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {enableTracing: false})],
  providers: [PendingChangesGuard],
  exports: [RouterModule]
})
export class AppRouterModule {
}
