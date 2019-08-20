import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../../service/user.service';
@Component({
  selector: 'app-plans-panel',
  templateUrl: './plans-panel.component.html',
  styleUrls: ['./plans-panel.component.css']
})
export class PlansPanelComponent implements OnInit {
  @Input() planData;
  @Output() seclectedPlan = new EventEmitter(); 
  plans;
  ChildComponent;
  constructor(private router: Router,public userService: UserService) { 
    
  }

  ngOnInit() {
    this.plans =this.planData
    console.log("plans",this.plans)
  }
  onSelect(planData) {
    this.userService.setOption('selectedPlanData',planData);
    this.router.navigate(["/addEnrollement"]);
 }

}
