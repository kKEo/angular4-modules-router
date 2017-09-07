import {NgModule} from '@angular/core'
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {RepositoryPageComponent} from "./repository-page.component";
import {RepositoryDetailsComponent} from "./repository-details.component";
import {RepositoryRoutingModule} from "./repository-routing.module";

@NgModule({
  declarations: [
    RepositoryPageComponent,
    RepositoryDetailsComponent
  ],
  imports: [
    RepositoryRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: []
}) export class RepositoryModule {}
