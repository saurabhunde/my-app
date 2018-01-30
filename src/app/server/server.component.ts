import { Component } from "@angular/core";

@Component({
selector:'app-server',
templateUrl:'./server.component.html'
})

export class ServerComponent {
serverId:number = 10;
serverStatus:string ='offline';
allowNewServer = false;
getServerStatus(){
    return this.serverStatus;
};
constructor(){
setTimeout(() => {
    this.allowNewServer = true;
},2000);
};

}