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

    advanceCar(advancedSteps = 1){
        var newPosition;
        switch(this.direcction){
            case "N":
                newPosition = this.yPos + advancedSteps;
                if (newPosition >= 0 && newPosition <= this.limMatrix[1]){
                    this.yPos = newPosition;
                }
                break;
            case "S":
                newPosition = this.yPos - advancedSteps;
                if (newPosition >= 0 && newPosition <= this.limMatrix[1]){
                    this.yPos = newPosition;
                }
                break;
            case "E":
                newPosition = this.xPos + advancedSteps;
                if (newPosition >= 0 && newPosition <= this.limMatrix[1]){
                    this.xPos = newPosition;
                }
                break;
            case "O":
                newPosition = this.xPos - advancedSteps;
                if (newPosition >= 0 && newPosition <= this.limMatrix[1]){
                    this.xPos = newPosition;
                }
                break;
        }
    }
}