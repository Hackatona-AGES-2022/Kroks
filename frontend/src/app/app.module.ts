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

@NgModule({
  declarations: [
    AppComponent,
    FileReaderComponent,
    HomeComponent,
    HeaderComponent,
    TranscribeChoiceComponent,
    AudioComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
