import {Component, ElementRef} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenuComponent} from "../menu/menu.component";

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, MenuComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  constructor(public el: ElementRef) {}
}
