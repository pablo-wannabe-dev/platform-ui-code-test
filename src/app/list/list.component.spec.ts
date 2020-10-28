import { ListComponent } from './list.component';
import { ProviderCardComponent } from '../provider-card/provider-card.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListComponent, ProviderCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('unselected providers', () => {    
    it('should have an initial length of 3', () => {
      expect(component.unselectedProviders.length).toEqual(3);
    });

    it('should have an id', () => {
      expect(component.unselectedProviders[0].id).toEqual('1');
    });

    it('should have a name', () => {
      expect(component.unselectedProviders[0].name).toEqual('John');
    });

    it('should have an address', () => {
      expect(component.unselectedProviders[0].address).toEqual('123 Greenway Blvd');
    });

    it('should have a phone', () => {
      expect(component.unselectedProviders[0].phone).toEqual('8991234321');
    });
  });

  describe('selected providers', () => {
    it('should have no initial length', () => {
      expect(component.selectedProviders.length).toEqual(0);
    });
  });

  describe('store in selected providers', () => {
    it('should store provider from unselected providers into selected providers', () => {
      component.storeInSelected('1');
      expect(component.selectedProviders.length).toEqual(1);
    });
  });

  describe('remove from selected providers', () => {
    beforeEach(() => {
      component.storeInSelected('1');
    });

    it('should remove provider from selected providers into unselected providers', () => {
      component.removeFromSelected('1');
      expect(component.selectedProviders.length).toEqual(0);
    });
  });

  describe('localStorage', () => {
    beforeEach(() => {
      localStorage.setItem("selectedProviders", '1');
    });

    it('should have called checkLocalStorage', () => {
      spyOn(component, 'checkLocalStorage');
      component.checkLocalStorage();
      expect(component.checkLocalStorage).toHaveBeenCalled();
    });

    it('should have a provider with ID: 1', () => {
      expect(component.selectedProviders[0].id).toEqual('1');
    });

    it('should set localStorage with a provider with ID: 1', () => {
      // spyOn(component, 'setLocalStorage');
      component.setLocalStorage();
      expect(localStorage.getItem('selectedProviders')).toEqual('1');
    });
  });
});
