function DanhSachCV() {
    this.arr = []
    this.themCongViec = function(congViec) {
        this.arr.push(congViec)
    }
}
DanhSachCV.prototype.timViTri = function(newTask) {
    return this.arr.findIndex(function(item) {
        return newTask === item
    })
}
DanhSachCV.prototype.xoaCongViec =function(newTask) {
    var viTri = this.timViTri(newTask)
    if(viTri !== -1) {
        this.arr.splice(viTri, 1)
    }
}

function CongViecHoanThanh() {
    this.arr = []
    console.log(this.arr)
    this.hoanThanh = function(job) {
        this.arr.push(job)
    }
}
CongViecHoanThanh.prototype.timViTri = function(newTask) {
    return this.arr.findIndex(function(item) {
        return newTask === item
    })
}
CongViecHoanThanh.prototype.xoaCongViec =function(newTask) {
    var viTri = this.timViTri(newTask)
    if(viTri !== -1) {
        this.arr.splice(viTri, 1)
    }
}