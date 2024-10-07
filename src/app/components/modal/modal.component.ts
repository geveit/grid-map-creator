import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'modal',
  standalone: true,
  imports: [
    CommonModule
],
  templateUrl: './modal.component.html',
})
export class ModalComponent {
 @Input() isVisible: boolean = false;
 @Input() title!: string;
  

 @Output() closeModal = new EventEmitter<void>();
 @Output() confirm = new EventEmitter<void>();

 onCloseModal() {
   this.closeModal.emit();
 }

  onConfirm() {
    this.confirm.emit();
  }
}