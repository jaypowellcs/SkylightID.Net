import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { IdentifyComponent } from './Pages/identify/identify.component';
import { SkylightCalComponent } from './Pages/skylight.cal/skylight.cal.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { PageNotFoundComponent } from './Pages/page-not-found/page-not-found.component';
import { IdentifycurbComponent } from './Components/identifycurb/identifycurb.component';
import { IdentifyselfComponent } from './Components/identifyself/identifyself.component';
import { IdentifydeckComponent } from './Components/identifydeck/identifydeck.component';
import { CurbcalComponent } from './Components/curbcal/curbcal.component';
import { DeckcalComponent } from './Components/deckcal/deckcal.component';
import { SelfcalComponent } from './Components/selfcal/selfcal.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full' },
    {path:'home', component: HomeComponent},
    {path:'identify', component: IdentifyComponent},
    {path:"idcurbmount", component:IdentifycurbComponent},
    {path:"iddeck", component:IdentifydeckComponent},
    {path:"idself", component:IdentifyselfComponent},
    {path:"curbcal", component:CurbcalComponent},
    {path:"deckcal", component:DeckcalComponent},
    {path:"selfcal", component:SelfcalComponent},
    {path:'skylightcal', component: SkylightCalComponent},
    {path:'contact', component:ContactComponent},
    { path: '',   redirectTo: '/first-component', pathMatch: 'full' }, // redirect to `first-component`
    { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];
