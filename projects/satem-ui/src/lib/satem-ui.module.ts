import { NgModule } from "@angular/core";
import { MoneyTransferDashboardComponent } from "./components";
import { MoneyTransferService, ApiService } from "./services";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import {
  satemUIReducer,
  SatemUIEffects,
  SatemUIFacade,
  SatemUIService
} from "./+state";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { environment } from "src/environments/environment";
import { STEPPER_GLOBAL_OPTIONS } from "@angular/cdk/stepper";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  BrowserAnimationsModule,
  NoopAnimationsModule
} from "@angular/platform-browser/animations";
import { TranslateModule } from "@ngx-translate/core";
import { CustomMaterialModule } from "./modules";
import { UserInfoComponent } from "./components/money/common/user-info/user-info.component";
import { MoneyRequestComponent, MoneyDetailComponent, MoneyApproveComponent } from './components/money/steps';
import { ParentComponent, ChildOneComponent, ChildTwoComponent, DasboardComponent } from './components/parent-child-examples/parent-to-child';
import { CustomerInfoComponent, ContactInfoComponent, AddressInfoComponent } from './components/parent-child-examples/parent-to-child/examples';
import { MainComponent } from './components/parent-child-examples/parent-to-child/examples/main/main.component';

export const PROVIDERS = [
  ApiService,
  {
    provide: SatemUIFacade,
    useClass: SatemUIFacade
  },
  {
    provide: SatemUIService,
    useClass: SatemUIService
  },
  {
    provide: "environment.apiURL",
    useValue: environment.apiURL
  },
  {
    provide: STEPPER_GLOBAL_OPTIONS,
    useValue: { showError: true }
  }
];

@NgModule({
  declarations: [
    MoneyTransferDashboardComponent,
    MoneyRequestComponent,
    MoneyDetailComponent,
    MoneyApproveComponent,
    UserInfoComponent,
    ParentComponent,
    ChildOneComponent,
    ChildTwoComponent,
    CustomerInfoComponent,
    ContactInfoComponent,
    AddressInfoComponent,
    DasboardComponent,
    MainComponent
  ],
  imports: [
    HttpClientModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CustomMaterialModule,
    TranslateModule.forRoot({}),
    StoreModule.forRoot({}),
    StoreModule.forFeature("satemUIState", satemUIReducer),
    EffectsModule.forRoot([SatemUIEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [PROVIDERS, MoneyTransferService],
  exports: [MoneyTransferDashboardComponent,DasboardComponent],
  bootstrap: []
})
export class SatemUiModule {}
