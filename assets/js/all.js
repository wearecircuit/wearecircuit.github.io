var Coworkers = function (element, options) {
    this.element = element;
    this.settings = options || {};

    this.data = this.unsort(this.settings.colleagues);
    this.data = this.data.splice(0, this.settings.limit);
    this.fragment = this.buildInnerHTML(this.data);
    this.render(this.fragment);

    return this;
};

Coworkers.prototype.unsort = function (data) {
    var clone = data.splice(0);
    return clone.sort(function () {
        return 0.5 - Math.random()
    });
};

Coworkers.prototype.buildInnerHTML = function (data) {
    var length = data.length;
    var fragment = '';
    while (length--) {
        fragment += '<li><img src="' + data[length] + '"/></li>'
    }
    return fragment;
};

Coworkers.prototype.render = function (fragment) {
    var element = document.createElement('ul');
        element.innerHTML = fragment;
    this.element.appendChild(element);
};


var options = {
    limit: 21,
    colleagues: [
        "http://distilleryimage8.ak.instagram.com/b2b38888a92711e3abc7128d2ce138bc_8.jpg",
        "http://distilleryimage1.ak.instagram.com/393075c2a92a11e3911612e64e142f0d_8.jpg",
        "http://distilleryimage4.ak.instagram.com/ecc13d02a92911e3a03912a975e2bfd0_8.jpg",
        "http://distilleryimage9.ak.instagram.com/cfd5ae9aa92811e387f812631f7314a1_8.jpg",
        "http://distilleryimage4.ak.instagram.com/f6940676a92811e3b666120af7cd0240_8.jpg",
        "http://distilleryimage2.ak.instagram.com/b5744fd2a92a11e3ad2312bb969afd0a_8.jpg",
        "http://photos-h.ak.instagram.com/hphotos-ak-ash/10013118_401597499984055_1566024372_n.jpg",
        "http://photos-h.ak.instagram.com/hphotos-ak-prn/1941151_843625522329719_1447752902_n.jpg",
        "http://distilleryimage7.ak.instagram.com/36623cdeade611e392091200855e15e3_8.jpg",
        "http://distilleryimage1.ak.instagram.com/2c32c6d2a92911e3bb3b12eecc678595_8.jpg",
        "http://distilleryimage3.ak.instagram.com/51b1b012a92911e3b19a128c0352f527_8.jpg",
        "http://distilleryimage11.ak.instagram.com/4034412ea92911e3b2560e8e979d90b7_8.jpg",
        "http://distilleryimage6.ak.instagram.com/155502a4a92911e3834d0e6c3792784e_8.jpg",
        "http://distilleryimage1.ak.instagram.com/a8c8fcb2a92811e3bee912f9f55f67dd_8.jpg",
        "http://distilleryimage11.ak.instagram.com/8d35acaca92811e3801e126c51d5de83_8.jpg",
        "http://distilleryimage10.ak.instagram.com/71ff69f0a92811e397e2122466b7dba2_8.jpg",
        "http://distilleryimage7.ak.instagram.com/53e3332aa92811e3a8ea12ab48d14c93_8.jpg",
        "http://photos-g.ak.instagram.com/hphotos-ak-ash/1922169_238838186300590_711050162_n.jpg",
        "http://distilleryimage6.ak.instagram.com/d038b3bca92a11e3a4ca12333d90277a_8.jpg",
        "http://distilleryimage7.ak.instagram.com/b2cd9166ade511e3861d0e55fd92b12f_8.jpg",
        "http://distilleryimage3.ak.instagram.com/69fc828eade611e380021275481ae0b7_8.jpg",
        "http://distilleryimage7.ak.instagram.com/5c41d50ab34911e3b2a31277b5c46073_8.jpg"
    ]
};
var element = document.getElementsByClassName('module-coworkers')[0];
if( element ){
    new Coworkers(element, options);
}