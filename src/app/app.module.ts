import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FriendComponent } from './friend/friend.component';
import { FriendAddComponent } from './friend/friend-add/friend-add.component';
import { FriendListComponent } from './friend/friend-list/friend-list.component';
import { HoverHighlightDirective } from './hover-highlight.directive';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FindPipe } from './find.pipe';

import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    FriendComponent,
    FriendAddComponent,
    FriendListComponent,
    HoverHighlightDirective,
    ContactUsComponent,
    HeaderComponent,
    HomeComponent,
    PageNotFoundComponent,
    FindPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
