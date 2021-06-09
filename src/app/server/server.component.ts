import { Component } from '@angular/core';
@Component({
  // selector should be unique it could be any thing but unique
  selector: 'app-server',
  // html file path
  templateUrl: './server.component.html',
})
export class ServerComponent {
  ID: number = 45;
  status: string = 'inactive';
  getserverStatus() {
    return this.status;
  }
  notallow = false;
  constructor() {
    setTimeout(() => {
      this.notallow = true;
    }, 2000);
  }

  // event binding
  serverCreationStaus = 'No server was created';
  onCreatedServer() {
    this.serverCreationStaus = 'Server was created' + this.serverName;
  }

  serverName = 'vikky';
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
