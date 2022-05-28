import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranscribeChoiceComponent } from './transcribe-choice.component';

describe('TranscribeChoiceComponent', () => {
  let component: TranscribeChoiceComponent;
  let fixture: ComponentFixture<TranscribeChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranscribeChoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TranscribeChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
