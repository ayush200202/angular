import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomlistComponent } from './homlist.component';

describe('HomlistComponent', () => {
  let component: HomlistComponent;
  let fixture: ComponentFixture<HomlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomlistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
