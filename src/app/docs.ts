/******************************************************************
 * @pipes
 * $ ng generate pipe pipe_name
 * have a methode transform(target: any, argv[]): any { return target*10%}
 *
 * use : {{value | pipe_name }}
 *
 * utility : its to apply something on value before show it.
 * predifined:
 * date, date:'short', date:'yMMMMEEEEd'
 *
 * use more that one : {value | pipe1 | pipe2} // !order is important
 *
 *
 * !important pipe : {value | async}
 * ******************************************************************
 */

/******************************************************************
 *  @directives structurelle et attribue
 *  $ ng generate directive directive_name
 *
 *  we use the constructor to apply changes,
 *  ** we can also add methods and event listener
 *  ** ** @HostListener('click') onClick() {}
 *  ** ** imported from '@anglur/core"
 *  use : <p directive_name >Bla! Bla!</p>
 *
 *  utility : apply changes on DOM for specific target
 *
 * exist déja : <p *ngIf="true">blabla</p>
 *
 *
 * /////////////////////////////////////////////par attribue:
 * <span [ngClass]="{
 *  "classs1" : true, ou un une fonction qui rend vrai ou faux
 *   "class2" : !true
 *  }"
 *
 * <h4 [ngStyle]="{color:getColor();}"></h4>
 * **while class appCom{ getColor():string{return true? "red";"green"} ... }
 */

/*******************************************************************
 * @data_binding
 * ** @Interpolation
 * ** au niveau de HTML use <p> {{ variables }} </p>
 * ** while : class AppComponent { variables = "bonjour"}
 *
 * **** <button [disabled]="isAuth()">valider</button> @property_binding
 * **** <button (click)="function()">sign in</button> @event_binding
 *
 * ** @getInput
 * ** <input ... [(ngModel)]="username"/> @two_way_binding its a directive
 * ** : we import FormsModule from '@angular/forms'
 * ** : we add it to imports
 * ** while : class AppComponent { username:''}
 *
 * ** @Input ()
 * ** we import Input from '@angular/core'
 * ** we add decorator:
 * ** class formComponent { @Input data: string; ... }
 * ** we we call <app-form data="heeeere!" ></app-form>
 * **********or  <app-form [data]="'heeeere!'" ></app-form>
 * **
 * ** or : we add vars from parents:
 * ** class parentComponents { v1="vvvvv"}
 * ** //parentHTML : <app-form [data]="v1!" ></app-form>
 *
 ********************************************************************
 */

/**
 * @Components
 *
 */

/**
 * @Services
 * we can crete class then import in appmodule and put it in providers
 * only if we didn't use @Injectable({ providedIn: "root"})
 * then we wanna use it we can instanciate an object into constructor
 * //import {serviceService} from '../services/serviceService'
 * //class a {constructor (private S:serviceService){ S.get();....}}
 */

/**
 * @Routing_
 * in app module: const appRoutes: Routes = [
 *             {path: 'route_sans_slash', componenet:''},
 *                 ...
 *                 ]
 * import  { RouterModule, Routes } from '@angular/router'
 * et au niveau de imports :
 *  ..., RouterModule.forRoot(appRoutes)
 *
 * we use <router-outlet></router-outlet>
 *
 * and for href we use routrLink="" that we import
 * routerLinkActive="active" can be added to the <li></li>
 */
/**
 * @auth
 * au niveau de constructeur we add (private router:Router){}
 *
 * this.router.navigate(commands: ['appareils']);
 *
 */
/**
 * @route_with_dataUrl
 * route avec data; profile/A704975 ==> profile/:DAS
 * on the target component : import { ActivatedRoute } from '@angular/router'
 * we passe it in constructor(private AR: ActivatedRoute)
 * in ngOnInit(){    this.key = this.route.snapshot.params['DAS']}
 * casting : (+String) = parseInt(String)
 */
/**
 * @_404_not_found
 * we add it in final cuz angular analysz par ordre
 * { path: "404", component: NotFoundComponent, pathMatch: "full" },
 * { path: "**", redirectTo: "/404" }
 */
/**
 * @AuthGard we name it withou service.
 *  we import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router'
 * @injectable() to add the ability to import another service into.
 * class AuthGard implements CanActivate {
 *  constructor(private auth:AuthService, private router:Router){}
 * canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<bolean> | Promise<boolean> | boolean{
 *  if(this.authService.isAuth) return true;
 *  else this.router.navigate(commands: ['/auth'])
 * }
 * }
 *
 *
 * //routing...
 *  {path: 'route_sans_slash', canActivate:[AuthGuard] componenet:''},
 */

