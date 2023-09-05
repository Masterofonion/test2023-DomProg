import { Directive, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[open]',
  standalone: true,
})
export class OpenDialogDirective {
  @Output() open = new EventEmitter();
  @HostListener('click') onClick() {
    this.open.emit();
  }
  constructor() {}
}
