import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config'; // 👈 Import your appConfig
import { AppComponent } from './app/app';

// 👇 This line bootstraps the app with your component and config
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));