import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenuItem} from "primeng/api";
import {LayoutService} from "../../service/layout.service";
import {RouterLink} from "@angular/router";
import {StyleClass} from "primeng/styleclass";
import {ConfiguratorComponent} from "../configurator/configurator.component";

@Component({
  selector: 'app-topbar',
  imports: [CommonModule, RouterLink, StyleClass, ConfiguratorComponent],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css',
})
export class TopbarComponent {

  items!: MenuItem[];

  constructor(public layoutService: LayoutService) {}

  toggleDarkMode() {
    this.layoutService.layoutConfig.update((state) => ({ ...state, darkTheme: !state.darkTheme }));
  }

}
