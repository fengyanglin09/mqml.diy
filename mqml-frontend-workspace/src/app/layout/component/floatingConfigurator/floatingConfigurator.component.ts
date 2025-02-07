import {Component, computed, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {LayoutService} from "../../service/layout.service";
import {Button} from "primeng/button";
import {ConfiguratorComponent} from "../configurator/configurator.component";
import {StyleClass} from "primeng/styleclass";

@Component({
  selector: 'app-floating-configurator',
  imports: [CommonModule, Button, ConfiguratorComponent, StyleClass],
  templateUrl: './floatingConfigurator.component.html',
  styleUrl: './floatingConfigurator.component.css',
})
export class FloatingConfiguratorComponent {
  LayoutService = inject(LayoutService);

  isDarkTheme = computed(() => this.LayoutService.layoutConfig().darkTheme);

  toggleDarkMode() {
    this.LayoutService.layoutConfig.update((state) => ({ ...state, darkTheme: !state.darkTheme }));
  }
}
