import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges,
  DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  //Alias is given to this property so whereever we want to use we should access with srvElement.
  @Input('srvElement') element: { type: string, name: string, content: string };
  @ViewChild('heading',{static:true}) header: ElementRef
  @ContentChild('conentParagraph',{static:true}) paragraph: ElementRef
  constructor() {
    console.log('constructor called!');
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngchanges called!');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngonit called');
    console.log('Text Content: '+this.header.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log('ngdocheck called!');
  }

  ngAfterContentInit() {
    //will be called only once.
    console.log('ngAfterContentInit called!');
    console.log('Paragraph content: '+this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called!');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called!');
    console.log('Text Content: '+this.header.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called!');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called!')
  }
}
