const student = [{
    "id": 1,
    "first_name": "Rockey",
    "last_name": "Chawkley",
    "email": "rchawkley0@ted.com",
    "gender": "Male",
    "ip_address": "199.16.173.22",
    "cgpa": 2.4
  }, {
    "id": 2,
    "first_name": "Jerrylee",
    "last_name": "Folomkin",
    "email": "jfolomkin1@accuweather.com",
    "gender": "Female",
    "ip_address": "198.30.176.210",
    "cgpa": 3.4
  }, {
    "id": 3,
    "first_name": "Salvador",
    "last_name": "Honacker",
    "email": "shonacker2@auda.org.au",
    "gender": "Male",
    "ip_address": "243.184.185.14",
    "cgpa": 2.5
  }, {
    "id": 4,
    "first_name": "Bary",
    "last_name": "McArte",
    "email": "bmcarte3@nasa.gov",
    "gender": "Male",
    "ip_address": "81.82.231.10",
    "cgpa": 2.1
  }, {
    "id": 5,
    "first_name": "Dalli",
    "last_name": "Whitcomb",
    "email": "dwhitcomb4@accuweather.com",
    "gender": "Genderqueer",
    "ip_address": "215.46.20.156",
    "cgpa": 3.9
  }, {
    "id": 6,
    "first_name": "Wilmar",
    "last_name": "Drakeford",
    "email": "wdrakeford5@princeton.edu",
    "gender": "Male",
    "ip_address": "177.1.118.97",
    "cgpa": 2.9
  }, {
    "id": 7,
    "first_name": "Catherine",
    "last_name": "Nutman",
    "email": "cnutman6@ox.ac.uk",
    "gender": "Female",
    "ip_address": "21.26.62.214",
    "cgpa": 2.9
  }, {
    "id": 8,
    "first_name": "Auguste",
    "last_name": "Ledingham",
    "email": "aledingham7@miibeian.gov.cn",
    "gender": "Female",
    "ip_address": "79.221.252.132",
    "cgpa": 4.0
  }, {
    "id": 9,
    "first_name": "Lane",
    "last_name": "Scramage",
    "email": "lscramage8@statcounter.com",
    "gender": "Male",
    "ip_address": "169.248.190.243",
    "cgpa": 3.7
  }, {
    "id": 10,
    "first_name": "Bennie",
    "last_name": "Regus",
    "email": "bregus9@wiley.com",   
    "gender": "Male",
    "ip_address": "141.33.76.141",
    "cgpa": 2.8
  }]



const studentCgpa = ()=>{
   return student.filter((x)=>{
        return x.cgpa > 3;
    }).map((y)=>{
        const studentList = document.getElementById('student-list');
        const CreateElement = document.createElement('li');
        CreateElement.innerText = y.first_name;
        studentList.appendChild(CreateElement);
    })
}
studentCgpa();

var x = [100,20];
var y = x;
y[0] = 2;
console.log(y);
console.log(x);




