import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TabsOldWayComponent} from './tabs-old-way.component';

describe('TabsOldWayComponent', () => {
  let component: TabsOldWayComponent;
  let fixture: ComponentFixture<TabsOldWayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabsOldWayComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TabsOldWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
