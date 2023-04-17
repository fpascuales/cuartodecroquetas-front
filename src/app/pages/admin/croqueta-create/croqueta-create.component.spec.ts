import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CroquetaCreateComponent } from './croqueta-create.component';

describe('CroquetaCreateComponent', () => {
  let component: CroquetaCreateComponent;
  let fixture: ComponentFixture<CroquetaCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CroquetaCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CroquetaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
