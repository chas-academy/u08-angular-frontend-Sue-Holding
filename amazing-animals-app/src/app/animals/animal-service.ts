import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Animal } from '../shared/models/animal-model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AnimalService {
  private apiUrl = 'https://restful-api-animals.onrender.com/api';

  constructor(private http: HttpClient) {}

  getAnimals(): Observable<Animal[]> {
    return this.http.get<Animal[]>(`${this.apiUrl}/animals/getall`);
  }

  getAnimal(id: string): Observable<Animal> {
    return this.http.get<Animal>(`${this.apiUrl}/animals/get/${id}`);
  }

  createAnimal(animal: Animal): Observable<Animal> {
    return this.http.post<Animal>(`${this.apiUrl}/animals/add`, animal);
  }

  updateAnimal(id: string, animal: Animal): Observable<Animal> {
    return this.http.put<Animal>(`${this.apiUrl}/animals/update/${id}`, animal);
  }

  deleteAnimal(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/animals/delete/${id}`);
  }
}
