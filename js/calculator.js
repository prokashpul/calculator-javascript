function outputData(data) {
    const outPut = document.getElementById('output');
    outPut.value += data;
}
document.getElementById('rest').addEventListener('click', function() {
    document.getElementById('output').value = '';
});
document.getElementById('zero').addEventListener('click', function() {
    outputData(0);
});
document.getElementById('dot').addEventListener('click', function() {
    outputData('.');
});
document.getElementById('equle').addEventListener('click', function() {
    try {
        let result = eval(document.getElementById('output').value);
        document.getElementById('output').value = result;
    } catch {
        alert('Somthing wrang please try again');
        document.getElementById('output').value = "";
    }


});
document.getElementById('one').addEventListener('click', function() {
    outputData(1);
});
document.getElementById('two').addEventListener('click', function() {
    outputData(2);
});
document.getElementById('three').addEventListener('click', function() {
    outputData(3);
});
document.getElementById('add').addEventListener('click', function() {
    outputData('+');
});
document.getElementById('four').addEventListener('click', function() {
    outputData(4);
});
document.getElementById('five').addEventListener('click', function() {
    outputData(5);
});
document.getElementById('six').addEventListener('click', function() {
    outputData(6);
});
document.getElementById('minus').addEventListener('click', function() {
    outputData('-');
});
document.getElementById('seven').addEventListener('click', function() {
    outputData(7);
});
document.getElementById('eight').addEventListener('click', function() {
    outputData(8);
});
document.getElementById('nine').addEventListener('click', function() {
    outputData(9);
});
document.getElementById('divition').addEventListener('click', function() {
    outputData('/');
});
document.getElementById('mulitipul').addEventListener('click', function() {
    outputData('*');
});
document.getElementById('modulas').addEventListener('click', function() {
    outputData('%');
});
document.getElementById('del').addEventListener('click', function() {

    const outPut = document.getElementById('output');
    outPut.value = outPut.value.slice(0, -1);

});