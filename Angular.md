# Angular

## Routeo

Para activar el ruteo en angular, basta con definir una constante en el archivo app.module.ts:

~~~
const appRoutes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'conversation', component: ConversationComponent},
  {path: 'profile', component: ProfileComponent},
];
~~~
posteriormente inportar la constante en el mismo archivo:

 ~~~ 
    imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  ~~~


  Una vez declaradas la rutas de nuestra aplicacion, tenemos que inyectaros en nuestro html principal. Para ello añadimos una directiva en nuestro fichero app.component.html:

  ~~~
  <a [routerLink]="['/home']" routerLinkActive="router-link-active" >Home</a> |
<a [routerLink]="['/login']" routerLinkActive="router-link-active" >Login</a> |
<a [routerLink]="['/profile']" routerLinkActive="router-link-active" >Profile</a> |
<router-outlet></router-outlet>
~~~

