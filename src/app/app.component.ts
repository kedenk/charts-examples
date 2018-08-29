import { Component } from '@angular/core';
import {Chart} from "angular-highcharts";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  pieChartData =  {
    chartType: 'PieChart',
    dataTable: [
      ['Task', 'Hours per Day'],
      ['Work',     11],
      ['Eat',      2],
      ['Commute',  2],
      ['Watch TV', 2],
      ['Sleep',    7]
    ],
    options: {'title': 'Tasks'},
  };

  tableChartData =  {
    chartType: 'Table',
    dataTable: [
      ['Department', 'Revenues', 'Another column'],
      ['Shoes', 10700, -100],
      ['Sports', -15400, 25],
      ['Toys', 12500, 40],
      ['Electronics', -2100, 889],
      ['Food', 22600, 78],
      ['Art', 1100, 42]
    ],
    formatters: [
      {
        columns: [1, 2],
        type: 'NumberFormat',
        options: {
          prefix: '&euro;', negativeColor: '#FF0000', negativeParens: true
        }
      }
    ],
    options: {title: 'Countries', allowHtml: true}
  };

  lineChartData = {
    chartType: 'LineChart',
    dataTable: [
      ['Year', 'Rampenzeit', 'Verweilzeit'],
      ['Vorevak',  10,      20],
      ['Schritt 1',        50,      40],
      ['Schritt 2',  500,       10],
      ['Schritt 3',  10,      60]
    ],
    options: {
      title: 'Programm',
      animation:{
        duration: 1000,
        easing: 'out',
        startup: true
      }}
  };

  timelineChartData:any =  {
    chartType: 'Timeline',
    dataTable: [
      ['Name', 'From', 'To'],
      [ 'Washington', new Date(1789, 3, 30), new Date(1797, 2, 4) ],
      [ 'Adams',      new Date(1797, 2, 4),  new Date(1801, 2, 4) ],
      [ 'Jefferson',  new Date(1801, 2, 4),  new Date(1809, 2, 4) ]
    ]
  }

  chart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Linechart'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Verweilzeit',
        data: [10, 20, 10, 30]
      },
      {
        name: 'Rampenzeit',
        data: [100, 50, 0, 20]
      }
    ]
  });
}
