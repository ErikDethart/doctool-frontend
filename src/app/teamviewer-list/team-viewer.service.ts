import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { TeamViewer } from './teamviewer';

@Injectable({
  providedIn: 'root'
})
export class TeamViewerService {
  teamViewerUrl = "https://localhost:5001/TeamViewer";

  constructor(private http: HttpClient) {
   }

  getTeamViewers(): Observable<TeamViewer[]> {
    return this.http.get<TeamViewer[]>(this.teamViewerUrl);
  }

  deleteTeamViewer(teamViewer: TeamViewer): Observable<unknown> {
    console.log(`${this.teamViewerUrl}/${teamViewer.hostName}`);
    return this.http.delete(`${this.teamViewerUrl}/${teamViewer.hostName}`);
  }
}
