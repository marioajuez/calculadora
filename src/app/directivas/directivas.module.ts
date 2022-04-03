import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutocompletePositionDirective} from './auto-complete.directive'



export class DirectivesModule {}
@NgModule({
  declarations: [
    AutocompletePositionDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AutocompletePositionDirective
  ],
  schemas: [],
})
export class DirectivasModule { }
