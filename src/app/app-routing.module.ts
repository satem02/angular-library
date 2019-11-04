import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components';
import { EventListComponent } from 'projects/agenda/src/public-api';
import { MoneyTransferDashboardComponent } from 'projects/satem-ui/src/public-api';
import { DasboardComponent } from 'projects/satem-ui/src/lib/components/parent-child-examples/parent-to-child';


const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'money', component: MoneyTransferDashboardComponent },
  { path: 'parent-child', component: DasboardComponent },
  { path: 'event', component: EventListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

