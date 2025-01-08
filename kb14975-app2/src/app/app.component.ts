import { NgIf, NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { IgxGridModule, IgxIconModule } from '@infragistics/igniteui-angular';
import { SampleDataType, SampleData } from './sampleData';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, IgxGridModule, IgxIconModule, NgIf, NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'kb14975-app2';
  public data: SampleDataType[] = [];
  public columns: any[] = [];

  constructor() {}

  ngOnInit() {
    this.data = SampleData;
    this.columns = Object.entries(this.data[0]).map(([key, value], index) => {
      const dataType = Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
      return {
        field: key,
        header: key,
        dataType
      };
    });
  }
}
