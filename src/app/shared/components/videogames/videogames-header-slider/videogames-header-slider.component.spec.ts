import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VideogamesHeaderSliderComponent } from './videogames-header-slider.component';

describe('VideogamesHeaderSliderComponent', () => {
  let component: VideogamesHeaderSliderComponent;
  let fixture: ComponentFixture<VideogamesHeaderSliderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VideogamesHeaderSliderComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VideogamesHeaderSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
