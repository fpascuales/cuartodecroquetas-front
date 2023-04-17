import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CroquetaListComponent } from './croqueta-list.component';

describe('CroquetaListComponent', () => {
  let component: CroquetaListComponent;
  let fixture: ComponentFixture<CroquetaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CroquetaListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CroquetaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
