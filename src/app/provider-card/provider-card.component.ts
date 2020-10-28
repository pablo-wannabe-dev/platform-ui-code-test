import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "provider-card",
  templateUrl: "./provider-card.component.html",
  styleUrls: ["./provider-card.component.css"],
})
export class ProviderCardComponent implements OnInit {
  @Input() provider: any;
  @Input() isSelected: boolean;
  @Output() storeInSelected = new EventEmitter<string>();
  @Output() removeFromSelected = new EventEmitter<string>();
  @Output() setLocalStorage = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  selectCard(id: string) {
    this.storeInSelected.emit(id);
    this.setLocalStorage.emit();
  }

  removeCard(id: string) {
    this.removeFromSelected.emit(id);
    this.setLocalStorage.emit();
  }
}
