import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule, MetaReducer } from '@ngrx/store';
import { TodoModule } from './todo/todo.module';
import { LocalStorageService } from './core/services/local-storage.service';
import { localStorageSyncReducer } from './core/store/meta-reducers/local-storage-sync.reducer';

export function localStorageMetaReducerFactory(localStorageService: LocalStorageService): MetaReducer<any, any>[] {
  return [localStorageSyncReducer(localStorageService)];
}

const localStorageService = new LocalStorageService();

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}, {
      initialState: localStorageService.getItem('state') || {},
      metaReducers: localStorageMetaReducerFactory(new LocalStorageService())
    }),
    TodoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
