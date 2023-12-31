import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {
  GoogleSigninButtonModule,
  SocialLoginModule,
  GoogleLoginProvider,
  SocialAuthServiceConfig,
} from '@abacritt/angularx-social-login';
import { CharacterComponent } from './character/character.component';
import { DailyQuestsComponent } from './daily-quests/daily-quests.component';
import { MatIconModule } from '@angular/material/icon';

import { MatMenuModule } from '@angular/material/menu';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';

import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NotFoundComponent,
    CharacterComponent,
    DailyQuestsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    SocialLoginModule,
    GoogleSigninButtonModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatMenuModule,
    CanvasJSAngularChartsModule,
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: '#78C000',
      innerStrokeColor: '#C7E596',
      animationDuration: 300,
    }),
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '211442586950-4chi1oon8v2l16es525cs3nkf7q073hp.apps.googleusercontent.com',
              {
                oneTapEnabled: false,
              }
            ),
          },
        ],
        onError: (err) => {
          console.error(err);
        },
      } as SocialAuthServiceConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
