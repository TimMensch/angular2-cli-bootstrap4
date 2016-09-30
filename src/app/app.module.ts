import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AlertModule, DatepickerModule } from 'ng2-bootstrap/ng2-bootstrap';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        AlertModule,
        DatepickerModule,
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
