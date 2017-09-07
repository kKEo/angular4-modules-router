import {RepositoryDetailsComponent} from "./repository-details.component";
import {RepositoryPageComponent} from "./repository-page.component";
import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

const projectsRoutes: Routes = [
  {path: 'repository/:id', component: RepositoryDetailsComponent},
  {path: 'repository', component: RepositoryPageComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(projectsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RepositoryRoutingModule {

}
