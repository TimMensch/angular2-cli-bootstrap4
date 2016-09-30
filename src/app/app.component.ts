import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass']
})
export class AppComponent {
    title = 'app works!';
    date: Date = new Date();
    today() {
        this.date = new Date();
    }
}
