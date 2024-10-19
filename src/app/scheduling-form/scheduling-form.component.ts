import { Component, OnInit } from '@angular/core';
import {DataJsonService} from '../services/data-json.service'

@Component({
  selector: 'app-scheduling-form',
  templateUrl: './scheduling-form.component.html',
  styleUrls: ['./scheduling-form.component.css']
})
export class SchedulingFormComponent implements OnInit {

  data: any[] = []
  errorMessage: string = ''

  constructor(private dataJson: DataJsonService){}

  ngOnInit(): void {
    this.fetchData()
  }

  fetchData(): void {
    this.dataJson.getData().subscribe(
      (resposne) => {
        this.data = resposne
        console.log(this.data);
      },
      (error) => {
        console.error("Error Fetching data", error);
        this.errorMessage = "Failed to load Data.Please try again later"
      }
    )
  }

}
