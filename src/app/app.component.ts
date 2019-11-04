import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'learn-angular';
  
  constructor(private translateService: TranslateService) {
    translateService.addLangs(['tr']);
    translateService.setDefaultLang('tr');
  }
}

