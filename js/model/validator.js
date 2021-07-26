function Validator() {
    this.kiemTraRong = function(value, spanId, mess) {
        if(!value) {
            getElm(spanId).style.display = 'block'
            getElm(spanId).innerHTML = mess
            return false
        }
        getElm(spanId).innerHTML = ''
        return true
    }
}