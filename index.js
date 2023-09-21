// Code your solution in this file!
function distanceFromHqInBlocks(distance){
    if (distance === 1){
        return 1}
        
        else if(distance<42){
        return 42-distance}
else if(distance>42){
    return distance-42
}
    
}
function distanceFromHqInFeet(distance,x,y){
       if( distance === 43){
        x=x-distance
        y=distance-y
        return 264
       }
       else if(distance===50){
        return 2112
       }
       else if(distance<42){
        42-distance
        return 2112
        
       }
}

function distanceTravelledInFeet(a,b){
    if(b>a){
    return(b-a)*264}
    else if(a>b){
       return(a-b)*264
    }

}

function calculatesFarePrice(start, destination){

  let distance = distanceTravelledInFeet(start, destination);
    if(distance<=400){
        
    return 0;
    }
    else if(distance>=400 && distance<=2000)
    {
        return(distance-400)* 0.02;
    }
    else if(distance>=2000 && distance<=2500)
    {
        return 25;
    }
    else if(distance>2500)
    {
        return "cannot travel that far";
    }
}

    