import { Component, inject } from '@angular/core';

import { PassiveIncomeService } from './passive-income/passive-income.service';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [],
  providers: [PassiveIncomeService],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {
  money = 0;
  passiveIncomeService = inject(PassiveIncomeService);
  
  ngOnInit() {
    this.passiveIncomeService.getBaseIncome().subscribe(income => this.money += income)
  }

  incrementPassiveIncome() {
    this.passiveIncomeService.baseIncome++;
  }

  decrementPassiveIncome() {
    this.passiveIncomeService.baseIncome--;
  }
}
