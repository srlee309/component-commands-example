import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ExampleFormUiModule } from '@component-commands-example/example/form/ui';
import { SharedInputUiModule } from '@component-commands-example/shared/input';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ExampleFormUiModule, SharedInputUiModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
