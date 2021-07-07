import { Component } from '@angular/core';
@Component({
  // selector should be unique it could be any thing but unique
  selector: 'app-server',
  // html file path
  templateUrl: './server.component.html',
  styles: [
    `
      .online {
        color: white;
      }
    `,
  ],
})
export class ServerComponent {
  // ID: number = 45;
  // status: string = 'inactive';
  // getserverStatus() {
  //   return this.status;
  // }
  // notallow = false;

  // serveriscreated = false;
  // constructor() {
  //   setTimeout(() => {
  //     this.notallow = true;
  //   }, 2000);
  // }

  // event binding
  // serverCreationStaus = 'No server was created';

  // ----
  // onCreatedServer() {
  //   this.serveriscreated = true;
  //   this.serverCreationStaus = 'Server was created' + this.serverName;
  // }
  //----

  // serverName = 'vikky';
  // onUpdateServerName(event: Event) {
  //   this.serverName = (<HTMLInputElement>event.target).value;
  // }

  //-------
  // Two way data binding 🔥🔥🔥🔥

  // serverName = 'vikky';
  // onUpdateServerName(event: Event) {
  //   this.serverName = (<HTMLInputElement>event.target).value;
  // }

  //----*ngIf,ngStyles,ngClass,*ngFor

  // serveriscreated = true;
  serverName = 'aws';
  serverStatus = ' ';
  server = ' ';
  services = '';
  service = ['TestServer1'];
  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }
  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
  onUpdateServerName(event: Event) {
    this.server = (<HTMLInputElement>event.target).value;
  }
  onUpdateServiceName(event: Event) {
    this.services = (<HTMLInputElement>event.target).value;
  }
  onCreatedServer() {
    this.serverName = this.server;
    this.service.push(this.services);

    // console.log(this.service);
  }
}
