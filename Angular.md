# Angular

## Routeo

Para activar el ruteo en angular, basta con definir una constante en el archivo app.module.ts:

```
const appRoutes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'conversation', component: ConversationComponent},
  {path: 'profile', component: ProfileComponent},
];

```

posteriormente inportar la constante en el mismo archivo:

```
imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
```

  Una vez declaradas la rutas de nuestra aplicacion, tenemos que inyectaros en nuestro html principal. Para ello añadimos una directiva en nuestro fichero app.component.html:

```
<a [routerLink]="['/home']" routerLinkActive="router-link-active" >Home</a> |
<a [routerLink]="['/login']" routerLinkActive="router-link-active" >Login</a> |
<a [routerLink]="['/profile']" routerLinkActive="router-link-active" >Profile</a> |
<router-outlet></router-outlet>
```

## Anidacion de Componentes

Como hemos visto, podemo screar diferentes componentes npara ir formando nuestra aplicacion. Hemos creado el componente de login, el componente de  profile etc ..

En nuestro app component.html, hemos creado un router para navegar entre los difrentes componentes. Como va a ser un menu que se puede utilizar en resto de componentes, podemos crear otro componente llamado menu, y llevarnos el codigo de app component.html menu html quedando:

```
<a [routerLink]="['/home']" routerLinkActive="router-link-active" >Home</a> |
<a [routerLink]="['/login']" routerLinkActive="router-link-active" >Login</a> |
<a [routerLink]="['/profile']" routerLinkActive="router-link-active" >Profile</a> |

```
Para inyectar este nuevo componente, en app component.html incluimos el hint al componente creado. El nombre para refenrecia la etiqueta lo podemos ver en el archivo: menu.component.ts

> selector: 'app-menu'

el archivo app.component.html quedaria de la  siguiente manera:

```
<app-menu></app-menu>
<router-outlet></router-outlet>
```

## Interfaces

las interfaces nos permiten crear tipos de datos personalizados.

Angular cli te permite crear interfaces con los siguientes comandos:

ng generate interface interfaces/user
ng g i interfaces/user

quedaria de la siguiente manera:

```
export interface User {
    nick: string;
    subnick?: string;
    age?: number;
    email: string;
    friend: boolean;
    uid: any;

}

```
La interrogacion indica que el campo de la interface es opcional.

## Propiedades propias de la clase o globales

para declarar variables globales o propias de la clase se declaran justo antes del constructor de la clase sin necesidad de declararlas con let, const, var, simplemente se declara con el nombre y el tipo, en nuestro caso

friends :User[]

en nuestro caso estamos declarando una variable friends que es un array de la interface User

En el constructor de homeComponent.ts, vamos a inicializar ese array para despues mostrarlo en el html del componente homme:

```
export class HomeComponent implements OnInit {
  friends: User[];
  constructor() {
    this.friends = [
      {nick: 'Eduardo', subnick: 'Mi mensaje personal', status: 'online', age: 28, email: 'eduardo@platzi.com', friend: true},
      {nick: 'Yuliana', subnick: 'Mi mensaje personal', status: 'busy', age: 25, email: 'yuliana@platzi.com', friend: true},
      {nick: 'Freddy', subnick: 'Mi mensaje personal', status: 'away', age: 28, email: 'freddy@platzi.com', friend: false}
    ];
  }
```
  Para poder mpstrar el contenido de este array tenemos la directiva ngfor.

  En el archimohomeComponent.html, vamos a mostrar ese array de la siguiente manera:

```
  <p *ngFor="let user of friends; let i = index">
    {{ i }}. {{ user.nick }} - {{ user.email }}
   </p>

```   

#ngIf

Si queremos meter un condicional para el muestreo de datos , utilizamos la directiva ngIf.

en nuestro caso vamos a poner dos bloques en nuestro componente para mostrar amigos agregados y los que no son agregados:

```
<br />
<b>Amigos</b>
<ng-container *ngFor="let user of friends; let i = index">
  <p *ngIf="user.friend" >
    {{ i }}. {{ user.nick }} - {{ user.email }}
  </p>
</ng-container>

<b>No agregados</b>
<ng-container *ngFor="let user of friends; let i = index">
    <p *ngIf="!user.friend" >
      {{ i }}. {{ user.nick }} - {{ user.email }}
    </p>  
</ng-container>

```
lo ng-container es una etiqueta de html provista por angular, invisible para el cliente y nos permite tener varias directivas. En nuestro caso tendremos el ngFor y el ngIf

##Navegacion enrte componentes

Para pasar parametros de un componente a otro se lo podemos pasar mediante la llamada. Para que no falle la llamada, en nuestro componente receptor hay que indicarle que va a recibir un parametro. Para ello nos vamos al fichero appModule.ts y modificamos la ruta conversation añadiendole un parametro:

> { path: 'conversation/:uid', component: ConversationComponent },

Ahora desde nuestro home component, enviaremos ese parametro añadiendo un link sobre nuestro usuaria mediante un ancla, etiqueta a, y le pasaremos el valos del id del usuario:

```
<ng-container *ngFor="let user of friends; let i = index">
  <div *ngIf="user.friend">
    <a routerLink="/conversation/{{user.uid}}">
      {{ i }}. {{ user.nick }} - {{ user.email }}
    </a>
  </div>
</ng-container>

```

para recuperar el valor del parametro, angular nos da una directiva activateRoute. Para ello es necesario activarlo en el componente receptor, en nuestro caso coversationComponent.ts.

>   constructor(private activatedRoute: ActivatedRoute)

y para acceder al valor:

```
export class ConversationComponent implements OnInit {
  friendId: any;
  constructor(private activatedRoute: ActivatedRoute) {
    this.friendId = this.activatedRoute.snapshot.params['uid'];
    console.log(this.friendId);
   }
```

para buscar dentro de los arrays, tenemos la funcion find. la funcion find mediante una funion anonima, recorre el array. seri a de la sigueinte manera:

friends.find( friend => {return friend.uid == this.friendId})

este this.friendId es el parametro que hemos recibido

## Servicios

Para no replicar datos entre los componentes, angular nos porporciona los servicios.

Es una clase que puede ser inyectada en otros componentes, y los metodos de esa clase se pueden utilizar


para crear los servicios:
> ng g service services/user

si echamos un ojo a nuestro servicio, vemos que no tiene archivo css  ni html.

```
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
}
```

El providedIn, indica a que nivel va a estar disponible nuestro componente. En nuestro caso estara disponible en toda la aplicacion porque el nivel es root.

para utilizar nuestro servicio, en los parametros del contrustor que queremos utilizar el servicion hacemos lo siguiente:


> constructor(private userService: UserService)

y posteriormente llamando al metodo del servicio, cargamos la informacion en el array del compente destino:

>     this.friends = this.userService.getFriends();
