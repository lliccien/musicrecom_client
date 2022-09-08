import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicRecomComponent } from './music-recom.component';

describe('MusicRecomComponent', () => {
  let component: MusicRecomComponent;
  let fixture: ComponentFixture<MusicRecomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MusicRecomComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MusicRecomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
