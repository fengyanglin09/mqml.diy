import { Component } from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {StyleClass} from "primeng/styleclass";
import {ButtonDirective} from "primeng/button";
import {Ripple} from "primeng/ripple";

@Component({
  selector: 'app-topbar-widget',
  imports: [
    StyleClass,
    ButtonDirective,
    RouterLink,
    Ripple
  ],
  templateUrl: './topbar-widget.component.html',
  styleUrl: './topbar-widget.component.css'
})
export class TopbarWidgetComponent {
  constructor(public router: Router) {}
}
