import { Component, OnInit } from '@angular/core';

@Component({
  // element selector
  // selector: 'app-servers',
  // attribute selector
  // selector:"[app-servers]",
  // class selector
  selector: '.app-servers',
  templateUrl: './servers.component.html',
  // using inline tamplate
  // template: `<app-server></app-server> `,
  styleUrls: ['./servers.component.css'],
  styles: [
    `
      p {
        color: dodgerblue;
      }
    `,
  ],
})
export class ServersComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
