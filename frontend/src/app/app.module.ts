import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FileReaderComponent } from './file-reader/file-reader.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { TranscribeChoiceComponent } from './cards/transcribe-choice/transcribe-choice.component';
import { AudioComponent } from './cards/audio/audio.component';
<<<<<<< HEAD
import { ImageComponent } from './cards/image/image.component';
import { ButtonComponent } from './components/button/button.component';
import { ResponseComponent } from './response/response.component';
import { WebcamModule } from 'ngx-webcam';
=======
import { NotFoundComponent } from './pages/not-found/not-found.component';
>>>>>>> ce989cffee9a0e2688cdf27055e3ca8a767a4588

@NgModule({
  declarations: [
    AppComponent,
    FileReaderComponent,
    HomeComponent,
    HeaderComponent,
    ButtonComponent,
    TranscribeChoiceComponent,
    AudioComponent,
<<<<<<< HEAD
    ImageComponent,
    ResponseComponent,
=======
    NotFoundComponent,
>>>>>>> ce989cffee9a0e2688cdf27055e3ca8a767a4588
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, WebcamModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
