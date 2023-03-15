import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleBarComponent } from './simple-bar.component';

describe('SimpleBarComponent', () => {
  let component: SimpleBarComponent;
  let fixture: ComponentFixture<SimpleBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
