import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {first} from "rxjs/operators";
// import {AuthenticationService} from "../service/auth.service";
import { UserService } from '../service/user.service';
@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.css']
})
export class FeedsComponent implements OnInit {
  cancelcardInfo;
  subscrbeForm: FormGroup;
  submitted: boolean = false;
  list = true;
  addfeed = false;
  subscribe=false;
  btnclicked = true;
  feedsarray;
  alert={};
  successful_subscribed=false;
  failed_subscribed=false;
 
  constructor(public userService: UserService,private formBuilder: FormBuilder, private router: Router) { }
  ngOnInit() {
    this.subscrbeForm = this.formBuilder.group({
      email: ['', Validators.required],
      auther_name: ['', Validators.required],
      feed: ['', Validators.required]
    });
    this.userService.loadfeeds().subscribe(data => {
      this.feedsarray = data['feeds'];
      console.log(this.feedsarray)
    })
  }
  onSubmitsubscribe() {
    // this.submitted = true;
    this.cancelcardInfo = {
      email: this.subscrbeForm.controls.email.value,
      type:"subscribe"
    }

    this.userService.subscription(this.cancelcardInfo).subscribe(data => {
      if(data['status']==true){
        
      this.successful_subscribed =true;
      } else{
      this.failed_subscribed =true;
      }
    })

    this.subscrbeForm.reset();
    this.list = true;
    this.addfeed = false;
    this.subscribe = false;
    this.btnclicked = true;
    

  }
  
  onSubmitfeed(){
    this.cancelcardInfo = {
      auther_name: this.subscrbeForm.controls.auther_name.value,
      feed:this.subscrbeForm.controls.feed.value,
      type:"feeds"
    }
    this.userService.autherFeed(this.cancelcardInfo).subscribe(data => {
      this.feedsarray = data['feeds'];
      
    })
    this.subscrbeForm.reset();
    this.list = true;
    this.addfeed = false;
    this.subscribe = false;
    this.btnclicked = true;
  }

  subscribe_btn(){
    console.log("in subscribe_btn ")
    this.list = true;
    this.addfeed = false;
    this.subscribe = true;
    this.btnclicked = false;
  }

  cancel_btn(){
    this.list = true;
    
  }
  feed_btn(){
    console.log("in feed_btn ")
    this.list = true;
    this.addfeed = true;
    this.subscribe = false;
    this.btnclicked = false;
  }

 



}
