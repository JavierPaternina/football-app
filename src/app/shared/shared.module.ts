import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { IonicModule } from '@ionic/angular';

const COMPONENTS = [FooterComponent, HeaderComponent, MenuComponent];

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class SharedModule {}
