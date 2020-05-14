import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdvancedComponent } from './advanced/advanced.component';
import { BeginnerComponent } from './beginner/beginner.component';

import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BlogLeftSideBarComponent } from './blog-left-side-bar/blog-left-side-bar.component';
import { BlogRightSideBarComponent } from './blog-right-side-bar/blog-right-side-bar.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { EventComponent } from './event/event.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventLeftSideBarComponent } from './event-left-side-bar/event-left-side-bar.component';
import { EventRightSideBarComponent } from './event-right-side-bar/event-right-side-bar.component';
import { FormComponent } from './form/form.component';
import { Form1Component } from './form1/form1.component';
import { FormtryComponent } from './formtry/formtry.component';
import { IndexComponent } from './index/index.component';
import { IntermediateComponent } from './intermediate/intermediate.component';
import { JournalComponent } from './journal/journal.component';
import { LoginComponent } from './login/login.component';
import { MailComponent } from './mail/mail.component';
import { MethodComponent } from './method/method.component';
import { RequestmodalComponent } from './requestmodal/requestmodal.component';
import { SignupComponent } from './signup/signup.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { StepComponent } from './step/step.component';
import { TeacherDetailsComponent } from './teacher-details/teacher-details.component';
import { TeachersComponent } from './teachers/teachers.component';
import { IndexFourComponent } from './index-four/index-four.component';
import { IndexFiveComponent } from './index-five/index-five.component';
import { HeaderComponent } from './header/header.component';


const routes: Routes = [{
  path: 'about',component: AboutComponent,

},
{ path: 'advanced',component: AdvancedComponent},
{ path: 'beginner',component: BeginnerComponent},
{ path: 'blog-details',component: BlogDetailsComponent},
{ path: 'blog-left-side-bar',component: BlogLeftSideBarComponent},
{ path: 'blog-right-side-bar',component: BlogRightSideBarComponent},
{ path: 'contact',component: ContactComponent},
{ path: 'courses',component: CoursesComponent},
{ path: 'event',component: EventComponent},
{ path: 'event-details',component: EventDetailsComponent},
{ path: 'event-left-side-bar',component: EventLeftSideBarComponent},
{ path: 'event-right-side-bar',component: EventRightSideBarComponent},
{ path: 'form',component: FormComponent},
{ path: 'form1',component: Form1Component},
{ path: 'formtry',component: FormtryComponent},
{ path: 'index',component: IndexComponent},
{ path: 'intermediate',component: IntermediateComponent},
{ path: 'journal',component: JournalComponent},
{ path: 'login',component: LoginComponent},
{ path: 'mail',component: MailComponent},
{ path: 'method',component: MethodComponent},
{ path: 'requestmodal',component: RequestmodalComponent},
{ path: 'signup',component: SignupComponent},
{ path: 'signup-form',component: SignupFormComponent},
{ path: 'step',component: StepComponent},
{ path: 'teacher-details',component: TeacherDetailsComponent},
{ path: 'teachers',component: TeachersComponent},
{ path: 'index-four',component: IndexFourComponent},
{ path: 'index-five',component: IndexFiveComponent},
{ path: 'header',component: HeaderComponent},
{path:'',redirectTo:'index',pathMatch:'full'},
{path: '**', redirectTo:'index'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
