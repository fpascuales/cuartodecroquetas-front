import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CroquetaEditComponent } from './croqueta-edit.component';

describe('CroquetaEditComponent', () => {
  let component: CroquetaEditComponent;
  let fixture: ComponentFixture<CroquetaEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CroquetaEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CroquetaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
