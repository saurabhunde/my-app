import { Component } from "@angular/core";

@Component({
selector:'app-server',
templateUrl:'./server.component.html'
})

export class ServerComponent {
serverCreateStatus = 'No server created yet';
serverName = '';
allowNewServer = false;
getServerStatus(){
    return this.serverCreateStatus;
};
constructor(){
setTimeout(() => {
    this.allowNewServer = true;
},2000);
};

onServerCreate(){
this.serverCreateStatus = 'server was created = ' + this.serverName;
}
onUpdateServerName(event: any){
    this.serverName = event.target.value;
};
}