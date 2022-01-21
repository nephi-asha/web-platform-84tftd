class StudentsInfo {
  constructor(Name, Age, Gender, Test1, Test2, Test3, Exams, Total, Grade) {
    this.Name = Name;
    this.Age = Age;
    this.Gender = Gender;
    this.Test1 = Test1;
    this.Test2 = Test2;
    this.Test3 = Test3;
    this.Exams = Exams;
    this.Total = Total;
    this.Grade = Grade;
  }
  names = () => this.Name;
  ages = () => this.Age;
  genders = () => this.Gender;
  tests1 = () => this.Test1;
  tests2 = () => this.Test2;
  tests3 = () => this.Test3;
  exams = () => this.Exams;
  total = () => this.Total;
  grades = () => {
    if (this.Grade >= 70) {
      return 'A';
    } else if (this.Grade >= 60 && this.Grade < 70) {
      return 'B';
    } else if (this.Grade >= 50 && this.Grade < 60) {
      return 'C';
    } else if (this.Grade >= 40 && this.Grade < 50) {
      return 'D';
    } else if (this.Grade >= 20 && this.Grade < 40) {
      return 'E';
    } else if (this.Grade >= 0 && this.Grade < 20) {
      return 'F';
    } else {
      return null;
    }
  };
}

let sdNames = document.querySelector('#sName');
let sdAge = document.querySelector('#sAge');
let sdGender = document.querySelector('#sGender');
let sdTest1 = document.querySelector('#Test1');
let sdTest2 = document.querySelector('#Test2');
let sdTest3 = document.querySelector('#Test3');
let sdExams = document.querySelector('#Exams');
let submitBtn = document.querySelector('#BTN');
let btn2 = document.querySelector('#BTNget');

const User = JSON.parse(localStorage.getItem('User')) || [];

submitBtn.addEventListener('click', () => {
  let value1 = sdNames.value;
  let value2 = sdAge.value;
  let value3 = sdGender.value;
  let value4 = Number.parseInt(sdTest1.value, 10);
  let value5 = Number.parseInt(sdTest2.value, 10);
  let value6 = Number.parseInt(sdTest3.value, 10);
  let value7 = Number.parseInt(sdExams.value, 10);
  let totals = value4 + value5 + value6 + value7;
  let grade = totals;

  let newInfo = new StudentsInfo(
    value1,
    value2,
    value3,
    value4,
    value5,
    value6,
    value7,
    totals,
    grade
  );
  // s_name.textContent          = newInfo.names()
  // s_age.textContent           = newInfo.ages()
  // s_gender.textContent        = newInfo.genders()
  // s_height.textContent        = newInfo.heights()
  // s_nation.textContent        = newInfo.nationalities()

  // tables.innerHTML = `
  // <tbody>
  //     <tr>
  //         <td id="name">${newInfo.names()}</td>
  //         <td id="age">${newInfo.ages()}</td>
  //         <td id="gender">${newInfo.genders()}</td>
  //         <td id="height">${newInfo.heights()}</td>
  //         <td id="nationality">${newInfo.nationalities()}</td>
  //     </tr>
  // </tbody>
  //         `

  saveInformations = () => {
    const regs = {
      myname: newInfo.names(),
      myage: newInfo.ages(),
      mygender: newInfo.genders(),
      myTest1: newInfo.tests1(),
      myTest2: newInfo.tests2(),
      myTest3: newInfo.tests3(),
      myExams: newInfo.exams(),
      myTotal: newInfo.total(),
      myGrade: newInfo.grades(),
    };
    console.log(regs);

    User.push(regs);
    User.splice(50);

    localStorage.setItem('User', JSON.stringify(User));
    window.location.assign('./index.html');
  };
  saveInformations();
});

btn2.addEventListener('click', () => {
  let tables = document.querySelector('#myTable');
  let infos = JSON.parse(localStorage.getItem('User')) || [];

  console.log(User);

  tables.innerHTML = infos
    .map((reg) => {
      return `

      <tr>
          <td>${reg.myname}</td>
          <td>${reg.myage}</td>
          <td>${reg.mygender}</td>
          <td>${reg.myTest1}</td>
          <td>${reg.myTest2}</td>
          <td>${reg.myTest3}</td>
          <td>${reg.myExams}</td>
          <td>${reg.myTotal}</td>
          <td>${reg.myGrade}</td>
      </tr>

          `;
    })
    .join('');

  console.log('Done!');
});
