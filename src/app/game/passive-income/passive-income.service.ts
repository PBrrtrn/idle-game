import { Injectable } from '@angular/core';
import { interval, map } from 'rxjs';

@Injectable()
export class PassiveIncomeService {
  baseIncome = 1;
  baseTimeMs = 1000;

  getBaseIncome() {
    return interval(this.baseTimeMs).pipe(map(_ => this.baseIncome));
  }

  incrementPassiveIncome() {
    this.baseIncome++;
  }

  decrementPassiveIncome() {
    this.baseIncome--;
    this.baseIncome = Math.max(0, this.baseIncome);
  }
}
