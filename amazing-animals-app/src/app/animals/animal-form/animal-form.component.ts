import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimalService } from '../animal-service';
import { Animal } from '../../shared/models/animal-model';

@Component({
  selector: 'app-animal-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './animal-form.component.html',
  styleUrl: './animal-form.component.css'
})
export class AnimalFormComponent implements OnInit {
  animal: Animal = {
    _id: '',
    name: '',
    diet: '',
    location: '',
    funFact: ''
  };
  isLoading = true;
  error: string | null = null;
  isEditMode = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private animalService: AnimalService
  ) {}

  ngOnInit(): void {
    const url  = this.router.url;
    const id = this.route.snapshot.paramMap.get('id');

    if (url.includes('/edit') && id) {
      this.isEditMode = true;
      this.animalService.getAnimal(id).subscribe({
        next: (data) => {
          this.animal = data;
          this.isLoading = false;
        },
        error: (err) => {
          console.error('Failed to load animal:', err);
          this.error = 'Failed to load animal.';
          this.isLoading = false;
        }
      });
    } else {
      this.isEditMode = false;
      this.isLoading = false;
    }
  }

  onSubmit(): void {
    if (this.isEditMode && this.animal._id) {
      this.animalService.updateAnimal(this.animal._id, this.animal).subscribe({
        next: () => this.router.navigate(['/animals']),
        error: (err) => {
          console.error('Failed to update animal:', err);
          this.error = 'Failed to update animal.';
        }
      });
    } else {
      const newAnimal = { ...this.animal };
      delete newAnimal._id;

      this.animalService.createAnimal(newAnimal).subscribe({
        next: () => this.router.navigate(['/animals']),
        error: (err) => {
          console.error('Failed to create animal:', err);
          this.error = 'Failed to create animal.';
        }
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/animals']);
  }

  clearAnimalForm() {
    this.animal = {
      name: '',
      diet: '',
      location: '',
      funFact: ''
    };
    this.router.navigate(['/']);
  }
}
