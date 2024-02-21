import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentausuarioComponent } from './ventausuario.component';

describe('VentausuarioComponent', () => {
  let component: VentausuarioComponent;
  let fixture: ComponentFixture<VentausuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentausuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentausuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
