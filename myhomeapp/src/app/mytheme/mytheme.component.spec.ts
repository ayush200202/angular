import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MythemeComponent } from './mytheme.component';

describe('MythemeComponent', () => {
  let component: MythemeComponent;
  let fixture: ComponentFixture<MythemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MythemeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MythemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
