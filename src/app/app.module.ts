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
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { BackendService } from './component/calc/calcServices/backendServices/backend.service';
import { CalculationService } from './component/calc/calcServices/calculation-service.service';

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
    AppRoutingModule,HttpClientModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatCardModule,
    MatButtonToggleModule,
    FormsModule,
  ],
  providers: [CalculationService,BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
