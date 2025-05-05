import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AnimalService } from '../animal-service';
import { Animal } from '../../shared/models/animal-model';

@Component({
  selector: 'app-animal-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './animal-list.component.html',
  styleUrl: './animal-list.component.css'
})

export class AnimalListComponent implements OnInit {
  animals: Animal[] = [];
  filteredAnimals: Animal[] = [];
  searchName: string = '';
  isLoading = true;
  error: string | null = null;
  
  constructor(private animalService: AnimalService) {}

  ngOnInit(): void {
    this.getAnimals();
  }

  getAnimals(): void {
    this.animalService.getAnimals().subscribe({
      next: (data) => {
        console.log('Animal list loaded:', this.animals);
        this.animals = data;
        this.filteredAnimals = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching animals:', err);
        this.error = 'Failed to load animals';
        this.isLoading = false;
      }
    });
  }

  onSearch() {
    if (this.searchName.trim() === '') {
      this.filteredAnimals = this.animals;  // show all if empty
    } else {
      this.filteredAnimals = this.animals.filter(animal =>
        animal.name.toLowerCase().includes(this.searchName.toLowerCase())
      );
    }
  }
  

  clearAnimalList() {
    this.animals = [];
  }
}
