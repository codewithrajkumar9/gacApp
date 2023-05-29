import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityComponent } from './components/activity/activity.component';
import { PlaceAnOrderComponent } from './components/place-an-order/place-an-order.component';
import { DealerListComponent } from './components/dealer-list/dealer-list.component';
import { LoginComponent } from './components/login/login.component';
import { RegistaionComponent } from './components/registaion/registaion.component';
import { LogOutComponent } from './components/log-out/log-out.component';

const routes: Routes = [
  {
    path: 'activity',
    component: ActivityComponent
  },
  {
    path: 'place-an-order',
    component: PlaceAnOrderComponent
  },
  {
    path: 'dealer-list',
    component: DealerListComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registaion',
    component: RegistaionComponent
  },
  {
    path: 'home',
    component: LogOutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
