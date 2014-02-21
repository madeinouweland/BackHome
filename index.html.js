var fileSelector = document.getElementById('fileSelector');

fileSelector.addEventListener('change', function() {
var files = Array.prototype.slice.call(fileSelector.files);
files.forEach(function(f) {
        console.log(f.name);
    });
}, false);
fileSelector.click();