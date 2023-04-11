import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cokpit',
  templateUrl: './cokpit.component.html',
  styleUrls: ['./cokpit.component.css']
})
export class CokpitComponent implements OnInit {
  serverElements = [];
  newServerName = '';
  newServerContent = '';
 @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
 @Output() blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  constructor() { }

  ngOnInit(): void {
  }
  onAddServer() {
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    })
  }
}
