import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HistoryComponent } from './history/history.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: 'search', component: SearchComponent },
  { path: 'history', component: HistoryComponent },
  { path: '**', component: SearchComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})

export class AppRoutingModule {
}
