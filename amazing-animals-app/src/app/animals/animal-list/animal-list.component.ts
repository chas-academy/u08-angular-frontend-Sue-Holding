import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AnimalService } from '../animal-service';
import { Animal } from '../../shared/models/animal-model';

@Component({
  selector: 'app-animal-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './animal-list.component.html',
  styleUrl: './animal-list.component.css'
})
export class AnimalListComponent implements OnInit {
  animals: Animal[] = [];
  isLoading = true;
  error: string | null = null;

  constructor(private animalService: AnimalService) {}

  ngOnInit(): void {
    this.getAnimals();
  }

  getAnimals(): void {
    this.animalService.getAnimals().subscribe({
      next: (data) => {
        this.animals = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching animals:', err);
        this.error = 'Failed to load animals';
        this.isLoading = false;
      }
    });
  }
}
