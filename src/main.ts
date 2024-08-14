import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from "@angular/common/http";

// Correctly passing appConfig and adding providers
bootstrapApplication(AppComponent, {
  ...appConfig, // Spread the properties of appConfig
  providers: [
    provideHttpClient(), // Add HttpClient provider
    ...(appConfig.providers || []) // Merge with existing providers if any
  ]
})
  .catch((err) => console.error(err));
