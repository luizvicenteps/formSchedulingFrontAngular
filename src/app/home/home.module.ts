import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { HomeRoutingModule } from './home-routing.module';
import { FormCustomerComponent } from './form-customer/form-customer.component';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [FormCustomerComponent, HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
  ],
  entryComponents: [
    FormCustomerComponent,
  ],
})
export class HomeModule { }
