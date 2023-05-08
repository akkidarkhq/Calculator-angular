import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './component/calc/display/display.component';
import { CalcComponent } from './component/calc/calc.component';
import { FunctionComponent } from './component/calc/buttons/function/function.component';
import { OperationComponent } from './component/calc/buttons/operation/operation.component';
import { NumericComponent } from './component/calc/buttons/numeric/numeric.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';

import { CalcServiceService } from './component/calc/calcServices/calc-service.service';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    DisplayComponent,
    CalcComponent,
    FunctionComponent,
    OperationComponent,
    NumericComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatCardModule,
    FormsModule
  ],
  providers: [CalcServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
