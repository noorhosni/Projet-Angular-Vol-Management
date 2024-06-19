import { Component, OnInit } from "@angular/core";
import { VolsService } from "../../services/vols.service";

@Component({
  selector: 'app-all-vols',
  templateUrl: './all-vols.component.html',
  styleUrls: ['./all-vols.component.css'],
})
export class AllVolsComponent implements OnInit {
  vols: any[] = [];
  categories: any[] = [];
  constructor(private service: VolsService) {}

  ngOnInit(): void {
    this.getVols();
    this.getCategories();
  }
  getVols() {
    this.service.getAllVols().subscribe(
      (res: any) => {
        this.vols = res;
      },
      (error) => {
        alert('error');
      }
    );
  }

  getCategories() {
    this.service.getVolsCategories().subscribe(
      (res: any) => {
        this.categories = res;
      },
      (error) => {
        alert('error');
      }
    );
  
  }

  
}
