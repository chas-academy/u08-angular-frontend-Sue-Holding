import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AnimalService } from '../animal-service';
import { CommonModule } from '@angular/common';
import { Animal } from '../../shared/models/animal-model';

@Component({
  selector: 'app-animal-delete',
  standalone: true,
  imports: [CommonModule, RouterModule],
  providers: [AnimalService],
  templateUrl: './animal-delete.component.html',
  styleUrl: './animal-delete.component.css'
})

export class AnimalDeleteComponent implements OnInit {
  animal: Animal | null = null;
  id: string | null = null;
  isLoading = true;
  error: string | null = null;
  
  constructor (
    private route: ActivatedRoute,
    private animalService: AnimalService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.animalService.getAnimal(this.id).subscribe({
        next: (data) => {
          this.animal = data;
          this.isLoading = false;
        },
        error: (err) => {
          console.error('Failed to load animal for deletion:', err);
          this.error = 'Failed to laod animal.';
          this.isLoading = false;
        }
      });
    } else {
      this.error = 'No ID found.';
      this.isLoading = false;
  }
}

confirmDelete(): void {
  if (this.id) {
    this.animalService.deleteAnimal(this.id).subscribe({
      next: () => {
        console.log('Animal deleted.');
        this.router.navigate(['/animals']);
      },
      error: (err) => {
        console.error('Failed to delete animal:', err);
        this.error = 'Failed to delete animal.';
      }
    });
  }
}

cancel(): void {
  this.router.navigate(['/animals', this.id]);
  }
}