import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from '../../environments/environment';
// import * as Highcharts from 'highcharts';
// const HighchartsMore = require("highcharts/highcharts-more.src");
// HighchartsMore(Highcharts);
// const HC_solid_gauge = require("highcharts/modules/solid-gauge.src");
// HC_solid_gauge(Highcharts);
// import * as Exporting from 'highcharts/modules/exporting';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent implements OnInit {
  // @ViewChild('charts') public chartEl: ElementRef;
  
  public imagesUrl;
  public news=[];
  
//   onClickMe(referenceKeyName) {
//   alert(referenceKeyName.id);
// }

  constructor(config: NgbCarouselConfig, private route: ActivatedRoute,private router: Router) {
    if(localStorage.getItem('loginStatus')!='1'){
      this.router.navigate([environment.returnURL]);
    }
    config.interval = 2000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = true;
    console.log(localStorage.getItem('loginStatus'));
    
  }
  ngOnInit() {
    
    // this.chartFunc('chart0');
    // this.chartFunc1('chart1');
    // this.chartFunc2('chart2'); 
    // this.chartFunc3('chart3');
    // this.chartFunc4('chart4');
    this.news =[{"newsName":"Enersys signs on 10 key new EDI"},{ "newsName":"EnerSys Announces First Quarter Fiscal 2020 Results Conference Call"},{"newsName":"EnerSys Reports Fourth Quarter and Full Year Fiscal 2019 Results"}];
  }
  // chartFunc(chartId){
  //   Highcharts.chart(chartId,{
  //    chart: {
  //          'type': 'solidgauge',
  //          height: 300
  //       },
  //       title: {
  //          text: "Accounts Enrollement",
  //             margin: 0,
  //             y: 32,
  //             x: 0,
  
  //             verticalAlign: 'middle',
  //             style: {
  //                 align: 'center',
  //                 fontSize: '107%',
  //                 fontColor: '#17375e'
  //             }
  //       },
  //      'pane': {
  //           startAngle: 0,
  //           'size': '150px',
  //             endAngle: 360,
  //             background: [{
  //                 innerborderRadius: '50',
  //                 innerRadius: '115%',
  //                 outerRadius: '105%',
  //                 borderWidth: 0
  //             }]
  //         },
  //         'yAxis': {
  //           stops: [
  //             [0.1, '#55BF3B'], // green
  //             [0.5, '#DDDF0D'], // yellow
  //             [0.9, '#DF5353'] // red
  //           ],
  //           'min': 0,
  //           'max': 100,
  //           'labels': {
  //             'enabled': false
  //           },
      
  //           'lineWidth': 0,
  //           'minorTickInterval': null,
  //           'tickPixelInterval': 400,
  //           'tickWidth': 0
  //         },
  //         'plotOptions': {
  //             solidgauge: {
  //                 rounded: true,
  //                 dataLabels: {
  //                     borderWidth: 0,
  //                     verticalAlign: 'middle',
  //                     y: -10,
  //                     x: 0,
  //                 //     // formatter: function () {
  //                 //     //     return Highcharts.numberFormat(this.y, 0, '.', ',');
  //                     },
  //                     style: {
  //                         align: 'center',
  //                         fontWeight: 'normal',
  //                         fontSize: '450%',
  //                         fontColor: '#17375e'
  //                     },
  //                     useHTML: true,
  //                     enabled: true,
  //                     // color: {
  //                     //     formatter: function () { return this.point.color; }
  //                     // },
  //                 // },
  //                 borderWidth: 20,
  //                 radius: 90,
  //                 innerRadius: '90%'
  //             }
  //         },
  //         credits: {
  //           enabled: false
  //         },
  //       'series': [{
  //             'name': 'Speed',
  //             'data': [{
  //                 name: "abc",
  //                 color: Highcharts.getOptions().colors[0],
  //                 radius: '115%',
  //                 innerRadius: '105%',
  //                 y: 40,
                  
  //             }],
  //             'dataLabels': {
  //                 'enabled':true,
                  
                  
  //             }
  //       }]
  //    });
  // }
  // chartFunc1(chartId){
  //   Highcharts.chart(chartId,{
  //    chart: {
  //          'type': 'solidgauge',
  //          height: 300
  //       },
  //       title: {
  //          text: "Meters Enrollement",
  //             margin: 0,
  //             y: 32,
  //             x: 0,
  
  //             verticalAlign: 'middle',
  //             style: {
  //                 align: 'center',
  //                 fontSize: '120%',
  //                 fontColor: '#17375e'
  //             }
  //       },
  //      'pane': {
  //           startAngle: 0,
  //           'size': '150px',
  //             endAngle: 360,
  //             background: [{
  //                 innerborderRadius: "50",
  //                 innerRadius: '115%',
  //                 outerRadius: '105%',
  //                 borderWidth: 0
  //             }]
  //         },
  //         'yAxis': {
  //           stops: [
  //             [0.1, '#55BF3B'], // green
  //             [0.5, '#DDDF0D'], // yellow
  //             [0.9, '#DF5353'] // red
  //           ],
  //           'min': 0,
  //           'max': 100,
  //           'labels': {
  //             'enabled': false
  //           },
      
  //           'lineWidth': 0,
  //           'minorTickInterval': null,
  //           'tickPixelInterval': 400,
  //           'tickWidth': 0
  //         },
  //         'plotOptions': {
  //             solidgauge: {
  //                 rounded: true,
  //                 dataLabels: {
  //                     borderWidth: 0,
  //                     verticalAlign: 'middle',
  //                     y: -10,
  //                     x: 0,
  //                 //     // formatter: function () {
  //                 //     //     return Highcharts.numberFormat(this.y, 0, '.', ',');
  //                     },
  //                     style: {
  //                         align: 'center',
  //                         fontWeight: 'normal',
  //                         fontSize: '450%',
  //                         fontColor: '#17375e'
  //                     },
  //                     useHTML: true,
  //                     enabled: true,
  //                     // color: {
  //                     //     formatter: function () { return this.point.color; }
  //                     // },
  //                 // },
  //                 borderWidth: 20,
  //                 radius: 90,
  //                 innerRadius: '90%'
  //             }
  //         },
  //         credits: {
  //           enabled: false
  //         },
  //       'series': [{
  //             'name': 'Speed',
  //             'data': [{
  //                 name: "abc",
  //                 color: Highcharts.getOptions().colors[0],
  //                 radius: '115%',
  //                 innerRadius: '105%',
  //                 y: 20,
                  
  //             }],
  //             'dataLabels': {
  //                 'enabled':true,
                  
                  
  //             }
  //       }]
  //    });
  // }
  // chartFunc3(chartId){
  //   Highcharts.chart(chartId,{
  //    chart: {
  //          'type': 'solidgauge',
  //          height: 300
  //       },
  //       title: {
  //          text: "Reading To Be Billed",
  //             margin: 0,
  //             y: 32,
  //             x: 0,
  
  //             verticalAlign: 'middle',
  //             style: {
  //                 align: 'center',
  //                 fontSize: '120%',
  //                 fontColor: '#17375e'
  //             }
  //       },
  //      'pane': {
  //           startAngle: 0,
  //           'size': '150px',
  //             endAngle: 360,
  //             background: [{
  //                 innerborderRadius: "50",
  //                 innerRadius: '115%',
  //                 outerRadius: '105%',
  //                 borderWidth: 0
  //             }]
  //         },
  //         credits: {
  //           enabled: false
  //         },
  //         'yAxis': {
  //           stops: [
  //             [0.1, '#55BF3B'], // green
  //             [0.5, '#DDDF0D'], // yellow
  //             [0.9, '#DF5353'] // red
  //           ],
  //           'min': 0,
  //           'max': 100,
  //           'labels': {
  //             'enabled': false
  //           },
      
  //           'lineWidth': 0,
  //           'minorTickInterval': null,
  //           'tickPixelInterval': 400,
  //           'tickWidth': 0
  //         },
  //         'plotOptions': {
  //             solidgauge: {
  //                 rounded: true,
  //                 dataLabels: {
  //                     borderWidth: 0,
  //                     verticalAlign: 'middle',
  //                     y: -10,
  //                     x: 0,
  //                 //     // formatter: function () {
  //                 //     //     return Highcharts.numberFormat(this.y, 0, '.', ',');
  //                     },
  //                     style: {
  //                         align: 'center',
  //                         fontWeight: 'normal',
  //                         fontSize: '450%',
  //                         fontColor: '#17375e'
  //                     },
  //                     useHTML: true,
  //                     enabled: true,
  //                     // color: {
  //                     //     formatter: function () { return this.point.color; }
  //                     // },
  //                 // },
  //                 borderWidth: 20,
  //                 radius: 90,
  //                 innerRadius: '90%'
  //             }
  //         },
  //       'series': [{
  //             'name': 'Speed',
  //             'data': [{
  //                 name: "abc",
  //                 color: Highcharts.getOptions().colors[0],
  //                 radius: '115%',
  //                 innerRadius: '105%',
  //                 y: 48,
                  
  //             }],
  //             'dataLabels': {
  //                 'enabled':true,
                  
                  
  //             }
  //       }]
  //    });
  // }
  // chartFunc4(chartId){
  //   Highcharts.chart(chartId,{
  //    chart: {
  //          'type': 'solidgauge',
  //          height: 300
  //       },
  //       title: {
  //          text: "Reading To Be Billed",
  //             margin: 0,
  //             y: 32,
  //             x: 0,
  
  //             verticalAlign: 'middle',
  //             style: {
  //                 align: 'center',
  //                 fontSize: '120%',
  //                 fontColor: '#17375e'
  //             }
  //       },
  //      'pane': {
  //           startAngle: 0,
  //           'size': '150px',
  //             endAngle: 360,
  //             background: [{
  //                 innerborderRadius: "50",
  //                 innerRadius: '115%',
  //                 outerRadius: '105%',
  //                 borderWidth: 0
  //             }]
  //         },
  //         credits: {
  //           enabled: false
  //         },
  //         'yAxis': {
  //           stops: [
  //             [0.1, '#55BF3B'], // green
  //             [0.5, '#DDDF0D'], // yellow
  //             [0.9, '#DF5353'] // red
  //           ],
  //           'min': 0,
  //           'max': 100,
  //           'labels': {
  //             'enabled': false
  //           },
      
  //           'lineWidth': 0,
  //           'minorTickInterval': null,
  //           'tickPixelInterval': 400,
  //           'tickWidth': 0
  //         },
  //         'plotOptions': {
  //             solidgauge: {
  //                 rounded: true,
  //                 dataLabels: {
  //                     borderWidth: 0,
  //                     verticalAlign: 'middle',
  //                     y: -10,
  //                     x: 0,
  //                 //     // formatter: function () {
  //                 //     //     return Highcharts.numberFormat(this.y, 0, '.', ',');
  //                     },
  //                     style: {
  //                         align: 'center',
  //                         fontWeight: 'normal',
  //                         fontSize: '450%',
  //                         fontColor: '#17375e'
  //                     },
  //                     useHTML: true,
  //                     enabled: true,
  //                     // color: {
  //                     //     formatter: function () { return this.point.color; }
  //                     // },
  //                 // },
  //                 borderWidth: 20,
  //                 radius: 90,
  //                 innerRadius: '90%'
  //             }
  //         },
  //       'series': [{
  //             'name': 'Speed',
  //             'data': [{
  //                 name: "abc",
  //                 color: Highcharts.getOptions().colors[0],
  //                 radius: '115%',
  //                 innerRadius: '105%',
  //                 y: 65,
                  
  //             }],
  //             'dataLabels': {
  //                 'enabled':true,
                  
                  
  //             }
  //       }]
  //    });
  // }
  // chartFunc2(chartId){
  //   Highcharts.chart(chartId,{
  //    chart: {
  //          'type': 'solidgauge',
  //          height: 300
  //       },
  //       title: {
  //          text: "Reading To Be Billed",
  //             margin: 0,
  //             y: 32,
  //             x: 0,
  
  //             verticalAlign: 'middle',
  //             style: {
  //                 align: 'center',
  //                 fontSize: '120%',
  //                 fontColor: '#17375e'
  //             }
  //       },
  //      'pane': {
  //           startAngle: 0,
  //           'size': '150px',
  //             endAngle: 360,
  //             background: [{
  //                 innerborderRadius: "50",
  //                 innerRadius: '115%',
  //                 outerRadius: '105%',
  //                 borderWidth: 0
  //             }]
  //         },
  //         credits: {
  //           enabled: false
  //         },
  //         'yAxis': {
  //           stops: [
  //             [0.1, '#55BF3B'], // green
  //             [0.5, '#DDDF0D'], // yellow
  //             [0.9, '#DF5353'] // red
  //           ],
  //           'min': 0,
  //           'max': 100,
  //           'labels': {
  //             'enabled': false
  //           },
      
  //           'lineWidth': 0,
  //           'minorTickInterval': null,
  //           'tickPixelInterval': 400,
  //           'tickWidth': 0
  //         },
  //         'plotOptions': {
  //             solidgauge: {
  //                 rounded: true,
  //                 dataLabels: {
  //                     borderWidth: 0,
  //                     verticalAlign: 'middle',
  //                     y: -10,
  //                     x: 0,
  //                 //     // formatter: function () {
  //                 //     //     return Highcharts.numberFormat(this.y, 0, '.', ',');
  //                     },
  //                     style: {
  //                         align: 'center',
  //                         fontWeight: 'normal',
  //                         fontSize: '450%',
  //                         fontColor: '#17375e'
  //                     },
  //                     useHTML: true,
  //                     enabled: true,
  //                     // color: {
  //                     //     formatter: function () { return this.point.color; }
  //                     // },
  //                 // },
  //                 borderWidth: 20,
  //                 radius: 90,
  //                 innerRadius: '90%'
  //             }
  //         },
  //       'series': [{
  //             'name': 'Speed',
  //             'data': [{
  //                 name: "abc",
  //                 color: Highcharts.getOptions().colors[0],
  //                 radius: '115%',
  //                 innerRadius: '105%',
  //                 y: 80,
                  
  //             }],
  //             'dataLabels': {
  //                 'enabled':true,
                  
                  
  //             }
  //       }]
  //    });
  // }

  
  

}
