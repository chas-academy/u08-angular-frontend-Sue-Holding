import { CommonModule, NgIf, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimalService } from '../animal-service';
import { Animal } from '../../shared/models/animal-model';

@Component({
  selector: 'app-animal-form',
  standalone: true,
  imports: [CommonModule, FormsModule, NgIf, NgFor],
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
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
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
      this.isLoading = false;
    }
  }

  onSubmit(): void {
    if ( this.isEditMode && this.animal._id) {
      this.animalService.updateAnimal(this.animal._id, this.animal).subscribe({
        next: () => this.router.navigate(['/animals']),
        error: (err) => {
          console.error('Failed to update animal:', err);
          this.error = 'Failed to update animal.';
        }
      });
    } else {
      this.animalService.createAnimal(this.animal).subscribe({
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
}
