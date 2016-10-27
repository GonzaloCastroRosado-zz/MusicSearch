import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchComponent }   from './search.component';
import { ListDirectoryComponent }      from './list-directory.component.ts';


const routes: Routes = [
  { path: '', redirectTo: '/ListDirectory', pathMatch: 'full' },
  { path: 'ListDirectory', component: ListDirectoryComponent },
  { path: 'Search',  component: SearchComponent}


];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
