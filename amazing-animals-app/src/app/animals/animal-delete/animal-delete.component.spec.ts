import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalDeleteComponent } from './animal-delete.component';

describe('AnimalDeleteComponent', () => {
  let component: AnimalDeleteComponent;
  let fixture: ComponentFixture<AnimalDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimalDeleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
