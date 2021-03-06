import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {AgGridModule} from "ag-grid-angular";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyGridApplicationComponent } from './my-grid-application/my-grid-application.component';
import { RedComponentComponent } from './red-component/red-component.component';
import { UiModule } from './ui/ui.module';
import { ModelComponent } from './directives/model.component';
import { ModalService } from './services/model.service';
import { GridCellEditorComponent } from './grid-cell-editor/grid-cell-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    MyGridApplicationComponent,
    RedComponentComponent,
    ModelComponent,
    GridCellEditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
     AgGridModule.withComponents(
      [RedComponentComponent, GridCellEditorComponent]
     ),
    AppRoutingModule,
    UiModule
  ],
  providers: [ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
