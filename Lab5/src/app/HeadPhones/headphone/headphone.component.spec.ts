import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadphoneComponent } from './headphone.component';

describe('HeadphoneComponent', () => {
  let component: HeadphoneComponent;
  let fixture: ComponentFixture<HeadphoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadphoneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
