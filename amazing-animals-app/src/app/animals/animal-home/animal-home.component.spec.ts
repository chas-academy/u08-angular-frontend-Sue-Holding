import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalHomeComponent } from './animal-home.component';

describe('AnimalHomeComponent', () => {
  let component: AnimalHomeComponent;
  let fixture: ComponentFixture<AnimalHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimalHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
