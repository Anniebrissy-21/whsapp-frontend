import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';

const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
  { path: 'chat', component: ChatComponent },
  // additional routes...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
