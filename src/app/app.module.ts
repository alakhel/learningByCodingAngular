import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

//for formulaire
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule /**@API */ } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./components/app/app.component";
import { AiComponent } from "./components/ai/ai.component";
import { FormComponent } from "./components/form/form.component";
import { MrPipe } from "./pipes/mr.pipe";
import { PSortPipe } from "./pipes/p-sort.pipe";
import { MagnifyDirective } from "./directives/magnify.directive";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { SubjectComponent } from "./components/subject/subject.component";
import { HomeComponent } from "./components/home/home.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { ChatComponent } from "./components/chat/chat.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";

@NgModule({
  declarations: [
    AppComponent,
    AiComponent,
    FormComponent,
    MrPipe,
    PSortPipe,
    MagnifyDirective,
    NavigationComponent,
    SubjectComponent,
    HomeComponent,
    ProfileComponent,
    ChatComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [], //we can also import service here
  bootstrap: [AppComponent]
})
export class AppModule {}
