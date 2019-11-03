import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ExpressionDisplayComponent } from './expression-display.component';

describe('ExpressionDisplayComponent', () => {
  let component: ExpressionDisplayComponent;
  let fixture: ComponentFixture<ExpressionDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExpressionDisplayComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpressionDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set value', () => {
    component.writeValue('1');
    expect(component.value).toBe('1');
  });

  it('should set value to empty string if null is passed', () => {
    component.writeValue(null);
    expect(component.value).toBe('');
  });

  it('should not set value if argument is same as old value', () => {
    const changeSpy = spyOn<any>(component, 'onChangeCallback');
    component.writeValue('123');
    component.writeValue('123');
    expect(changeSpy).toHaveBeenCalledTimes(1);
  });
});
