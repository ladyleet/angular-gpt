import { Component, Injector, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatCardModule, MatSlideToggleModule, MatCheckboxModule, MatButtonModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-scss-again';
  angularQuestionForm = new FormGroup({
    question: new FormControl('')
  });
  httpClient = inject(HttpClient);
  
  sendRequest(message: string) {
    try{
     (this.httpClient.post("http://localhost:3000/api/chat",{messages:[{content:message}]}).subscribe((data) => {console.log(data)}));
    }
    catch(e){
      console.log(e);
    }
  }

  onSubmitForForm() {
    console.log(this.angularQuestionForm.value);
    this.sendRequest(this.angularQuestionForm.value.question||'');  
  }

  onClickForPrePromptButtons(message: string) {
    this.sendRequest(message);  
  }
}
