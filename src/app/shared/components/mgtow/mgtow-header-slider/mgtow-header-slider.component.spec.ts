import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MgtowHeaderSliderComponent } from './mgtow-header-slider.component';

describe('MgtowHeaderSliderComponent', () => {
  let component: MgtowHeaderSliderComponent;
  let fixture: ComponentFixture<MgtowHeaderSliderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MgtowHeaderSliderComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MgtowHeaderSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
