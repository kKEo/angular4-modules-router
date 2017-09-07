import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {AppRouterModule} from "./routing/routing";
import {ProjectsModule} from "./modules/projects/projects.module";
import {RepositoryModule} from "./modules/repository/repository.module";
import {MainContentComponent} from "./main-content.component";
import {MainMenuComponent} from "./main-menu.component";

@NgModule({
  declarations: [
    AppComponent,
    MainContentComponent,
    MainMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouterModule,
    ProjectsModule,
    RepositoryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
