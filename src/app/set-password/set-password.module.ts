import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SetPasswordPageRoutingModule } from './set-password-routing.module';

import { SetPasswordPage } from './set-password.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    SetPasswordPageRoutingModule
  ],
  declarations: [SetPasswordPage]
})
export class SetPasswordPageModule {}
