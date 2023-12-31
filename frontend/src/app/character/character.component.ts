// character.component.ts
import { Component } from '@angular/core';
import { DailyQuestsComponent } from '../daily-quests/daily-quests.component';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent {
  points = 90;

  character = {
    name: 'Lily',
    level: 5,
    health: 80,
    progress: 72,
    points: this.points | 0,
  };

  totalSteps = 7214;

  calcDashOffset(): number {
    return this.character.progress;
  }
}
