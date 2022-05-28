import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AudioComponent } from './cards/audio/audio.component';
import { ImageComponent } from './cards/image/image.component';
import { TranscribeChoiceComponent } from './cards/transcribe-choice/transcribe-choice.component';
import { HomeComponent } from './pages/home/home.component';
<<<<<<< HEAD
import { ResponseComponent } from './response/response.component';
=======
import { NotFoundComponent } from './pages/not-found/not-found.component';
>>>>>>> ce989cffee9a0e2688cdf27055e3ca8a767a4588

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
