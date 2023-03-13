import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TabsNewWayComponent} from './tabs-new-way.component';

describe('TabsNewWayComponent', () => {
  let component: TabsNewWayComponent;
  let fixture: ComponentFixture<TabsNewWayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabsNewWayComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TabsNewWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
