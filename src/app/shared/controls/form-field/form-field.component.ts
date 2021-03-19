import { Component, HostBinding, Input, OnInit } from '@angular/core'
import { AbstractControl } from '@angular/forms'

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
})
export class FormFieldComponent implements OnInit {
  @Input() label!: string
  @Input() required!: boolean
  @Input() isInline = true
  @Input() control!: AbstractControl

  @HostBinding('class._error')
  get hasError(): boolean {
    return this.control && this.control.invalid && this.control.touched
  }

  @HostBinding('class._inline')
  get isLabelInline(): boolean {
    return this.isInline
  }

  constructor() {}

  ngOnInit(): void {}

  get errorKey(): string {
    return (this.control && this.control.errors && Object.keys(this.control.errors)[0]) || ''
  }
}
