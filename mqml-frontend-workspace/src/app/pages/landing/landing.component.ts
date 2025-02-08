import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TopbarWidgetComponent} from "./components/topbar-widget/topbar-widget.component";

@Component({
  selector: 'app-landing',
  imports: [CommonModule, TopbarWidgetComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
})
export class LandingComponent {}
