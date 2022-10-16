export class User {
    dasId:number;
    candidateName:string;
    password:string;
    totalExperience:string;
    age:string;
    relevantExperience:string;
    expectedLWD:string;
    location:string;
    skills:string;
    technology:string;
    maritalStatus:string;


    constructor(dasId:number,candidateName:string,password:string,totalExperience:string,age:string,relevantExperience:string,
        expectedLWD:string,location:string,skills:string,technology:string,maritalStatus:string)
    {
        this.dasId=dasId;
        this.candidateName=candidateName;
        this.password=password;
        this.totalExperience=totalExperience;
        this.age=age;
        this.relevantExperience=relevantExperience;
        this.expectedLWD=expectedLWD;
        this.location=location;
        this.skills=skills;
        this.technology=technology;
        this.maritalStatus=maritalStatus;
    }

}
