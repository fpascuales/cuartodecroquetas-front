import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CroquetaComponent } from './croqueta.component';

describe('CroquetaComponent', () => {
  let component: CroquetaComponent;
  let fixture: ComponentFixture<CroquetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CroquetaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CroquetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
