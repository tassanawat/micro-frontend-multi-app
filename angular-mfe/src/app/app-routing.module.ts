import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

// const routes: Routes = [
//   { path: '', component: AppComponent, pathMatch: 'full'}
// ];

const routes: Routes = [
  { path: '', component: AppComponent, pathMatch: 'full'},
  {
    path: 'profile',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4203/remoteEntry.js',
        exposedModule: './profileMfe'
      })
      .then(m => {
        console.log(m);
        return m.AppModule;
      })
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
