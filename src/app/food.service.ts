import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Food } from './food';
import { MessageService } from './message.service';
import { AngularFirestore, AngularFirestoreDocument,AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireDatabase,AngularFireList} from '@angular/fire/database';
//import { AngularFireObject} from '@angular/fire/objects';

@Injectable({ providedIn: 'root' })
export class FoodService {
//private dbPath = '/foods';


  private foodsUrl = 'api/foods';  // URL to web api

  foodsCollection!: AngularFirestoreCollection<Food>;
  foodsCollection2!: AngularFireList<Food[]>;
  //foodsCollection2!: AngularFireObject<any>;
  food!: AngularFireList<Food[]>;

  foodsList = [];

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  editFood: any;

  constructor(
    private http: HttpClient,private firestore: AngularFirestore, private db: AngularFireDatabase,
    private messageService: MessageService) {}

     /* this.foodsCollection = this.firestore.collection('foods');
      this.foodsCollection2 = this.db.list('foods');
      this.food = this.db.list('foods');//this.foodsCollection2.valueChanges();
      this.food.valueChanges().forEach(fff => {
          console.log('DFFF',typeof fff);
          let nArr = JSON.parse(JSON.stringify(fff))
          this.foodsList = nArr;
          for(let i =0;i<nArr.length;i++)
          {
            console.log('FOOD: ',nArr[i].id+' / '+nArr[i].name);
          }
      });*/
      /*
      this.food.subscribe((foodsData: Food[]) => {
        this.foodsList = [];
        foodsData.forEach((food: Food) => {
          console.log('Food id1:',food.id);
          console.log('Food name1:',food.name);

            //this.foodsList.push(food);
        });
      });

    }*/

  /** GET foods from the server*/
  getFoods(): Observable<Food[]> {
    return this.http.get<Food[]>(this.foodsUrl)
      .pipe(
        tap(_ => this.log('fetched foods')),
        catchError(this.handleError<Food[]>
        ('getFoods', []))
    );
  }
  /** GET food by id. Return `undefined` when id not found */
  getFoodNo404<Data>(id: number): Observable<Food> {
    const url = `${this.foodsUrl}/?id=${id}`;
    return this.http.get<Food[]>(url)
      .pipe(
        map(foods => foods[0]), // returns a {0|1} element array
        tap(f => {
          const outcome = f ? `fetched` : `did not find`;
          this.log(`${outcome} food id=${id}`);
        }),
        catchError(this.handleError<Food>(`getFood id=${id}`))
      );
    }

/** GET foods 2 from the server
  getFoods2() { //: Observable<Food[]>

    return this.foodsCollection;//.valueChanges();
  }

  getFoods3() { //: Observable<Food[]>

    return this.foodsCollection2;//.valueChanges();
  }


  getUsages() { //: Observable<Food[]>
    //db.list('/candidates_list', ref => ref.orderByChild('email').equalTo('pranavkeke@gmail.com'));

    let usages = this.db.list('usage', ref => ref.orderByChild('username').equalTo('ralivd@gmail.com'));



    usages.valueChanges().forEach(usage => {
        console.log('USS',typeof usage);
        let nArr = JSON.parse(JSON.stringify(usage));
        for(let i =0;i<nArr.length;i++)
        {
          for(let y=0;y<nArr[i].foods.length;y++)
          {
            let id = nArr[i].foods[y];
            let _fd = this.foodsList.find(f => f["id"] === id);
            let _date = new Date(nArr[i].date * 1000);

            if(_fd ){
              console.log('On '+_date+', user:  '+nArr[i].username+' gave to her baby '+_fd["name"]);
            }
          }
          //console.log('FOOD: ',nArr[i].date+' / '+nArr[i].username);
        }
    });
    return this.db.list('usage').valueChanges();
  }


  create(foodData: Food) {
    // Persist a document id
    const id = this.firestore.createId();
    //foodData.id = id;
    this.foodsCollection.add(foodData);
  }*/

  /** GET food by id. Will 404 if id not found */
  getFood(id: number): Observable<Food> {
    const url = `${this.foodsUrl}/${id}`;
    return this.http.get<Food>(url).pipe(
      tap(_ => this.log(`fetched food id=${id}`)),
      catchError(this.handleError<Food>(`getFood id=${id}`))
    );
  }

  /* GET foods whose name contains search term */
  searchFoods(term: string): Observable<Food[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Food[]>(`${this.foodsUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
         this.log(`found foods matching "${term}"`) :
         this.log(`no foods matching "${term}"`)),
      catchError(this.handleError<Food[]>('searchFoods', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new food to the server */
  addFood(food: Food): Observable<Food> {
    return this.http.post<Food>(this.foodsUrl, food, this.httpOptions).pipe(
      tap((newFood: Food) => this.log(`added food w/ id=${newFood.id}`)),
      catchError(this.handleError<Food>('addFood'))
    );
  }

  /** DELETE: delete the food from the server */
  deleteFood(food: Food | number): Observable<Food> {
    const id = typeof food === 'number' ? food : food.id;
    const url = `${this.foodsUrl}/${id}`;

    return this.http.delete<Food>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted food id=${id}`)),
      catchError(this.handleError<Food>('deleteFood'))
    );
  }
 /** PUT: update the food on the server */
 updateFood(food: Food): Observable<any> {
  return this.http.put(this.foodsUrl, food, this.httpOptions).pipe(
    tap(_ => this.log(`updated food id=${food.id}`)),
    catchError(this.handleError<any>('updateFood'))
  );
}

/**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
     // TODO: send the error to remote logging infrastructure
     console.error(error); // log to console instead

// TODO: better job of transforming error for user consumption
this.log(`${operation} failed: ${error.message}`);

// Let the app keep running by returning an empty result.
return of(result as T);
};
}

/** Log a FoodService message with the MessageService */
private log(message: string) {
this.messageService.add(`FoodService: ${message}`);
}
}









/*import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Food } from './food';
import { AngularFirestore, AngularFirestoreDocument,AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireDatabase,AngularFireList} from '@angular/fire/database';

@Injectable({ providedIn: 'root' })
export class FoodService {
private dbPath = '/foods';

foodsRef: AngularFireList<Food>;

private foodsUrl = 'api/foods';  // URL to web api
constructor(
  private http: HttpClient,private firestore: AngularFirestore, private db: AngularFireDatabase){
    this.foodsRef = db.list(this.dbPath)
;  }

getAll(): AngularFireList<Food> {
  return this.foodsRef;
}

create(tutorial: Food): any {
  return this.foodsRef.push(tutorial);
}

update(key: string, value: any): Promise<void> {
  return this.foodsRef.update(key, value);
}

delete(key: string): Promise<void> {
  return this.foodsRef.remove(key);
}

deleteAll(): Promise<void> {
  return this.foodsRef.remove();
}
}*/




