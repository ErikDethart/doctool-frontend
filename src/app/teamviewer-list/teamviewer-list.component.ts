import { Component, OnInit } from '@angular/core';
import { TeamViewer } from './teamviewer';
import { TeamViewerService } from './team-viewer.service';

@Component({
  selector: 'app-teamviewer-list',
  templateUrl: './teamviewer-list.component.html',
  styleUrls: ['./teamviewer-list.component.sass']
})
export class TeamviewerListComponent implements OnInit {
  teamViewers: TeamViewer[] = [];

  constructor(private teamViewerService : TeamViewerService) {

  }

  ngOnInit(): void {
    this.getTeamViewers();
    var tableElement = document.getElementById('tvTable');
    if (tableElement != null) {
      tableElement.style.width = document.getElementById('tvTable')?.scrollWidth + 'px';
    }
  }

  getTeamViewers(): void {
    this.teamViewerService.getTeamViewers().subscribe(teamViewers => (this.teamViewers = teamViewers));
  }

  delete(teamViewer: TeamViewer) {
    if (confirm(`Delete ${teamViewer.hostName}?`)) {
      this.teamViewerService.deleteTeamViewer(teamViewer).subscribe();
      this.getTeamViewers();
    }
  }
}
