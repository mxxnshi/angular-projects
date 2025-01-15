import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon'
import { LogoComponent } from '../logo/logo.component';
import { HairstyleComponent } from '../hairstyle/hairstyle.component';
import { AboutComponent } from '../about/about.component';
import { FashionComponent } from '../fashion/fashion.component';
import { LogoutComponent } from '../logout/logout.component';
import {MatButton} from '@angular/material/button'
import {MatMenu,MatMenuItem,MatMenuTrigger} from '@angular/material/menu'


@Component({
  selector: 'app-header',
  imports: [
    MatToolbarModule,
    MatGridListModule,
    MatIconModule,
    MatGridListModule,
    MatButton,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger,
    HeaderComponent,
    LogoComponent,
    HairstyleComponent,
    FashionComponent,
    AboutComponent,
    LogoutComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
