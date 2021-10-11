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

    turnLeft(){
        switch(this.direcction){
            case "N":
                this.direcction = "O";
                break;
            case "S":
                this.direcction = "E";
                break;
            case "E":
                this.direcction = "N";
                break;
            case "O":
                this.direcction = "S";
                break;
        }
    }

    turnRight(){
        switch(this.direcction){
            case "N":
                this.direcction = "E";
                break;
            case "S":
                this.direcction = "O";
                break;
            case "E":
                this.direcction = "S";
                break;
            case "O":
                this.direcction = "N";
                break;
        }
    }

    advanceStep(advancedSteps = 1){
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