export class Stack{
   
    resultStack:any = [];
    index:number=0;

    setStack(val:any){
        this.resultStack.push(val)
        console.log(this.resultStack)
        console.log(this.index+" im at thi position")
        ++this.index;
    }

    getStack() {
        console.log(this.resultStack)
      }

    redoStack(){
        if(this.index==this.redoStack.length-1){
            return this.resultStack[++this.index]
        }else{
            return this.resultStack[this.index]
        }
    }

    undoStack(){
        if(this.index>0){
            --this.index;
            return this.resultStack[--this.index];
        }else{
            return this.resultStack[this.index]; 
        }
        
    }

}