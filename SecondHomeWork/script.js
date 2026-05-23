// დავალება University Control System

let name =prompt("Enter name");
let age =Number(prompt("Enter age"));
let score = Number(prompt("Enter the score"));
let faculty = prompt("Enter the faculty");
let projects = Number(prompt("Enter the completed project quantity"));
let premium = prompt("Is premium status?");
let blocked = prompt("Is blocked?");
let confirmed = confirm("Did you fill all fields?");
console.log(typeof confirmed)


blocked==="yes" ? console.warn("Student is blocked"): console.log("Student is not blocked");
age<18 ? console.error("Minor student"): console.log("The student is an adult");
!isNaN(age) ? console.log("Accepted") : console.log("Age field must be number");

if (blocked==="no" && confirmed===true && !isNaN(age)){
    if(age >= 18 && score > 90 && projects >= 5 && premium ==="yes"){
        console.log("VIP Access");
    }else if((score >= 70 && score < 90 && projects >=3 && projects <5) || (premium ==="yes" && age >=18)){
        console.log("Standard Access");
    }else if((score >= 50 && score < 70) || (projects >=2 && projects<3)){
        console.log("Limited Access");
    }else{
      alert("Access Denied");
    }
}else{
    document.write("Access Denied");
}


switch (faculty) {
    case "Programming":
        document.write("Programming Faculty")
        document.write(name)
        document.write(age)
        document.write(score)
        console.log(typeof name)
        break;
    case "Design":
        document.write("Design Faculty")
        document.write(name)
        document.write(age)
        document.write(score)
        document.write(projects)
        console.log(typeof name)
        break;
    case "Marketing":
        document.write("Marketing Faculty")
        document.write(name)
        document.write(age)
        console.log(typeof name)
        break;
    case "Business":
        document.write("Business Faculty")
        document.write(name)
        document.write(age)
        console.log(typeof name)
        break;
    default:
        alert("Unknown Faculty")
        break;
}