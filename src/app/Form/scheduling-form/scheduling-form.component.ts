import { Component, OnInit } from '@angular/core';
import {DataJsonService} from '../../services/data-json.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-scheduling-form',
  templateUrl: './scheduling-form.component.html',
  styleUrls: ['./scheduling-form.component.css']
})
export class SchedulingFormComponent implements OnInit {
  data: any[] = [];
  errorMessage: string = '';
  multistepForm: FormGroup;
  currentStep = 0; 

  constructor(private dataJson: DataJsonService, private fb: FormBuilder) {
    this.multistepForm = this.fb.group({
      stepOneData: this.fb.group({
        checkbox: [false],
        inputField: ['', Validators.required],
        textArea: ['', Validators.required]
      }),
      stepTwoData: this.fb.group({
        time: ['', Validators.required],
        amPm: ['AM', Validators.required],
        date: ['', Validators.required],
        frequency: ['weekly', Validators.required]
      }),
      stepThreeData: this.fb.group({
        finalField: ['', Validators.required],
        comments: ['']
      })
    });
  }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.dataJson.getData().subscribe(
      (response) => {
        this.data = response;
        console.log(this.data);
      },
      (error) => {
        console.error("Error Fetching data", error);
        this.errorMessage = "Failed to load data. Please try again later.";
      }
    );
  }

  // Navigation methods
  goToNextStep(): void {
    if (this.currentStep < 2 && this.getStepForm(this.currentStep).valid) {
      this.currentStep++;
    } else {
      console.error("Current step form is invalid");
    }
  }

  goToPreviousStep(): void {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }

  getStepForm(step: number): FormGroup {
    switch (step) {
      case 0:
        return this.multistepForm.get('stepOneData') as FormGroup;
      case 1:
        return this.multistepForm.get('stepTwoData') as FormGroup;
      case 2:
        return this.multistepForm.get('stepThreeData') as FormGroup;
      default:
        return this.multistepForm;
    }
  }

  onSubmit(): void {
    if (this.multistepForm.valid) {
      console.log("Form Submitted", this.multistepForm.value);
    } else {
      console.error("Form is invalid");
    }
  }
}