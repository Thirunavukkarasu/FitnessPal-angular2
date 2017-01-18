import { Routes, RouterModule, CanActivate } from '@angular/router';
import { AuthGuard } from './shared/auth-guard.service';

import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ResultsComponent } from './results/results.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [{
    path       : '',
    redirectTo : '/home',
    pathMatch  : 'full'
  },{
    path       : 'home',
    component  : HomeComponent
  },{
    path       : 'events',
    component  : EventsComponent    
  },{
    path       : 'gallery',
    component  : GalleryComponent  
  },{
    path       : 'results',
    component  : ResultsComponent  
  },{
    path       : 'about',
    component  : AboutComponent  
  }];

export const routing = RouterModule.forRoot(appRoutes);

export const routedComponents = [HomeComponent, EventsComponent,GalleryComponent,ResultsComponent,AboutComponent];
