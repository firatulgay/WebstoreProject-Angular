import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { ProductFilterPipe } from './product/product-filter.pipe';
import { AlertifyService } from './services/alertify.service';
import { HttpClientModule } from '@angular/common/http';  // Backend ile http iletişimi için bu modulü import ediyoruz.  


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CategoryComponent,
    ProductComponent,
    ProductFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AlertifyService], // global bir servis yaomak için buraya ekledik.
  bootstrap: [AppComponent]
})
export class AppModule { }
