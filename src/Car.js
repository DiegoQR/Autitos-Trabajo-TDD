export class Car{
    constructor(xPos, yPos, direcction, limMatrix){
        this.xPos = xPos;
        this.yPos = yPos;
        this.direcction = direcction;
        this.limMatrix = limMatrix;
    }

    getPositionDirection(){
        var positionDirecction = [this.xPos, this.yPos, this.direcction];
        return positionDirecction;
    }

    
}