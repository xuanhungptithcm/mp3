import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainRoute } from './mainRoute.routing';
import { HomeComponent } from './main-content/home.component';
import { AuthenticationService } from './Shared/services/authentication.service';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ContentComponent } from './main-content/content/content.component';
import { ListmusicComponent } from './main-content/content/listmusic/listmusic.component';
import { RegisterComponent } from './main-content/content/register/register.component';
import { DashboardComponent } from './main-content/content/dashboard/dashboard.component';
import { ManagerUserComponent } from './main-content/content/manager-user/manager-user.component';
import { PlayAudioComponent } from './main-content/content/listmusic/play-audio/play-audio.component';
import { FileService } from './Shared/services/file.service';
import { MenuComponent } from './main-content/content/menu/menu.component';

// QR code
import { QRCodeModule } from 'angular2-qrcode';
import { AudioService } from './Shared/services/audio.service';
import { FormatNameAudioPipe } from './pipes/format-name-audio.pipe';
import { SearchBehaviorService } from './Shared/services/searchBehavior.service';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// debug in Xampp
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    ContentComponent,
    ListmusicComponent,
    RegisterComponent,
    DashboardComponent,
    ManagerUserComponent,
    PlayAudioComponent,
    FormatNameAudioPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MainRoute,
    ReactiveFormsModule,
    QRCodeModule,
    ToastModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [AuthenticationService, FileService, AudioService, SearchBehaviorService
  ,
  { provide: LocationStrategy, useClass: HashLocationStrategy }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
