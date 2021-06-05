import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HTMLTutorialComponent } from './html-tutorial.component';

describe('HTMLTutorialComponent', () => {
  let component: HTMLTutorialComponent;
  let fixture: ComponentFixture<HTMLTutorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HTMLTutorialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HTMLTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
