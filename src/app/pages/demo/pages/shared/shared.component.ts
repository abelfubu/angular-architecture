import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss'],
})
export class SharedComponent implements OnInit {
  form: FormGroup
  isInline = false

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      input: [
        null,
        { updateOn: 'blur', validators: [Validators.required, Validators.minLength(3)] },
      ],
    })
  }

  ngOnInit(): void {}

  onPatchValue(): void {
    this.form.patchValue({ input: 'test' })
  }

  onToggleInline(): void {
    this.isInline = !this.isInline
  }

  onSubmit(): void {
    console.log(this.form.value)
  }
}
