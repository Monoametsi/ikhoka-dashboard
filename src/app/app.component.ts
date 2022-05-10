import { Component } from '@angular/core';
import { StatsService } from './services/stats.service';
import { ReportResult } from 'src/app/models/reportResult';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(private statsServive: StatsService) { }
  public moverMentions!:number;
  public shakeMentions!:number;
  public spams!:number;
  public questions!:number;
  public lessThan15!:number;

  averageCalculator(metric:number, totalDays: number){
    return metric/totalDays;
  }

  moverTotal(initialVal:number, currentVal: ReportResult){
    return initialVal + currentVal.amountOfMoverMentions;
  }
  shakeTotal(initialVal:number, currentVal: ReportResult){
    return initialVal + currentVal.amountOfShakerMentions;
  }
  spamTotal(initialVal:number, currentVal: ReportResult){
    return initialVal + currentVal.amountOfSpams;
  }
  questionTotal(initialVal:number, currentVal: ReportResult){
    return initialVal + currentVal.amountOfQuestions;
  }
  lessThan15Total(initialVal:number, currentVal: ReportResult){
    return initialVal + currentVal.lessThan15;
  }

  ngOnInit(): void {
    this.statsServive.getTabledata()
    .subscribe(data => {
      const totalDays = data.length;
      this.moverMentions = data.reduce(this.moverTotal, 0);
      this.moverMentions = Math.round(this.averageCalculator(this.moverMentions, totalDays) * 100) / 100;
      
      this.shakeMentions = data.reduce(this.shakeTotal, 0);
      this.shakeMentions = Math.round(this.averageCalculator(this.shakeMentions, totalDays) * 100) / 100;

      this.spams = data.reduce(this.spamTotal, 0);
      this.spams = Math.round(this.averageCalculator(this.spams, totalDays) * 100) / 100;

      this.questions = data.reduce(this.questionTotal, 0);
      this.questions = Math.round(this.averageCalculator(this.questions, totalDays) * 100) / 100;

      this.lessThan15 = data.reduce(this.lessThan15Total, 0);
      this.lessThan15 = Math.round(this.averageCalculator(this.lessThan15, totalDays) * 100) / 100;

    }, err => {
      console.log(err);
      
    })
  }
}
