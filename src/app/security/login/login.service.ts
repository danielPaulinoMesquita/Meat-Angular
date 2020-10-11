import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MEAT_API} from '../../app-api';
import {User} from './user.model';
import {NavigationEnd, Router} from '@angular/router';


@Injectable()
export class LoginService {

  user: User;
  lastUrl: string;

  constructor(private http: HttpClient, private router: Router) {
    this.router.events.filter(e => e instanceof NavigationEnd).subscribe((e: NavigationEnd) => this.lastUrl = e.url)
  }

  isLoggedIn(): boolean {
    return this.user !== undefined;
  }

  login(email: string, password: string): Observable<User> {
    return this.http.post<User>(`${MEAT_API}/login`, {email: email, password: password})
      .do(user => this.user = user)
  }

  handleLogin(path: string = this.lastUrl) {
    this.router.navigate(['/login', btoa(path)])
  }

  logout() {
    this.user = undefined;
  }
}