import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

allowNewServer: boolean = false;
serverCreationStatus: string = "Where is the server?";
serverCreated: boolean = false;
newServerName: string =  "name-placeholder";
servers = ['TestServer', 'TestServer2', 'TestServer3', 'TestServer'];

  constructor() {
  setTimeout(() => {
    this.allowNewServer = true;
  }, 2000);

 }

  ngOnInit() {
  }

onAddNewServer(){
this.serverCreationStatus = "New server has been created.";
this.serverCreated = true;
}

onUpdateServerName($event){
  // alert ('test');
  this.newServerName = $event.target.value;

}




}
