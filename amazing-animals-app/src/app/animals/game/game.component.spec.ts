import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GameComponent } from './game.component';
import { GameService } from '../game-service';
import { of, throwError } from 'rxjs';

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;
  let testGameService: jasmine.SpyObj<GameService>;

  beforeEach(async () => {
    testGameService = jasmine.createSpyObj('GameService',[
      'getGameQuestion',
      'checkGuess'
    ]);

    await TestBed.configureTestingModule({
      imports: [GameComponent],
      providers: [{ provide: GameService, useValue: testGameService }]
    }).compileComponents();

    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    testGameService = TestBed.inject(GameService) as jasmine.SpyObj<GameService>;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should load game guestion on init', () => {
    const testData = { funFact: 'It can fly', animalId: '123'};
    testGameService.getGameQuestion.and.returnValue(of(testData));

    component.ngOnInit();

    expect(testGameService.getGameQuestion).toHaveBeenCalled();
    expect(component.funFact).toBe('It can fly');
    expect(component.animalId).toBe('123');
    expect(component.isLoading).toBeFalse();
  });

  it('should handle error when loading game question', () => {
    testGameService.getGameQuestion.and.returnValue(
      throwError(() => new Error('Error'))
    );

    component.ngOnInit();

    expect(component.error).toBe('Failed to load game');
    expect(component.isLoading).toBeFalse();
  });

  it('should check guess and show correct result', () => {
    const responseData = { correct: true };
    testGameService.checkGuess.and.returnValue(of(responseData));

    // component.animalId = '123';
    component.guess = 'Lion';
    component.funFact = 'This animal lives in packs called prides';

    component.submitGuess();

    expect(testGameService.checkGuess).toHaveBeenCalledWith({
      funFact: 'This animal lives in packs called prides',
      guess: 'Lion'
    });
    expect(component.result).toBe('Correct! 🎉');
    });

  it('should handle error when check guess', () => {
    testGameService.checkGuess.and.returnValue(
      throwError(() => new Error('Error'))
    );

    // component.animalId = '123';
    component.funFact = 'This animal lives in packs called prides',
    component.guess = 'Lion';

    component.submitGuess();

    expect(component.error).toBe('Failed to check guess');
  });
});
