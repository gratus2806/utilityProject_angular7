import { RouterModule, Routes } from '@angular/router';
import { FeedsComponent } from './subscripton/feeds.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AccountsComponent } from './NavBar_Sections/accounts/accounts.component';
import { NewenrollementComponent } from './NavBar_Sections/Enrollement/newenrollement/newenrollement.component';
import { SearchEnrollementComponent } from './NavBar_Sections/Enrollement/search-enrollement/search-enrollement.component';
import { AddEnrollementComponent } from './NavBar_Sections/Enrollement/add-enrollement/add-enrollement.component';
import { ChangeRequestComponent } from './NavBar_Sections/Change_Drop/change-request/change-request.component';
import { ChangeRateComponent } from './NavBar_Sections/Change_Drop/change-rate/change-rate.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component : LoginComponent},
  {path : 'login', component : LoginComponent},
  { path: 'feeds', component: FeedsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'newenrollement', component: NewenrollementComponent },
  { path: 'accounts', component: AccountsComponent },
  { path: 'searchEnrollement', component: SearchEnrollementComponent },
  { path: 'addEnrollement', component: AddEnrollementComponent },
  { path: 'changeRequest', component: ChangeRequestComponent  },
  { path: 'changeRate', component: ChangeRateComponent  }
  
];

export const routing = RouterModule.forRoot(routes);
