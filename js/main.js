const dscv = new DanhSachCV();
const cvht = new CongViecHoanThanh()
const validator = new Validator()
const getElm = (id) => document.getElementById(id);

// gender thêm mới công việc
var genderCV = function (arr) {
  var content = "";
  arr.map(function (cv, index) {
    content += `
    <div class="tableMain"> 
      <p>${cv}</p> 
      <div class='tableChild'> 
        <button id='delete' data-toggle="modal" data-target="#exampleModal" onclick='xoaCV("${cv}")'>
          <i class="fa fa-trash-alt"></i>
        </button>
        <button onclick="done('${cv}')">
          <i class="fa fa-check"></i>
        </button>
    </div>
    </div>
    `;
  });
  getElm('todo').innerHTML = content
};
// gender cho công việc hoàn thành
var genderCVHT = function (arr) {
  var content = "";
  arr.map(function (cv, index) {
    content += `
    <div class="tableMain"> 
      <p>${cv}</p> 
      <div class='tableChild'> 
        <button id='delete' data-toggle="modal" data-target="#exampleModal" onclick='xoaCVHT("${cv}")'>
          <i class="fa fa-trash-alt"></i>
        </button>
        <button id="done">
          <i class="fa fa-check"></i>
        </button>
    </div>
    </div>
    `;
  });
  getElm('completed').innerHTML = content
};
// thêm công việc
function themCV() {
  const newTask = getElm("newTask").value;
  
  let isValid = true;
  isValid = validator.kiemTraRong(newTask, 'error', "Vui lòng nhập công việc")
  if(!isValid) return
  dscv.themCongViec(newTask)
  genderCV(dscv.arr)
}
// Xóa công việc và công việc hoàn thành
function xoaCV(newTask) {
  dscv.xoaCongViec(newTask)
  genderCV(dscv.arr)
  setLocalStore()
}
function xoaCVHT(newTask) {
  cvht.xoaCongViec(newTask)
  genderCVHT(cvht.arr)
  setLocalStoreTow()
}
// Thêm công việc hoàn thành
function done(newTask) {
  debugger
  dscv.xoaCongViec(newTask)
  genderCV(dscv.arr)
  setLocalStore()
  cvht.hoanThanh(newTask)
  genderCVHT(cvht.arr)
  setLocalStoreTow()
}
// set localStore cho công việc hoàn thành
let setLocalStoreTow = function() {
  localStorage.setItem("CVHT", JSON.stringify(cvht.arr))
}
let geLocalStoreTow = function () {
  if(localStorage.getItem('CVHT')) {
    cvht.arr = JSON.parse(localStorage.getItem("CVHT")) 
    genderCVHT(cvht.arr)
  }
}
// set localStore ho thêm công việc
let setLocalStore = function() {
  localStorage.setItem("DSCV", JSON.stringify(dscv.arr))
}
let geLocalStore = function () {
  if(localStorage.getItem('DSCV')) {
    dscv.arr = JSON.parse(localStorage.getItem("DSCV")) 
    genderCV(dscv.arr)
  }
}
// sắp xếp a->z
function giamDan() {
  dscv.arr.sort()
  genderCV(dscv.arr)
  setLocalStore()
}
// sắp xếp z->a
function tangDan() {
  dscv.arr.reverse()
  genderCV(dscv.arr)
  setLocalStore()
}
geLocalStoreTow()
geLocalStore()
getElm("addItem").addEventListener("click", themCV);