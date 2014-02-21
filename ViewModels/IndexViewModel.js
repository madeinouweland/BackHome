var IndexViewModel = function() {
    var self = this;
    this.PageName = ko.observable("Load Images");

    this.Files = ko.observableArray();

    this.openFolder = function(data, event) {
        var openfiles = Array.prototype.slice.call(event.target.files);

        openfiles.forEach(function(file) {
            reader = new FileReader();
            reader.onload = function (event) {
                var image=new GridImage();
                image.DataUrl=event.target.result;
                self.Files.push(image);
            };
            reader.readAsDataURL(file);
        });
    }
};