import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AudioComponent } from './cards/audio/audio.component';
import { ImageComponent } from './cards/image/image.component';
import { TranscribeChoiceComponent } from './cards/transcribe-choice/transcribe-choice.component';
import { HomeComponent } from './pages/home/home.component';
import { ResponseComponent } from './response/response.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: TranscribeChoiceComponent },
      { path: 'audio', component: AudioComponent },
      { path: 'image', component: ImageComponent},
      { path: 'response', component: ResponseComponent}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
