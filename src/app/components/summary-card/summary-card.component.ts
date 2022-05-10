import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-summary-card',
  templateUrl: './summary-card.component.html',
  styleUrls: ['./summary-card.component.scss']
})
export class SummaryCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() title!: string;
  @Input() averageAmount!: number;

}
