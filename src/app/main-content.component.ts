import {Component} from "@angular/core";

@Component({
  selector: 'app-main-content',
  template: `
<div id="main_container">
    <div id="main_content">
        <router-outlet></router-outlet>
    </div>
</div>
`
})

export class MainContentComponent {
}
