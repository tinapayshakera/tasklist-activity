import { Component } from '@angular/core';
import { HttpService } from '../http.service';
import { Post } from '../post';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  post!:Post[]

  constructor(private httpService:HttpService){}


  ngOnInit(){
    // console.log ('first component');
    this.httpService.getData('https://jsonplaceholder.typicode.com/posts')
    .subscribe(data => {
      //
      this.post = data as Post[];
    })
  }






  // @Input() firstInput: number = 0;

  // getFirstInput() {
  //   console.log(this.firstInput);
  // }
}
