import { Component } from '@angular/core';
import { Sidebar } from './sidebar/sidebar';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout',
    standalone: true,
  imports: [Sidebar,RouterModule],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {

}
