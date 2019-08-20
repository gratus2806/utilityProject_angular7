import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
// import {User} from "../model/user.model";

@Injectable()
export class UserService {
  constructor(private http: HttpClient) { }
  private data = {};  
  setOption(option, value) {      
     this.data[option] = value;  
   }  
   getOption() {  
     return this.data;  
   } 
   
   
   
  login(userInfo) {
    return this.http.post(environment.apiBaseUrl+'/login',userInfo);
  }
  subscription(cancelcardInfo){
    return this.http.post(environment.apiBaseUrl+'/subscription',cancelcardInfo);
  }
  loadfeeds(){
    return this.http.get(environment.apiBaseUrl+'/loadfeeds');
  }
  autherFeed(cancelcardInfo){
    return this.http.post(environment.apiBaseUrl+'/autherFeed',cancelcardInfo);
  }
  newEnrollement_searchInfo(searchInfo){
    return this.http.post(environment.apiBaseUrl+'/newEnrollement_searchInfo',searchInfo);
  }
  accounts_searchInfo(searchInfo){
    return this.http.post(environment.apiBaseUrl+'/accounts_searchInfo',searchInfo);
  }
  new_Enrollement(newEnrollement){
    return this.http.post(environment.apiBaseUrl+'/newEnrollement',newEnrollement);
  }
  searchEnrollement(SearchEnrollement){
    return this.http.post(environment.apiBaseUrl+'/searchEnrollement',SearchEnrollement);
  }
  changeRequest(searchInfo){
    return this.http.post(environment.apiBaseUrl+'/changeRequest',searchInfo);
  }
  changeRate(searchInfo){
    return this.http.post(environment.apiBaseUrl+'/changeRate',searchInfo);
  }
  update_changeRate(updateInfo){
    return this.http.post(environment.apiBaseUrl+'/update_changeRate',updateInfo);
  }


  

  
  // Utility_list(){
  //   return this.http.get(environment.apiBaseUrl+'/Utility_list');
  // }
  // CommodityList(){
  //   return this.http.get(environment.apiBaseUrl+'/CommodityList');
  // }
  // AccountTypeList(){
  //   return this.http.get(environment.apiBaseUrl+'/AccountTypeList');
  // }
}
