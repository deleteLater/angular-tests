import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TypographyComponent} from './components/typography/typography.component';
import {ButtonComponent} from './components/button/button.component';
import {IconComponent} from './components/icon/icon.component';
import {BadgeComponent} from './components/badge/badge.component';
import {ProgressControlComponent} from './components/progress-control/progress-control.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {SidenavComponent} from './components/sidenav/sidenav.component';
import {DrawerComponent} from './components/drawer/drawer.component';
import {HomeComponent} from './components/home/home.component';
import {MenuComponent} from './components/menu/menu.component';
import {ListComponent} from './components/list/list.component';
import {GridlistComponent} from './components/gridlist/gridlist.component';
import {ExpansionComponent} from './components/expansion/expansion.component';
import {CardComponent} from './components/card/card.component';
import {TabsComponent} from './components/tabs/tabs.component';
import {StepperComponent} from './components/stepper/stepper.component';
import {InputComponent} from './components/input/input.component';
import {SelectComponent} from './components/select/select.component';
import {CheckboxAndRadioComponent} from './components/checkbox-and-radio/checkbox-and-radio.component';
import {DatePickerComponent} from './components/date-picker/date-picker.component';
import {TooltipComponent} from './components/tooltip/tooltip.component';
import {SnackbarComponent} from "./components/snackbar/snackbar.component";
import {DialogComponent} from "./components/dialog/dialog.component";
import {DataTableComponent} from "./components/data-table/data-table.component";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'typography', component: TypographyComponent},
  {path: 'button', component: ButtonComponent},
  {path: 'icon', component: IconComponent},
  {path: 'badge', component: BadgeComponent},
  {path: 'progress-control', component: ProgressControlComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'sidenav', component: SidenavComponent},
  {path: 'drawer', component: DrawerComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'list', component: ListComponent},
  {path: 'grid-list', component: GridlistComponent},
  {path: 'expansion', component: ExpansionComponent},
  {path: 'card', component: CardComponent},
  {path: 'tabs', component: TabsComponent},
  {path: 'stepper', component: StepperComponent},
  {path: 'input', component: InputComponent},
  {path: 'select', component: SelectComponent},
  {path: 'checkbox-and-radio', component: CheckboxAndRadioComponent},
  {path: 'date-picker', component: DatePickerComponent},
  {path: 'tooltip', component: TooltipComponent},
  {path: 'snackbar', component: SnackbarComponent},
  {path: 'dialog', component: DialogComponent},
  {path: 'data-table', component: DataTableComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
