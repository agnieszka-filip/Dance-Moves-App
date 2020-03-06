import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    title = 'angular-clickoutside';
 
    showBox = true;
    
    constructor() {}
    
    onClickedOutside(e: Event) {
        this.showBox = false;
  }
}