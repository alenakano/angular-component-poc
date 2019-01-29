import { NgModule } from '@angular/core';
import { FooLibComponent } from './foo-lib.component';
import { FooTesteComponent } from './foo-teste.component';

@NgModule({
  declarations: [FooLibComponent, FooTesteComponent],
  imports: [
  ],
  exports: [FooLibComponent, FooTesteComponent]
})
export class FooLibModule { }
