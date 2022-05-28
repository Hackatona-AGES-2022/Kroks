import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { TranscribeChoiceComponent } from './cards/transcribe-choice/transcribe-choice.component';
import { AudioComponent } from './cards/audio/audio.component';

import { ImageComponent } from './cards/image/image.component';
import { ButtonComponent } from './components/button/button.component';
import { ResponseComponent } from './response/response.component';
import { WebcamModule } from 'ngx-webcam';

import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ButtonComponent,
    TranscribeChoiceComponent,
    AudioComponent,
    NotFoundComponent,
    ButtonComponent,
    ImageComponent,
    ImageComponent,
    ResponseComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, WebcamModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
