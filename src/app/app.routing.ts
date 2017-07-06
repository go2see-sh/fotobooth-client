import { NgModule } from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';

import { StartupComponent } from './startup/startup.component';
import { LiveviewComponent } from './liveview/liveview.component';
import { EditorComponent } from './editor/editor.component';
import { SummaryComponent } from './summary/summary.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/startup',
        pathMatch: 'full'
      },
      {
        path: 'startup',
        component: StartupComponent
      },
      {
        path: 'liveview',
        component: LiveviewComponent
      },
      {
        path: 'editor',
        component: EditorComponent
      },
      {
        path: 'summary',
        component: SummaryComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }