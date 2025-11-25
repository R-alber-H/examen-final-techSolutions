import { Component } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { RouterModule } from "@angular/router";
import { Footer } from "../../components/footer/footer";

@Component({
  selector: 'app-public-layout',
  standalone: true,
  imports: [Navbar, RouterModule, Footer],
  templateUrl: './public-layout.html',
  styleUrl: './public-layout.css',
})
export class PublicLayout {

}
