import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { IdentifyComponent } from './Pages/identify/identify.component';
import { SkylightCalComponent } from './Pages/skylight.cal/skylight.cal.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { PageNotFoundComponent } from './Pages/page-not-found/page-not-found.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full' },
    {path:'home', component: HomeComponent},
    {path:'identify', component: IdentifyComponent},
    {path:'skylightcal', component: SkylightCalComponent},
    {path:'contact', component:ContactComponent},
    { path: '',   redirectTo: '/first-component', pathMatch: 'full' }, // redirect to `first-component`
    { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];
