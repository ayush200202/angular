import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetrocityComponent } from './metrocity.component';

describe('MetrocityComponent', () => {
  let component: MetrocityComponent;
  let fixture: ComponentFixture<MetrocityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MetrocityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MetrocityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
