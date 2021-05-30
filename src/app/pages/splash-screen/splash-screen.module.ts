import { DetailsModule } from './../details/details.module';
import { ContainerModule } from './../../shared/components/container/container.module';
import { SplashScreenRoutingModule } from './splash-screen-routing.module';
import { OnHoverModule } from './../../shared/directives/on-hover/on-hover.module';
import { MatRippleModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { SplashScreenComponent } from './splash-screen.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [SplashScreenComponent],
  imports: [
    CommonModule, SplashScreenRoutingModule, MatCardModule, MatRippleModule, OnHoverModule, ContainerModule
  ]
})
export class SplashScreenModule { }
