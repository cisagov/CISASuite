import { Component, OnInit } from '@angular/core';
import { Color } from "ng2-charts";
import { Chart } from "chart.js";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  chartData = [
    {
      data: [90, 10],
      label: "Account A",
    },
  ];
  chartLabels = [" 90 %"];
  colors: Color[] = [
    {
      backgroundColor: ["#999999", "#C0C2C4"],
    },
  ];
  chartOptions = {
    responsive: true,
  };
  constructor() { }

  ngOnInit(): void {
  }

}
