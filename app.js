var allStudents = [
    {
        rollNum: "ss123",
        name: "abc",
        course: "Web and Mobile",
        age: 18,
    },
    {
        rollNum: "ss124",
        name: "abd",
        course: "Web and Mobile",
        age: 19,
    },
    {
        rollNum: "ss125",
        name: "abe",
        course: "Web and Mobile",
        age: 17,
    },
    {
        rollNum: "ss126",
        name: "abf",
        course: "Web and Mobile",
        age: 16,
    },
    {
        rollNum: "ss127",
        name: "abg",
        course: "Web and Mobile",
        age: 20,
    },
    {
        rollNum: "ss128",
        name: "abh",
        course: "Web and Mobile",
        age: 21,
    },
    {
        rollNum: "ss129",
        name: "abi",
        course: "Web and Mobile",
        age: 22,
    },
    {
        rollNum: "ss130",
        name: "abj",
        course: "Web and Mobile",
        age: 15,
    },
    {
        rollNum: "ss131",
        name: "abk",
        course: "Web and Mobile",
        age: 23,
    },
    {
        rollNum: "ss132",
        name: "abl",
        course: "Web and Mobile",
        age: 24,
    },
];

var inp = document.getElementById("inp");
var text1 = document.getElementById("text1")
var text2 = document.getElementById("text2")
var text3 = document.getElementById("text3")
var text4 = document.getElementById("text4")

function searching() {
    for (var i = 0; i <= allStudents.length; i++) {
        if (inp.value == allStudents[i].rollNum || inp.value == allStudents[i].name) {
            text1.innerHTML = ("rollNum: " + allStudents[i].rollNum)
            text2.innerHTML = ("name: " + allStudents[i].name)
            text3.innerHTML = ("course: " + allStudents[i].course)
            text4.innerHTML = ("age: " + allStudents[i].age)
            inp.value = ""
        }
    }
}