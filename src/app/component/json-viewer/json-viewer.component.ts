import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-json-viewer',
  templateUrl: './json-viewer.component.html',
  styleUrls: ['./json-viewer.component.css']
})
export class JsonViewerComponent implements OnInit {

  @Input() target: Object = null;

  visible: boolean = false;

  get jsonString() {
    return JSON.stringify(this.target, null, '    ');
  }

  constructor() { }

  ngOnInit() {
  }

  toggleVisibility() {
    this.visible = !this.visible;
  }

}
