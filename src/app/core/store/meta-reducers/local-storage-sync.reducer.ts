import { ActionReducer, MetaReducer } from '@ngrx/store';
import { LocalStorageService } from '../../services/local-storage.service';

export function localStorageSyncReducer(localStorageService: LocalStorageService): MetaReducer<any, any> {
  return (reducer: ActionReducer<any, any>): ActionReducer<any, any> => {
    return (state, action) => {
      const newState = reducer(state, action);
      localStorageService.setItem('state', newState);
      return localStorageService.getItem('state') || newState;
    };
  };
}
