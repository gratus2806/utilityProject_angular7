import { Component, OnInit } from '@angular/core';
// import * as Highcharts from 'highcharts';
// const HighchartsMore = require("highcharts/highcharts-more.src");
// HighchartsMore(Highcharts);
// const HC_solid_gauge = require("highcharts/modules/solid-gauge.src");
// HC_solid_gauge(Highcharts);
// import * as Exporting from 'highcharts/modules/exporting';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {first} from "rxjs/operators";
// import {AuthenticationService} from "../service/auth.service";
import { UserService } from '../../../service/user.service';
import { PlansPanelComponent } from './plans-panel/plans-panel.component';
@Component({
  selector: 'app-newenrollement',
  templateUrl: './newenrollement.component.html',
  styleUrls: ['./newenrollement.component.css'],
  exportAs: 'child'
})
export class NewenrollementComponent implements OnInit {
  public Utility_listArray=[];
  public CommodityListArray=[];
  public AccountTypeListArray =[];
  SearchForm: FormGroup;
  searchInfo;
  filterInfo;
  plan_type;
  unit_rate;
  units;
  powerYour_Tomorrow;
  months;
  offers;
  green_energy;
  earlyTermination_fee;
  plans_listArray=[];
  isPlanAvailable = true;

  constructor(public modalService: NgbModal,public userService: UserService,private formBuilder: FormBuilder, private router: Router) { 
    this.Utility_listArray=[
      {Utility_list: 'selected'},
      {Utility_list: 'Consolidated Edison Company Of New York Inc.'},
      {Utility_list: 'Long Island Power Authority'}
    ];
    this.CommodityListArray=[
      {CommodityList: 'selected'},
      {CommodityList: 'Electric'}
    ];
    this.AccountTypeListArray=[
      {AccountTypeList: 'selected'},
      {AccountTypeList: 'Commercial'},
      {AccountTypeList: 'Industrial'},
      {AccountTypeList: 'Residential'},
      {AccountTypeList: 'Unknown'}
    ];
    this.plans_listArray=[
      {
        plan_type:"Gold Plan",
        unit_rate:"5",
        units :"cents/kWH",
        powerYour_Tomorrow:"POWER YOUR TOMORROW - 9",
        months:"4 Months Fixed",
        offers :"none",
        green_energy:"none",
        earlyTermination_fee:"6"
      },{
        plan_type:"Gold Plan",
        unit_rate:"6",
        units :"cents/kWH",
        powerYour_Tomorrow:"POWER YOUR TOMORROW - 9",
        months:"4 Months Fixed",
        offers :"none",
        green_energy:"none",
        earlyTermination_fee:"6"
      },{

        plan_type:"Gold Plan",
        unit_rate:"7",
        units :"cents/kWH",
        powerYour_Tomorrow:"POWER YOUR TOMORROW - 9",
        months:"4 Months Fixed",
        offers :"none",
        green_energy:"none",
        earlyTermination_fee:"6"
      } 
    ]

  }

  ngOnInit() {
      // this.chartFunc('chart0');
      this.SearchForm = this.formBuilder.group({
        RatePlanSearchRequest: ['', Validators.required],
        Utility_lists: ['', Validators.required],
        CommodityLists: ['', Validators.required],
        promo: ['', Validators.required],
        AccountTypeLists: ['', Validators.required],
        RateTerms: ['', Validators.required],
        RateType: ['', Validators.required]
      });
      // this.userService.Utility_list().subscribe(data => {
      //   this.Utility_listArray = data['Utility_lists'];
      //   console.log(this.Utility_listArray)
      // })
      // this.userService.CommodityList().subscribe(data => {
      //   this.CommodityListArray = data['CommodityLists'];
      //   console.log(this.CommodityListArray)
      // })
      // this.userService.AccountTypeList().subscribe(data => {
      //   this.AccountTypeListtArray = data['AccountTypeLists'];
      //   console.log(this.AccountTypeListtArray)
      // })

  }
  onCancel(){
    this.SearchForm.reset();
  }
  
