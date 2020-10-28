import { Component, OnInit } from "@angular/core";
import { ProviderListService } from "../provider-list.service";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"],
})
export class ListComponent implements OnInit {
  selectedProviders = [];
  unselectedProviders = [];

  constructor(private providerListService: ProviderListService) {}

  ngOnInit() {
    this.providerListService.unselectedProviders$.subscribe((data) => {
      if (data) {
        this.unselectedProviders = data;
      }
    });

    this.providerListService.selectedProviders$.subscribe((data) => {
      if (data) {
        this.selectedProviders = data;
      }
    });
  }
}
