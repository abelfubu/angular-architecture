import { Component, forwardRef, Input, OnInit, Output, EventEmitter } from '@angular/core'
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms'

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => InputComponent), multi: true },
  ],
})
export class InputComponent implements OnInit, ControlValueAccessor {
  @Input() placeholder!: string
  @Output() changeValue = new EventEmitter<string>()
  value!: string
  isDisabled!: boolean

  constructor() {}

  ngOnInit(): void {}

  private propagateChange: any = () => {}
  private propagateTouched: any = () => {}

  writeValue(value: string): void {
    this.value = value
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn
  }

  registerOnTouched(fn: any): void {
    this.propagateTouched = fn
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled
  }

  onKeyUp(event: KeyboardEvent): void {
    const { value } = event.target as HTMLInputElement
    this.value = value
    this.propagateChange(value)
    this.changeValue.emit(value)
  }

  onBlur(): void {
    this.propagateTouched()
  }
}