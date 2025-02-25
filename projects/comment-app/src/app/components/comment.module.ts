import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { AuthRoutingModule } from './comment-routing.module';
import {  RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarModule } from 'primeng/sidebar';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card'; // Import CardModule
import { CommentComponent } from './comment/comment.component';
import { MessageService } from 'primeng/api';
@NgModule({
  declarations: [],
  imports: [
    CommentComponent,
    CommonModule,
    FormsModule,
    RouterModule,
    AuthRoutingModule,
    BrowserAnimationsModule,
    SidebarModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    DropdownModule,
    CardModule// Ensure CardModule is imported

       ],
     providers: [MessageService],// add it here
     schemas: [CUSTOM_ELEMENTS_SCHEMA],


})
export class AuthModule {}