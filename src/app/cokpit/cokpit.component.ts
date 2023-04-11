import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

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
 @ViewChild('serverConentInput') serverContentInput: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      //serverName: this.newServerName,
      serverName: nameInput.value,
      //serverContent: this.newServerContent
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
       //serverName: this.newServerName,
       serverName: nameInput.value,
       //serverContent: this.newServerContent
       serverContent: this.serverContentInput.nativeElement.value
    })
  }
}
