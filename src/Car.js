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

    isPositionValid(newPosition){
        return (newPosition[0] >= 0 && newPosition[0] <= this.limMatrix[0]) && (newPosition[1] >= 0 && newPosition[1] <= this.limMatrix[1])
    }

    advanceStep(advancedSteps = 1){
        switch(this.direcction){
            case "N":
                var newYPosition = this.yPos + advancedSteps;
                if (this.isPositionValid([this.xPos, newYPosition])){
                    this.yPos = newYPosition;
                }
                break;
            case "S":
                var newYPosition = this.yPos - advancedSteps;
                if (this.isPositionValid([this.xPos, newYPosition])){
                    this.yPos = newYPosition;
                }
                break;
            case "E":
                var newXPosition = this.xPos + advancedSteps;
                if (this.isPositionValid([newXPosition, this.yPos])){
                    this.xPos = newXPosition;
                }
                break;
            case "O":
                var newXPosition = this.xPos - advancedSteps;
                if (this.isPositionValid([newXPosition, this.yPos])){
                    this.xPos = newXPosition;
                }
                break;
        }
    }
}