import { Component } from '@angular/core';
import { SharedService} from 'shared-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-mfe';

  constructor(private sharedService: SharedService) {
    // Called first time before the ngOnInit()
    console.log("step 1..");
    this.sharedService.changeMessage("data ..hello world");
  }
}
