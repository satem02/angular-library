import { NgModule } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SatemCoreModule } from "projects/satem-core/src/public-api";
import { SatemUiModule } from "projects/satem-ui/src/public-api";
import { DashboardComponent } from "./components";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AgendaModule } from "projects/agenda/src/lib/agenda.module";

export function translateHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
  declarations: [AppComponent, DashboardComponent],
  imports: [
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateHttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    SatemCoreModule,
    AgendaModule,
    SatemUiModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
