import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Movie} from '../movie/Movie';
import {Observable} from 'rxjs';


@Injectable()
export class MovieService {
  path = 'http://localhost:3000/api/movies';

  constructor(private http: HttpClient) {
  }

  getMovies(categoryId): Observable<Movie[]> {
    let newPath = this.path;
    if (categoryId) {
      newPath += '?categoryId=' + categoryId;
    }
    return this.http.get<Movie[]>(newPath);
  }

  getTop10Movies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.path + '/top10');
  }

  addMovies(movie: Movie): Observable<Movie> {
    const options = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    };
    return this.http.post<Movie>(this.path, movie, options);
  }

}
