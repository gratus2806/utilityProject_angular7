import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Router, Params, NavigationExtras } from "@angular/router";
import { UserService } from '../../../service/user.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";
@Component({
  selector: 'app-add-enrollement',
  templateUrl: './add-enrollement.component.html',
  styleUrls: ['./add-enrollement.component.css']
})
export class AddEnrollementComponent implements OnInit {
  selectedPlan;
  planData;
  newEnrollement;
  billingAddress;
  Utility_listArray=[];
  CommodityListArray=[];
  newEnrollementForm: FormGroup;
  constructor(public router: Router,public userService: UserService,private route: ActivatedRoute,private formBuilder: FormBuilder) { 
    this.Utility_listArray=[
      {Utility_list: 'selected'},
      {Utility_list: 'Consolidated Edison Company Of New York Inc.'},
      {Utility_list: 'Long Island Power Authority'}
    ];
    this.CommodityListArray=[
      {CommodityList: 'selected'},
      {CommodityList: 'Electric'},
      {CommodityList: 'Gas'}
    ];
  }

  ngOnInit() {
    
    this.newEnrollementForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      phoneNo: [''],
      socialSecurity: [''],
      mobileNo: [''],
      Date_birth: [''],
      authorized: [''],
      address: [''],
      state: [''],
      address_2: [''],
      zip_code: [''],
      city: [''],
      samebillingAddress: [''],
      Utility: [''],
      Commodity:[''],
      authorizedContacting: [''],
      ageAuthorized: [''],
      VerifiedChanges: [''],
    })
    this.selectedPlan = this.userService.getOption();
    this.planData = this.selectedPlan['selectedPlanData'];
    console.log("selected data=>>>",this.selectedPlan['selectedPlanData'])
  }
  onSubmitEnrollementForm(){
    if(this.newEnrollementForm.controls.samebillingAddress.value== true){
      this.billingAddress={
        address: this.newEnrollementForm.controls.address.value,
        state: this.newEnrollementForm.controls.state.value,
        address_2: this.newEnrollementForm.controls.address_2.value,
        zip_code: this.newEnrollementForm.controls.zip_code.value,
        city: this.newEnrollementForm.controls.city.value,
      }
    } 
    // else{
    //   this.billingAddress={

    //   }
    // }
    this.newEnrollement = {
      userId:localStorage.getItem('userId'),
      firstName: this.newEnrollementForm.controls.firstName.value,
      lastName: this.newEnrollementForm.controls.lastName.value,
      email: this.newEnrollementForm.controls.email.value,
      phoneNo: this.newEnrollementForm.controls.phoneNo.value,
      socialSecurity: this.newEnrollementForm.controls.socialSecurity.value,
      Date_birth: this.newEnrollementForm.controls.Date_birth.value,
      authorized: this.newEnrollementForm.controls.authorized.value,
      billingAddress: this.billingAddress,
      samebillingAddress: this.newEnrollementForm.controls.samebillingAddress.value,
      Utility: this.newEnrollementForm.controls.Utility.value,
      Commodity: this.newEnrollementForm.controls.Commodity.value,
      authorizedContacting: this.newEnrollementForm.controls.authorizedContacting.value,
      ageAuthorized: this.newEnrollementForm.controls.ageAuthorized.value,
      VerifiedChanges: this.newEnrollementForm.controls.VerifiedChanges.value,
      selectedPlan:this.selectedPlan['selectedPlanData'] 
      
    }
    console.log("new enrollemrnt>>>>",this.newEnrollement)
    this.userService.new_Enrollement(this.newEnrollement).subscribe(data => {
      console.log("new enrollement response data",data)
      let userEnrolled =data['status'];
      if(userEnrolled==true){
        this.router.navigate(["/newenrollement"]);
      }
    })
  }
  onCancel(){
    this.router.navigate(["/newenrollement"]);
  }
  

}