  onSubmitSearchForm() {
    
    // this.submitted = true;]
    console.log(this.SearchForm)
    this.searchInfo = {
      RatePlanSearchRequest: this.SearchForm.controls.RatePlanSearchRequest.value,
      comodity_list: this.SearchForm.controls.Utility_lists.value,
      account_type: this.SearchForm.controls.CommodityLists.value,
      businessState: this.SearchForm.controls.AccountTypeLists.value
      
    }
    console.log(this.searchInfo)
    // this.userService.newEnrollement_searchInfo(this.searchInfo).subscribe(data => {

    //  console.log("searchInfo",data)

    //  if(data!=''){
    //    this.isPlanAvailable = true;
    //  }
    // })
     this.SearchForm.reset();
  }
  onSubmitFilterForm() {
    // this.submitted = true;]
    console.log(this.SearchForm)
    this.filterInfo = {
      promo: this.SearchForm.controls.promo.value,
      RateTerms: this.SearchForm.controls.RateTerms.value,
      RateType: this.SearchForm.controls.RateType.value
    }
    console.log(this.filterInfo)
    // this.userService.newEnrollement_searchInfo(this.searchInfo).subscribe(data => {
    //  console.log("searchInfo",data)
    // })
     this.SearchForm.reset();
  }
  // chartFunc(chartId){
  //     Highcharts.chart(chartId,{
  //      chart: {
  //            'type': 'solidgauge',
  //            height: 200
  //         },
          
  //         title: {
  //            text: "New Enrollment",
  //               margin: 0,
  //               y: 32,
  //               x: 0,
    
  //               verticalAlign: 'middle',
  //               style: {
  //                   align: 'center',
  //                   fontSize: '107%',
  //                   fontColor: '#17375e'
  //               }
  //         },
  //        'pane': {
  //             startAngle: 0,
  //             'size': '150px',
  //               endAngle: 360,
  //               background: [{
  //                   innerborderRadius: '50',
  //                   innerRadius: '115%',
  //                   outerRadius: '105%',
  //                   borderWidth: 0
  //               }]
  //           },
  //           'yAxis': {
  //             stops: [
  //               [0.1, '#55BF3B'], // green
  //               [0.5, '#DDDF0D'], // yellow
  //               [0.9, '#DF5353'] // red
  //             ],
  //             'min': 0,
  //             'max': 100,
  //             'labels': {
  //               'enabled': false
  //             },
        
  //             'lineWidth': 0,
  //             'minorTickInterval': null,
  //             'tickPixelInterval': 400,
  //             'tickWidth': 0
  //           },
  //           'plotOptions': {
  //               solidgauge: {
  //                   rounded: true,
  //                   dataLabels: {
                      
  //                       borderWidth: 0,
  //                       verticalAlign: 'middle',
  //                       y: -10,
  //                       x: 0,
  //                   //     // formatter: function () {
  //                   //     //     return Highcharts.numberFormat(this.y, 0, '.', ',');
  //                       },
                        
  //                       style: {
  //                         align: 'center',
  //                         fontWeight: 'normal',
  //                         fontSize: '450%',
  //                         fontColor: '#17375e'
  //                     },
  //                       useHTML: true,
  //                       enabled: true,
  //                       // color: {
  //                       //     formatter: function () { return this.point.color; }
  //                       // },
  //                   // },
  //                   borderWidth: 20,
  //                   radius: 90,
  //                   innerRadius: '90%'
  //               }
  //           },
  //           credits: {
  //             enabled: false
  //           },
  //         'series': [{
  //               'name': '',
                
  //               'data': [{
  //                   name: "abc",
  //                   color: Highcharts.getOptions().colors[0],
  //                   radius: '115%',
  //                   innerRadius: '105%',
  //                   y: 40,
                    
  //               }],
                
  //               'dataLabels': {
  //                   'enabled':true
                  

                    
                    
  //               }
  //         }]
  //      });
  //   }

}
