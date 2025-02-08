import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FloatingConfiguratorComponent
} from "../../layout/component/floatingConfigurator/floatingConfigurator.component";
import {Button} from "primeng/button";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-not-found',
  imports: [CommonModule, FloatingConfiguratorComponent, Button, RouterLink],
  templateUrl: './notFound.component.html',
  styleUrl: './notFound.component.css',
})
export class NotFoundComponent {}
