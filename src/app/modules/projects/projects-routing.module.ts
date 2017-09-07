import {ProjectDetailsComponent} from "./project-details.component";
import {ProjectsPageComponent} from "./projects-page.component";
import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

const projectsRoutes: Routes = [
  {path: 'projects/:id', component: ProjectDetailsComponent},
  {path: 'projects', component: ProjectsPageComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(projectsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProjectsRoutingModule {

}
