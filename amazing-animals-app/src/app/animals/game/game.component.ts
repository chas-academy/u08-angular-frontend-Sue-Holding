import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GameService } from '../game-service';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent implements OnInit {
  funFact: string = '';
  guess: string = '';
  animalId: string = '';
  result: string = '';
  isLoading = false;
  error: string | null = null;

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.loadGame();
  }

  loadGame() {
    this.isLoading = true;
    this.gameService.getGameQuestion().subscribe({
      next: data => {
        this.funFact = data.funFact;
        this.animalId = data.animalId;
        this.isLoading = false;
      },
      error: (err: any) => {
        this.error = 'Failed to load game';
        this.isLoading = false;
      }
    });
  }

  submitGuess(): void {
    this.gameService.checkGuess({
      guess: this.guess,
      funFact: this.funFact
    }).subscribe({
      next: (data: any) => {
        this.result = data.correct ? 'Correct! 🎉' : 'Oops, try again!';
      },
      error: (err: any) => {
        this.error = 'Failed to check guess';
      }
    });
  }

  playAgain() {
    this.guess = '';
    this.result = '';
    this.loadGame();
  }

  clearAnimalGame() {
    this.playAgain();
  }
}

