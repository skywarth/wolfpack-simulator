


let diseaseTemplates=[];

class diseaseTemplate{//constant diseases array
    constructor(name){
        this.id=++diseaseTemplate.counter;
        this.name=name;
        //this.infectious=infectious;


    }
}
diseaseTemplate.counter=0;

function fillDiseaseTemplates() {
    diseaseTemplates.push(new diseaseTemplate("rabies"));
    diseaseTemplates.push(new diseaseTemplate("Canine distemper "));
    diseaseTemplates.push(new diseaseTemplate("canine hepatitis"));
    diseaseTemplates.push(new diseaseTemplate("Brucellosis"));
    diseaseTemplates.push(new diseaseTemplate("Lyme "));
    diseaseTemplates.push(new diseaseTemplate("Hookworm "));
    diseaseTemplates.push(new diseaseTemplate("Hydatid tapeworm"));

}

fillDiseaseTemplates();


class disease{//constant diseases array
    constructor(diseaseTemplate,infectious){
        this.diseaseTemplate=diseaseTemplate;
        this.infectious=infectious;


    }
}


class anatomicSizes{
    constructor(jaw,foreLegHeight,pawDiameter,skullDiameter){
        this.jaw=jaw;
        this.foreLegHeight=foreLegHeight;
        this.pawDiameter=pawDiameter;
        this.skullDiameter=skullDiameter;


    }
}



class definitiveFields{
    constructor(wolfTagID,wolfNickname, wolfAnatomicSizes,diseases,characteristics,furColorCode,eyeColorCode,age,familySet,strMark,agiMark,intMark){
        //characteristics is string array
        //familySet is biome object
        this.wolfTagID=wolfTagID;
        this.wolfNickname=wolfNickname;
        this.wolfAnatomicSizes=wolfAnatomicSizes;
        this.diseases=diseases;
        this.characteristics=characteristics;
        this.furColorCode=furColorCode;
        this.eyeColorCode=eyeColorCode;
        this.age=age;
        this.familySet=familySet;
        this.strMark=strMark;
        this.agiMark=agiMark;
        this.intMark=intMark;

        //
        this.hunger=0;
        this.alphaPoints=100;//to represent perfect alpha condition point for starters.
    }



}

class structuralFields{
    constructor(generationNumber,){
        //branchID not mandatory
        //branchName not mandatory
        //ancestors are object
        this.id=++structuralFields.counter;
        this.generationNumber=generationNumber;
        //this.maleAncestor=maleAncestor;
        //this.femaleAncestor=femaleAncestor;


    }

}

structuralFields.counter=0;



class wolf{

    constructor(definitiveFields,structuralFields){
        this.definitiveFields=definitiveFields;
        this.structuralFields=structuralFields;
    }

}

let wolves=[];









class environmentModel{

    constructor(biome,waterAvailability,temperature,rainFreq,greenDensity, climateBias,surroundings, wildCardWolves, predatorCount, predatorThreat, preyCount){
        this.id=++environmentModel.counter;
        this.biome=biome;
        this.waterAvailability=waterAvailability;
        this.temperature=temperature;
        this.rainFreq=rainFreq;
        this.greenDensity=greenDensity;
        this.climateBias=climateBias;
        this.surroundings=surroundings;
        this.wildCardWolves=wildCardWolves;
        this.predatorCount=predatorCount;
        this.predatorThreat=predatorThreat;
        this.preyCount=preyCount;
    }

}
environmentModel.counter=0;

class biome{

        constructor(name){
            this.name=name;
            this.id=++biome.counter;
            console.log(this.id);

         }

}
biome.counter=0;

var biomeTemplates=[];

function fillBiomeTemplates() {
    biomeTemplates.push(new biome("plains"));////
    biomeTemplates.push(new biome("forest"));///
    biomeTemplates.push(new biome("swamp"));
    biomeTemplates.push(new biome("jungle"));///
    biomeTemplates.push(new biome("taiga"));//
    biomeTemplates.push(new biome("tundra"));////
    biomeTemplates.push(new biome("desert"));
    biomeTemplates.push(new biome("arctic"));//

}

fillBiomeTemplates();

var found = biomeTemplates.find(function(element) {
    return element.name ="arctic";
});


console.log(found);

class simulationLog{

    constructor(date,eventType,message){
        this.id=++simulationLog.counter;
        this.date=date+" days after release";
        this.eventType=eventType;
        this.message=message;
    }

}
let simulationLogs=[];

simulationLog.counter=0;









