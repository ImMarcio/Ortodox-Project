import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VersoRandomComponent } from './verso-random.component';

describe('VersoRandomComponent', () => {
  let component: VersoRandomComponent;
  let fixture: ComponentFixture<VersoRandomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VersoRandomComponent]
    });
    fixture = TestBed.createComponent(VersoRandomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
