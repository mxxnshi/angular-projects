import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { LogoComponent } from '../logo/logo.component';
import { HairstyleComponent } from '../hairstyle/hairstyle.component';
import { FashionComponent } from '../fashion/fashion.component';
import { AboutComponent } from '../about/about.component';
import { LogoutComponent } from '../logout/logout.component'
import { HeaderComponent } from '../header/header.component';
import { MatIconModule } from '@angular/material/icon'

@Component({
  selector: 'app-dashboard',
  imports: [
    MatGridListModule,
    HeaderComponent,
    LogoComponent,
    HairstyleComponent,
    FashionComponent,
    AboutComponent,
    LogoutComponent,
    MatIconModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

export class DashboardComponent {
}
