import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ProviderListService {
  public selectedProviders = [];
  public unselectedProviders = [
    {
      id: "1",
      name: "John",
      address: "123 Greenway Blvd",
      phone: "8991234321",
    },
    {
      id: "2",
      name: "Mary",
      address: "443 Windwhisper Road",
      phone: "2233211903",
    },
    {
      id: "3",
      name: "Jason",
      address: "9992 Pumpkin Hollow",
      phone: "4343219384",
    },
  ];

  selectedProviders$: Observable<any>;
  private _selectedProviders: BehaviorSubject<any>;

  unselectedProviders$: Observable<any>;
  private _unselectedProviders: BehaviorSubject<any>;

  constructor() {
    if (localStorage.getItem("selectedProviders")) {
      let arrayOfIds = localStorage.getItem("selectedProviders").split(",");
      for (let id of arrayOfIds) {
        this.storeInSelected(id);
      }
    }
    this._selectedProviders = new BehaviorSubject<any>(this.selectedProviders);
    this.selectedProviders$ = this._selectedProviders.asObservable();

    this._unselectedProviders = new BehaviorSubject<any>(
      this.unselectedProviders
    );
    this.unselectedProviders$ = this._unselectedProviders.asObservable();
  }

  // search for the id in the unselected data store, remove it from there
  // and place it in the selected data store
  storeInSelected(id: string) {
    for (let i = 0; i < this.unselectedProviders.length; i++) {
      if (this.unselectedProviders[i].id === id) {
        this.selectedProviders.push(this.unselectedProviders[i]);
        this.unselectedProviders.splice(i, 1);
        i--;
      }
    }
  }

  removeFromSelected(id: string) {
    for (let i = 0; i < this.selectedProviders.length; i++) {
      if (this.selectedProviders[i].id === id) {
        this.unselectedProviders.push(this.selectedProviders[i]);
        this.selectedProviders.splice(i, 1);
        i--;
      }
    }
  }

  // Set the localstorage data based on ID's in order to not store more data than necessary
  setLocalStorage() {
    let listOfIds = "";
    for (let provider of this.selectedProviders) {
      listOfIds.length > 0 ? (listOfIds += "," + provider.id) : (listOfIds += provider.id);
    }
    localStorage.setItem("selectedProviders", listOfIds);
  }
}
