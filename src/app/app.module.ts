import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
// import { ServersComponent } from './servers/servers.component';
import { warningAlertComponent } from './warring-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { ServersComponent } from './servers/servers.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    // ServersComponent,
    warningAlertComponent,
    SuccessAlertComponent,
    ServersComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  // bootstrap is responsible for at the time app run which component will going to execute
  bootstrap: [AppComponent],
})
export class AppModule {}
