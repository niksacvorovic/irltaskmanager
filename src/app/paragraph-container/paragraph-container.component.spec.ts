import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParagraphContainerComponent } from './paragraph-container.component';

describe('ParagraphContainerComponent', () => {
  let component: ParagraphContainerComponent;
  let fixture: ComponentFixture<ParagraphContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParagraphContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParagraphContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
