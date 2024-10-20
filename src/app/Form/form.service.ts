import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  private activeStepSubject = new BehaviorSubject<number>(1);
  activeStep$ = this.activeStepSubject.asObservable();


  multiStepForm: FormGroup = this.fb.group({
    scheduleStepOne: this.fb.group({
      fleetReport: [false],
      vehicleReport: [false],
      tripReport: [false],
      scoreCardReport: [false],
      email: ['', [Validators.required, Validators.email]],
    }),
    scheduleStepTwo: this.fb.group({
      plan: ['arcade', [Validators.required]],
      duration: ['monthly', [Validators.required]],
      planCost: [9],
      totalCost: [9]
    }),
    scheduleStepThree: this.fb.group({
      service: [false],
      serviceCost: [0],
      storage: [false],
      storageCost: [0],
      customization: [false],
      customizationCost: [0],
    })
  })

  get stepForm(): FormGroup {
    return this.multiStepForm;
  }

  constructor(private fb: FormBuilder) { }

  goToNextStep(number: number) {
    this.activeStepSubject.next(number + 1);
  }

  goBackToPreviousStep(number: number) {
    this.activeStepSubject.next(number - 1);
  }
  submit() {
    this.goToNextStep(4);
    setTimeout(() => {
      this.activeStepSubject.next(1);
    }, 8000);

  }


}