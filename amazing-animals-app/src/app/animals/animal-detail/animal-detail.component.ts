import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { AnimalService } from '../animal-service';
import { Animal } from '../../shared/models/animal-model';

@Component({
  selector: 'app-animal-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  providers: [AnimalService],
  templateUrl: './animal-detail.component.html',
  styleUrl: './animal-detail.component.css'
})

export class AnimalDetailComponent implements OnInit {
  animal: Animal | null = null;
  isLoading = true;
  error: string | null = null;

  constructor(
    private animalService: AnimalService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAnimal();
  }

  getAnimal(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('extracted route id:', id); //debug check for id
    
    if (id) {
    this.animalService.getAnimal(id).subscribe({
      next: (data) => {
        console.log('fetched animal:', data); //debug to check data
        this.animal = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching animal details:', err);
        this.error = 'Failed to load animal details';
        this.isLoading = false;
      }
    });
  } else {
    this.error = 'No animal ID found in URL';
    this.isLoading = false;
  }
}

clearAnimalDetail() {
  this.router.navigate(['/']);
}
}
