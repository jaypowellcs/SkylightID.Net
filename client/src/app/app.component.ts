import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
//Shared Components 
import { HeaderComponent } from './Shared/header/header.component';
import { FooterComponent } from './Shared/footer/footer.component';
//Pages
import { HomeComponent } from './Pages/home/home.component';
import { IdentifyComponent } from './Pages/identify/identify.component';
import { SkylightCalComponent } from './Pages/skylight.cal/skylight.cal.component';
import { ContactComponent } from './Pages/contact/contact.component';
//Forms
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    HttpClientModule,
    RouterOutlet, 
    RouterLink,
    RouterLinkActive,
    FormsModule,
    ReactiveFormsModule,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    IdentifyComponent,
    SkylightCalComponent,
    ContactComponent,
  ],
    
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';
}
