import { Component, OnInit, Input } from "@angular/core";
import { ProviderListService } from "../provider-list.service";

@Component({
  selector: "provider-card",
  templateUrl: "./provider-card.component.html",
  styleUrls: ["./provider-card.component.css"],
})
export class ProviderCardComponent implements OnInit {
  @Input() provider: any;
  @Input() isSelected: boolean;

  constructor(private providerListService: ProviderListService) {}

  ngOnInit() {}

  selectCard(id: string) {
    this.providerListService.storeInSelected(id);
    this.providerListService.setLocalStorage();
  }

  removeCard(id: string) {
    this.providerListService.removeFromSelected(id);
    this.providerListService.setLocalStorage();
  }
}
