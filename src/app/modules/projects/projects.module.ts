import {NgModule} from '@angular/core'
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ProjectsPageComponent} from "./projects-page.component";
import {ProjectDetailsComponent} from "./project-details.component";
import {ProjectsRoutingModule} from "./projects-routing.module";
import {ProjectsTemplateComponent} from "./projects-template.component";
import {TreeModule} from "angular-tree-component";

@NgModule({
  declarations: [
    ProjectsPageComponent,
    ProjectDetailsComponent,
    ProjectsTemplateComponent
  ],
  imports: [
    ProjectsRoutingModule,
    CommonModule,
    FormsModule,
    TreeModule
  ],
  providers: []
}) export class ProjectsModule {}
