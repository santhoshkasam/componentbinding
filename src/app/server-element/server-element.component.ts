import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  //Alias is given to this property so whereever we want to use we should access with srvElement.
  @Input('srvElement') element: {type: string, name: string, content: string};
  constructor() { }

  ngOnInit(): void {
  }

}
