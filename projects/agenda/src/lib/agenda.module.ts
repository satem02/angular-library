import { NgModule } from "@angular/core";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  BrowserAnimationsModule,
  NoopAnimationsModule
} from "@angular/platform-browser/animations";
import { TranslateModule } from "@ngx-translate/core";
import { CustomMaterialModule } from "./modules";
import { EventListComponent } from "./components/event-list/event-list.component";
import { EventInfoComponent } from "./components/event-info/event-info.component";
import { StoreModule } from "@ngrx/store";
import {
  stateReducer,
  StateEffects,
  StateService,
  StateFacade
} from "./+state";
import { EffectsModule } from "@ngrx/effects";
import { ApiService } from "./services";
import { environment } from "src/environments/environment";

@NgModule({
  declarations: [EventListComponent, EventInfoComponent],
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
    StoreModule.forFeature("StateReducer", stateReducer),
    EffectsModule.forRoot([StateEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [StateService, StateFacade, ApiService],
  exports: [EventListComponent, EventInfoComponent]
})
export class AgendaModule {}
