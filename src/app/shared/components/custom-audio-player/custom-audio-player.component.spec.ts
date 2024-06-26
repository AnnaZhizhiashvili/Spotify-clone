import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomAudioPlayerComponent } from './custom-audio-player.component';

describe('CustomAudioPlayerComponent', () => {
  let component: CustomAudioPlayerComponent;
  let fixture: ComponentFixture<CustomAudioPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomAudioPlayerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomAudioPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
