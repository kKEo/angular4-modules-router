import {Component} from "@angular/core";

@Component({
  selector: 'app-main-menu',
  template: `
<div id="main_menu">
  <nav>
    <a routerLink="/projects" routerLinkActive="active">Projects</a>
    <a routerLink="/projects/1" routerLinkActive="active">Project1</a>

    <a routerLink="/repository" routerLinkActive="active">Repository</a>
    <a routerLink="/repository/1" routerLinkActive="active">Repository1</a>
  </nav>
</div>
`
})

export class MainMenuComponent {
}
