import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params, NavigationExtras } from "@angular/router";
import { UserService } from '../../../service/user.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";
@Component({
  selector: 'app-search-enrollement',
  templateUrl: './search-enrollement.component.html',
  styleUrls: ['./search-enrollement.component.css']
})
export class SearchEnrollementComponent implements OnInit {
  SearchEnrollementForm: FormGroup;
  isAccountNameSelected = false;
  isRatePlanSelected = false;
  isPromoCodeSelected = false;
  isEnrollmentDateSelected = false;
  isUtilitySelected =false;
  isCommoditySelected=false;
  isAccountNumberSelected=false;
  SearchEnrollement;
  enrollementSearched=[];
  constructor(public router: Router,public userService: UserService,private route: ActivatedRoute,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.SearchEnrollementForm = this.formBuilder.group({
      searchBy: [''],
      account_firstName: [''],
      account_lastName: [''],
      rate_plan: [''],
      promo_code: [''],
      enrollement_date: [''],
      utility_name: [''],
      commodity_name: [''],
      account_no: ['']
    })
  }
  onSubmitSearchEnrollementForm(){
    this.SearchEnrollement = {
      searchBy: this.SearchEnrollementForm.controls.searchBy.value,
      account_firstName: this.SearchEnrollementForm.controls.account_firstName.value,
      account_lastName: this.SearchEnrollementForm.controls.account_lastName.value,
      rate_plan: this.SearchEnrollementForm.controls.rate_plan.value,
      promo_code: this.SearchEnrollementForm.controls.promo_code.value,
      enrollement_date: this.SearchEnrollementForm.controls.enrollement_date.value,
      utility_name: this.SearchEnrollementForm.controls.utility_name.value,
      commodity_name: this.SearchEnrollementForm.controls.commodity_name.value,
      account_no: this.SearchEnrollementForm.controls.account_no.value
    }
    this.userService.searchEnrollement(this.SearchEnrollement).subscribe(data => {
      console.log("new enrollement response data",data['enrollementDetails'])
      this.enrollementSearched=data['enrollementDetails'];

    })
  }
  selectInput(event) {
    let selected = event.target.value;
    if(selected =="Account Name"){
      this.isAccountNameSelected = true;
      this.isRatePlanSelected = false;
      this.isPromoCodeSelected = false;
      this. isEnrollmentDateSelected = false;
      this.isUtilitySelected= false;
      this.isCommoditySelected= false;
      this.isAccountNumberSelected= false;
    }
    if(selected =="Rate Plan"){
      this.isRatePlanSelected = true;
      this.isAccountNameSelected = false;
      this.isPromoCodeSelected = false;
      this. isEnrollmentDateSelected = false;
      this.isUtilitySelected= false;
      this.isCommoditySelected= false;
      this.isAccountNumberSelected= false;
    }
    if(selected =="Promo Code"){
      this.isPromoCodeSelected = true;
      this.isRatePlanSelected = false;
      this.isAccountNameSelected = false;
      this. isEnrollmentDateSelected = false;
      this.isUtilitySelected= false;
      this.isCommoditySelected= false;
      this.isAccountNumberSelected= false;
    }
    if(selected =="Enrollment Date"){
      this. isEnrollmentDateSelected = true;
      this.isPromoCodeSelected = false;
      this.isRatePlanSelected = false;
      this.isAccountNameSelected = false;
      this.isUtilitySelected= false;
      this.isCommoditySelected= false;
      this.isAccountNumberSelected= false;
    }
    if(selected =="Utility"){
      this.isUtilitySelected= true;
      this. isEnrollmentDateSelected = false;
      this.isPromoCodeSelected = false;
      this.isRatePlanSelected = false;
      this.isAccountNameSelected = false;
      this.isCommoditySelected= false;
      this.isAccountNumberSelected= false;
    }
    if(selected =="Commodity"){
      this.isCommoditySelected= true;
      this.isUtilitySelected= false;
      this. isEnrollmentDateSelected = false;
      this.isPromoCodeSelected = false;
      this.isRatePlanSelected = false;
      this.isAccountNameSelected = false;
      this.isAccountNumberSelected= false;
    }
    
    if(selected =="Account Number"){
      this.isAccountNumberSelected= true;
      this.isCommoditySelected= false;
      this.isUtilitySelected= false;
      this. isEnrollmentDateSelected = false;
      this.isPromoCodeSelected = false;
      this.isRatePlanSelected = false;
      this.isAccountNameSelected = false;
     
    }
    
  }

}
