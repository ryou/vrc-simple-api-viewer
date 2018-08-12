import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VrcApiService, InstanceData, WorldData } from '../../vrc-api.service';
import { StateService } from '../../state.service';
import * as Rx from 'rxjs';

@Component({
  selector: 'app-instance-page',
  templateUrl: './instance-page.component.html',
  styleUrls: ['./instance-page.component.css']
})
export class InstancePageComponent implements OnInit {

  world: WorldData = null;
  instance: InstanceData = null;

  constructor(
    private route: ActivatedRoute,
    private vrcApiService: VrcApiService,
    private stateService: StateService
  ) { }

  ngOnInit() {
    const location = this.route.snapshot.paramMap.get('location');
    const [ worldId, instanceId ] = location.split(':');

    setTimeout(() => {
      this.stateService.loading = true;
      const loadInstance$ = this.vrcApiService.getInstanceInfo(worldId, instanceId);
      const loadWorld$ = this.vrcApiService.getWorldInfo(worldId);
      Rx.forkJoin(loadInstance$, loadWorld$)
        .subscribe(
          data => {
            this.instance = data[0];
            this.world = data[1];

            this.stateService.loading = false;
          },
          error => console.error(error)
        );
    }, 0)
  }

}
