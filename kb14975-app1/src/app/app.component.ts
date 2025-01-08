import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { IgxGridModule, IgxIconModule } from '@infragistics/igniteui-angular';
import { SampleDataType, SampleData } from './sampleData';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, IgxGridModule, IgxIconModule, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'kb14975-app1';
  public data: SampleDataType[] = SampleData;

  constructor() {}

  ngOnInit() {
  }
}
