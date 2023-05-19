export class Stack{
   
    resultStack:any = [];
    index:number=0;

    setStack(val:any){
        // this.resultStack.push(val)
        this.resultStack.splice(this.index+1,this.resultStack.length,val);
        console.log(this.resultStack)
        this.index=this.index+1;
        console.log(this.index+" im at thi position")
    }

    getStack() {
        console.log(this.resultStack)
      }

    redoStack(){
        if(this.index > this.resultStack.length-1){
            this.index-=1;}
       if(this.index<this.resultStack.length-1){
        this.index++;return this.resultStack[this.index];
       }else if(this.index==this.resultStack.length-1){
        return this.resultStack[this.resultStack.length-1];
       }        
    }

    undoStack(){
       
       if(this.index > this.resultStack.length-1){
        this.index-=1;
        console.log("first if   "+this.index);
       }
        if(this.index>0){
        console.log(this.index+" from undo stack before")
        this.index -=1;
        console.log(this.index +" from undo stack after")
        return this.resultStack[this.index ];
       }else if (this.index==0){
        return this.resultStack[0];
       }
    }

}


// const fruits = [24, 32, 39, 47, 54, 63];

// let index = 4;
// fruits.splice(index, fruits.length+1, "Lemon");