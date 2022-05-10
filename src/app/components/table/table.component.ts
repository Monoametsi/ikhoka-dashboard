import { Component, OnInit } from '@angular/core';
import { StatsService } from 'src/app/services/stats.service';
import { ReportResult } from 'src/app/models/reportResult';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  data: ReportResult[] = [];

  constructor(private statsServive: StatsService) { }

  ngOnInit(): void {
    this.statsServive.getTabledata()
    .subscribe(data => {
      this.data = data
      console.log(this.data)
    }, err => {
      console.log(err);
      
    })
  }

}
