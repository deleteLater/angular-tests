import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppMaterialModule} from './modules/app-material/app-material.module';
import {TypographyComponent} from './components/typography/typography.component';
import {ButtonComponent} from './components/button/button.component';
import {IconComponent} from './components/icon/icon.component';
import {BadgeComponent} from './components/badge/badge.component';
import {ProgressControlComponent} from './components/progress-control/progress-control.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {SidenavComponent} from './components/sidenav/sidenav.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DrawerComponent } from './components/drawer/drawer.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { GridlistComponent } from './components/gridlist/gridlist.component';
import { ExpansionComponent } from './components/expansion/expansion.component';
import { CardComponent } from './components/card/card.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { InputComponent } from './components/input/input.component';
import { SelectComponent } from './components/select/select.component';
import { CheckboxAndRadioComponent } from './components/checkbox-and-radio/checkbox-and-radio.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import {CustomSnackBarComponent, SnackbarComponent} from './components/snackbar/snackbar.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { ExampleDialogComponent } from './components/example-dialog/example-dialog.component';
import { DataTableComponent } from './components/data-table/data-table.component';

@NgModule({
  declarations: [
    AppComponent,
    TypographyComponent,
    ButtonComponent,
    IconComponent,
    BadgeComponent,
    ProgressControlComponent,
    NavbarComponent,
    SidenavComponent,
    DrawerComponent,
    MenuComponent,
    HomeComponent,
    ListComponent,
    GridlistComponent,
    ExpansionComponent,
    CardComponent,
    TabsComponent,
    StepperComponent,
    InputComponent,
    SelectComponent,
    CheckboxAndRadioComponent,
    DatePickerComponent,
    TooltipComponent,
    SnackbarComponent,
    CustomSnackBarComponent,
    DialogComponent,
    ExampleDialogComponent,
    DataTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
