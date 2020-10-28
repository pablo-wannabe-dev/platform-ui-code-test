import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ProviderCardComponent } from "./provider-card.component";

const sampleProvider: any = {
  id: "1",
  name: "John",
  address: "123 Greenway Blvd",
  phone: "8991234321",
};

describe("ProviderCardComponent", () => {
  let component: ProviderCardComponent;
  let fixture: ComponentFixture<ProviderCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProviderCardComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderCardComponent);
    component = fixture.componentInstance;
    component.provider = sampleProvider;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  describe("provider info", () => {
    it("should have a name", () => {
      expect(component.provider.name).toEqual("John");
    });

    it("should have an address", () => {
      expect(component.provider.address).toEqual("123 Greenway Blvd");
    });

    it("should have a phone", () => {
      expect(component.provider.phone).toEqual("8991234321");
    });
  });

  describe("card actions", () => {
    it("should call storeInSelected.emit", () => {
      spyOn(component.storeInSelected, "emit");
      component.selectCard("1");
      expect(component.storeInSelected.emit).toHaveBeenCalled();
    });

    it("should call removeFromSelected.emit", () => {
      spyOn(component.removeFromSelected, "emit");
      component.removeCard("1");
      expect(component.removeFromSelected.emit).toHaveBeenCalled();
    });
  });
});
