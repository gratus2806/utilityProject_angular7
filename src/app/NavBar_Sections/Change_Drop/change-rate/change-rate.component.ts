import { Component, OnInit } from '@angular/core';
// import * as Highcharts from 'highcharts';
// const HighchartsMore = require("highcharts/highcharts-more.src");
// HighchartsMore(Highcharts);
// const HC_solid_gauge = require("highcharts/modules/solid-gauge.src");
// HC_solid_gauge(Highcharts);
// import * as Exporting from 'highcharts/modules/exporting';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import {Router} from "@angular/router";
import {first} from "rxjs/operators";
import { UserService } from '../../../service/user.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-change-rate',
  templateUrl: './change-rate.component.html',
  styleUrls: ['./change-rate.component.css']
})
export class ChangeRateComponent implements OnInit {
  id;
  months;
  earlyTermination_fee;
  unit_rate;
  AccountSearchForm: FormGroup;
  AccountUpdateForm:FormGroup;
  searchInfo;
  updateInfo;
  enrollementSearched=[];
  isDateFound=false;
  selected_userId;
  selected_values;
  selected_row =false;
  myForm: FormGroup;
  constructor(public userService: UserService,public modalService: NgbModal,private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      selected_userId: this.formBuilder.array([])
    });
    
    this.AccountSearchForm = this.formBuilder.group({
      utility_type: [''],
      plan_type: ['']
    })
    this.AccountUpdateForm = this.formBuilder.group({
      billing_method: [''],
      changedPlan_type: ['']
    })
    // console.log(this.deviceCategories.filter(d=>d.checked===true));
  }
  onSubmitAccountSearchForm() {
    // this.submitted = true;]
    console.log(this.AccountSearchForm)
    this.searchInfo = {
      utility_type: this.AccountSearchForm.controls.utility_type.value,
      plan_type: this.AccountSearchForm.controls.plan_type.value
    }
    console.log(this.searchInfo)
    this.userService.changeRate(this.searchInfo).subscribe(data => {
     console.log("searchInfo",data)
     if(data['status']==true){
      this.isDateFound=true;
     }
     this.enrollementSearched=data['enrollementDetails'];
    })
     this.AccountSearchForm.reset();
  }

  
  onChange(userId: string, isChecked: boolean) {
    const selectedFormArray = <FormArray>this.myForm.controls.selected_userId;
    if (isChecked) {
      selectedFormArray.push(new FormControl(userId));
      this.selected_values =this.myForm.value.selected_userId;
      console.log("form value",this.selected_values)
    } else {
      console.log("in elese")
      let index = selectedFormArray.controls.findIndex(x => x.value == userId)
      selectedFormArray.removeAt(index);
    }
  }

  onSubmitAccountUpdateForm(){
    if(this.AccountUpdateForm.controls.changedPlan_type.value=="Silver Plan"){
      this.unit_rate="4";
      this.earlyTermination_fee="4";
      this.months="2 Months Fixed";
    }
    if(this.AccountUpdateForm.controls.changedPlan_type.value=="Gold Plan"){
      this.unit_rate="6";
      this.earlyTermination_fee="6";
      this.months="4 Months Fixed";
    }
    if(this.AccountUpdateForm.controls.changedPlan_type.value=="Platinum"){
      this.unit_rate="8";
      this.earlyTermination_fee="6";
      this.months="5 Months Fixed";
    }

    this.updateInfo = {
      billing_method: this.AccountUpdateForm.controls.billing_method.value,
      changedPlan_type: this.AccountUpdateForm.controls.changedPlan_type.value,
      selected_userId:this.selected_values,
      unit_rate:this.unit_rate,
      earlyTermination_fee:this.earlyTermination_fee,
      months:this.months
    }
    console.log("updated info",this.updateInfo)
    this.userService.update_changeRate(this.updateInfo).subscribe(data => {
      console.log("updateInfo",data['result'][3])
      this.enrollementSearched=data['result'][3];
    })
    this.AccountUpdateForm.reset();
    // location.reload();
    this.myForm.reset();
    this.isDateFound=false;
  }

}
