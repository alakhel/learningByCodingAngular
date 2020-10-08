import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
/**@imports */
import { HomeComponent } from "./components/home/home.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { ChatComponent } from "./components/chat/chat.component";
import { AiComponent } from "./components/ai/ai.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";

const routes: Routes = [
  { path: "chat", component: ChatComponent, pathMatch: "full" },
  { path: "", component: HomeComponent, pathMatch: "full" },
  { path: "profile/:key", component: ProfileComponent, pathMatch: "full" },
  { path: "ai", component: AiComponent, pathMatch: "full" },
  /** @404_manage */
  { path: "404", component: NotFoundComponent, pathMatch: "full" },
  { path: "**", redirectTo: "/404" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
