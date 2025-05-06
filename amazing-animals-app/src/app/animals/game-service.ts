import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class GameService {
  private apiUrl = 'https://restful-api-animals.onrender.com/api';

  constructor(private http: HttpClient) {}

    getGameQuestion() {
        return this.http.get<any>(`${this.apiUrl}/animals/game/guess-funfact`);
    }

    checkGuess(answer: { guess: string, funFact: string }) {
        return this.http.post<any>(`${this.apiUrl}/animals/game/check-guess`, answer);
    }
}