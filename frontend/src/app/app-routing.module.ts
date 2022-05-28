import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AudioComponent } from './cards/audio/audio.component';
import { ImageComponent } from './cards/image/image.component';
import { TranscribeChoiceComponent } from './cards/transcribe-choice/transcribe-choice.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: TranscribeChoiceComponent },
      { path: 'audio', component: AudioComponent },
      { path: 'image', component: ImageComponent}
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
