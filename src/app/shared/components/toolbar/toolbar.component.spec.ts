import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbardComponent } from './toolbar.component';

describe('ToolbardComponent', () => {
  let component: ToolbardComponent;
  let fixture: ComponentFixture<ToolbardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToolbardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ToolbardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
