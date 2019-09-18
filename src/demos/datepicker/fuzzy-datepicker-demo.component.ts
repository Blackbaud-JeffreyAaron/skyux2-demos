import {
  Component,
  OnInit
} from '@angular/core';

import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'sky-fuzzy-datepicker-demo',
  templateUrl: './fuzzy-datepicker-demo.component.html'
})
export class SkyFuzzyDatepickerDemoComponent implements OnInit {
  public cannotBeFuture: boolean;
  public dateFormat: any = 'MM/DD/YYYY';
  public disabled = false;
  public minFuzzyDate: any;
  public maxFuzzyDate: any;
  public yearRequired: boolean;
  public noValidate = false;
  public startingDay: number;

  public reactiveForm: FormGroup;
  public selectedDate: any = { month: 4, day: 4, year: 2017 };

  constructor(
    private formBuilder: FormBuilder
  ) { }

  public ngOnInit(): void {
    this.reactiveForm = this.formBuilder.group({
      selectedDate: new FormControl({ month: 4, day: 4, year: 2017 }, Validators.required)
    });
  }

  public clearSelectedDates(): void {
    this.selectedDate = undefined;
    this.reactiveDate.setValue(undefined);
  }

  public setMinMaxDates(): void {
    this.minFuzzyDate = { day: 1, month: 1, year: 2018 };
    this.maxFuzzyDate = { day: 1, month: 1, year: 2020 };
  }

  public toggleYearRequired(): void {
    this.yearRequired = !this.yearRequired;
    console.log('year required: ' + this.yearRequired);
  }

  public toggleCannotBeFuture(): void {
    this.cannotBeFuture = !this.cannotBeFuture;
    console.log('cannot be future: ' + this.cannotBeFuture);
  }

  public toggleDisabled(): void {
    if (this.reactiveDate.disabled) {
      this.reactiveDate.enable();
    } else {
      this.reactiveDate.disable();
    }

    this.disabled = !this.disabled;
  }

  public get reactiveDate(): AbstractControl {
    return this.reactiveForm.get('selectedDate');
  }

  public get selectedDateForDisplay(): string {
    return JSON.stringify(this.selectedDate);
  }

  public get reactiveFormSelectedDateForDisplay(): string {
    return JSON.stringify(this.reactiveDate.value);
  }
}
