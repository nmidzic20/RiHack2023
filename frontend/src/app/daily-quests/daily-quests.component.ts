import { Component, Input, Renderer2 } from '@angular/core';
import { IDailyQuest } from '../shared/models/IDailyQuest';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-daily-quests',
  templateUrl: './daily-quests.component.html',
  styleUrls: ['./daily-quests.component.scss'],
})
export class DailyQuestsComponent {
  @Input() showDailyQuests: boolean = false;
  @Output() showDailyQuestsChange = new EventEmitter<boolean>();
  dailyQuests: IDailyQuest[] = [
    {
      id: 1,
      title: 'Complete a 30-minute workout',
      description: 'Stay active and healthy!',
      completed: false,
      type: 'fire',
      rewardPoints: 50,
    },
    {
      id: 2,
      title: 'Read a chapter from a book',
      description: 'Nourish your mind with knowledge.',
      completed: false,
      type: 'water',
      rewardPoints: 30,
    },
    {
      id: 3,
      title: 'Take a 15-minute meditation break',
      description: 'Relax your mind and reduce stress.',
      completed: false,
      type: 'earth',
      rewardPoints: 20,
    },
    {
      id: 4,
      title: 'Try a new healthy recipe',
      description: 'Experiment with nutritious cooking.',
      completed: false,
      type: 'air',
      rewardPoints: 70,
    },
    {
      id: 5,
      title: 'Practice mindfulness for 10 minutes',
      description: 'Calm your thoughts and stay present.',
      completed: false,
      type: 'fire',
      rewardPoints: 10,
    },
    {
      id: 6,
      title: 'Go for a 5km run',
      description: 'Challenge your endurance and stamina.',
      completed: false,
      type: 'water',
      rewardPoints: 100,
    },
  ];

  totalPoints: number = 0;

  constructor(private renderer: Renderer2) {}

  markQuestCompleted(quest: IDailyQuest): void {
    if (!quest.completed) {
      quest.completed = true;
      this.totalPoints += quest.rewardPoints;
      console.log(this.totalPoints);
    }
  }

  closeDailyQuests(): void {
    console.log('quests closed');
    this.showDailyQuests = false;
    this.showDailyQuestsChange.emit(this.showDailyQuests);
  }
}
