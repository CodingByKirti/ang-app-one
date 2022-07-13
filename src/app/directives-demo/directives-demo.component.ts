import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-demo',
  templateUrl: './directives-demo.component.html',
  styleUrls: ['./directives-demo.component.css']
})
export class DirectivesDemoComponent implements OnInit {

  // status=false
  uname: string ="Kirti"
  favColor="red"


  colors =['red','green','yellow','blue','pink']
  bio=[
    {
      id:11,
      name:'Ridita'
    },
    {
      id:21,
      name:'Soumya'
    },
    {
      id:31,
      name:'Ridhaan'
    },
  ]



  applyTxtCol : boolean = false;
  appStyle : String ="red"

  constructor() { }

  ngOnInit(): void {
  }
  customCssObject={
    'class1' : true,
    'class2' : true
  }

    customStyleObject={'color':'blue','border':'15px dotted red','background-color':'teal'}

}
