import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CroquetaDetailComponent } from './croqueta-detail.component';

describe('CroquetaDetailComponent', () => {
  let component: CroquetaDetailComponent;
  let fixture: ComponentFixture<CroquetaDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CroquetaDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CroquetaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
