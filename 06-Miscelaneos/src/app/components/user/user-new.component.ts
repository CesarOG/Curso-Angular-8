import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-user-new",
  template: `
    <p>
      user-new works!
    </p>
  `,
  styles: []
})
export class UserNewComponent implements OnInit {
  constructor(private router: ActivatedRoute) {
    this.router.parent.params.subscribe(params => {
      console.log("Ruta Hija New");
      console.log(params);
    });
  }

  ngOnInit() {}
}