/**
 * @Async
 */
/**
 * @Observable
 * emet data wich come from input or (HTTP)
 *
 *
 *  import {Obersvable} from 'rxjs/Obersvable;
 * import {Subscribtion} from 'rxjs/Subscribtion;
 *  import 'rxjs/Rx'; // we can import interval from this and use it directly
 * class...
 *  loginTime : number;
 *  ngOnInit(){
 *   const counter = Observable.interval(1000);
 *   counter.subscribe(
 *          next: (v: number)=>{this.loginTime = v}, //wich recieve data
 *          error: (err; any)=>console.log(err), // erreur
 *          complete: ()=>console.log('finish')  //
 *        )
 *  }
 *
 * @subscribe
 *  cSub:Subscribtion;
 *  ..ngOnInit...
 *      this.cSub = ccounter.subscribe(
 *          next: (v: number)=>{this.loginTime = v}, //wich recieve data
 *        )
 */
/**
 * @unsbscribe_and_onDestroy
 * \import and implements onDestroy
 * ngOndestroy(){ this.cSub.unsubscribe(); }
 */
/**
 * @subject au niveau de service
 * \import {Subject} from 'rxjs/Subject;
 * class...
 *  dataSubject = new Subject<any[]>();
 *  emitdataSubject(){ this.dataSubject.next(this.data)}
 * changement(){
 *   ...
 *      this.emitdataSubject(); //send data after change done in this ...(like rely on a request)
 * }
 *
 * \into component using the the service
 * we initialise the service and we subscribe to dataSubject;
 *  subID = this.serviceName.dataSubject.subscribe(next:(data)=>{this.data=data}); //then we add the function
 *  this.serviceName.emitdataSubject(); // this will call the function next
 */
/**
 * @Forms
 * \template:
 * <form (onSubmit)="submit(fid)"  #fid="ngForm">
 *  <input ... name="" ngModel required>
 *  <select [ngModel]="defaultVariablefromclass">...
 *  <button [disabled]="fid.invalid"></button>//button got disabled
 * ...
 * \class
 *  submit(form: Form){ \\import {ngForm} from "@angular/forms"
 *      console.log(form.value) //* {name: , password: } then we create it here this.user = ..
 */
/**
 * @Forms
 * \Reactive
 * we add folder:models=>class User{ constructor(private username:string, private pass:string){}
 * }
 * then we import user into a service.
 * class userservice {
 * private users: User[]
 * ...observale
 * }
 *
 * \import ReactFormsModule from @angular/form into appModule
 * ------------
 * \FormBuilder & FormGroup from angu/forms
 *  class newUSer {
 *  userForm : FromGroup;
 * constructor(private formbuilder: FormBuilder)
 *  ngOnInit(){
 *  this.initForm();
 *  }
 *  initForm(){
 *     this.userForm= this.formbuilder.group(controlsConfig: {username:'', pass:''});
 * or  this.formbuilder.group(controlsConfig: {username:['', Validators.required, Validators.email],
 *                               hobbies:this.formbuilder.array([])});
 * \can make my own validator
 *   }
 * onSubmit(){
 *   formValue = this.userForm.value;
 *    const newU = new User(formValue['username'], formvalue[hobbies]? repeatit:[])
 *  ////this.userForm.get('hobbies') as FormArray \wich import it too
 *  }
 * }
 *
 *  \HTML PART
 *  <form [formGroup]="userForm" (ngSubmit)="onSubmit()">
 *      <input ... formControlName="username" /> // doit correspendre au objet
 *
 *
 */
/**
 * @http
 in appmodule we import {HttpClientModule} from '@angular/http'
 * we add it to imorts, that let it accessible via all app.
 * in service:
 *   we import {HttpClient} from '@angular/http'
 * class nameService {
 *  constructor(private api:HttpClient){}
 * post(){
 * this.api.post('link/data.json', this.data)
 *      .subscribe(next:()=>{console.log('ok')}, error:(err)=>console.log()) // we'll add new one , put to erase the old
 * }
 * get(){
 *  this.api.get<any>(('link/data.json'))
 *          .subscribe(next:(data)=>{this.data = data})//don't forget emit
 * }
 * }
 */
