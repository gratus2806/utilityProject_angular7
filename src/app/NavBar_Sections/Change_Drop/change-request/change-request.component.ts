import { Component, OnInit } from '@angular/core';
// import * as Highcharts from 'highcharts';
// const HighchartsMore = require("highcharts/highcharts-more.src");
// HighchartsMore(Highcharts);
// const HC_solid_gauge = require("highcharts/modules/solid-gauge.src");
// HC_solid_gauge(Highcharts);
// import * as Exporting from 'highcharts/modules/exporting';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {first} from "rxjs/operators";
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-change-request',
  templateUrl: './change-request.component.html',
  styleUrls: ['./change-request.component.css']
})
export class ChangeRequestComponent implements OnInit {
  isUtilitySelected= false;
  isAccountSelected= false;
  isAccountNameSelected = false;
  isNumberSelected = false;
  isAddressSelected = false;
  AccountSearchForm: FormGroup;
  searchInfo;
  constructor(public userService: UserService,private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.AccountSearchForm = this.formBuilder.group({
      searchBy: [''],
      utility_type: ['', Validators.required],
      status: ['', Validators.required],
      account_Number: ['', Validators.required],
      account_Type: ['', Validators.required],
      account_Name: ['', Validators.required],
      company_Name: ['', Validators.required],
      number_Type: ['', Validators.required],
      phone_Number: ['', Validators.required],
      address_Type: ['', Validators.required],
      address: ['', Validators.required],
      // company_Name: ['', Validators.required],
    });
  }
  onSubmitAccountSearchForm() {
    // this.submitted = true;]
    console.log(this.AccountSearchForm)
    this.searchInfo = {
      searchBy: this.AccountSearchForm.controls.searchBy.value,
      utility_type: this.AccountSearchForm.controls.utility_type.value,
      status: this.AccountSearchForm.controls.status.value,
      account_Number: this.AccountSearchForm.controls.account_Number.value,
      account_Type: this.AccountSearchForm.controls.account_Type.value,
      account_Name: this.AccountSearchForm.controls.account_Name.value,
      company_Name: this.AccountSearchForm.controls.company_Name.value,
      number_Type: this.AccountSearchForm.controls.number_Type.value,
      phone_Number: this.AccountSearchForm.controls.phone_Number.value,
      address_Type: this.AccountSearchForm.controls.address_Type.value,
      address: this.AccountSearchForm.controls.address.value
      
    }
    console.log(this.searchInfo)
    this.userService.changeRequest(this.searchInfo).subscribe(data => {
     console.log("searchInfo",data)
    })
     this.AccountSearchForm.reset();
  }
  selectInput(event) {
    let selected = event.target.value;
    if (selected == "Utility + Status") {
      this.isUtilitySelected      = true;
      this.isAccountSelected      = false;
      this.isAccountNameSelected  = false;
      this.isNumberSelected       = false;
      this.isAddressSelected     = false;
    }
    if(selected =="Account"){
      this.isAccountSelected     = true;
      this.isUtilitySelected     = false;
      this.isAccountNameSelected = false;
      this.isNumberSelected      = false;
      this.isAddressSelected     = false;
    }
    if(selected =="Account Name"){
      this.isAccountNameSelected = true;
      this.isAccountSelected     = false;
      this.isUtilitySelected     = false;
      this.isNumberSelected      = false;
      this.isAddressSelected     = false;
    }
    if(selected =="Number"){
      this.isNumberSelected      = true;
      this.isAccountNameSelected = false;
      this.isAccountSelected     = false;
      this.isUtilitySelected     = false;
      this.isAddressSelected     = false;
    }
    if(selected =="Address"){
      this.isAddressSelected     = true;
      this.isAccountNameSelected = false;
      this.isAccountSelected     = false;
      this.isUtilitySelected     = false;
      this.isNumberSelected      = false;
    }
  }

}
