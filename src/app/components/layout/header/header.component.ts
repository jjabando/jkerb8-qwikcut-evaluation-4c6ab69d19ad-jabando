import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() setVideo: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
    var btn = document.getElementsByClassName('hbtn').item(0);
    btn.id = 'selected';
    var side = document.getElementsByClassName('side').item(0);
    side.id = 'active';
  }
  selectVid(ind:number){
    
    //set color to indicate current video
    var btns = document.getElementsByClassName('hbtn');
    for(var i = 0; i < btns.length; i++){
      btns.item(i).id = '';
    }
    btns.item(ind).id = 'selected';

    //set color to indicate the active side
    var side = document.getElementsByClassName('side');
    if(ind < btns.length/2){
      side.item(0).id = 'activeside';
      side.item(1).id = '';
    }else{
      side.item(0).id = '';
      side.item(1).id = 'activeside';
    }

    this.setVideo.emit(ind);
  }
}
