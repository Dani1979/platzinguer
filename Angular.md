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