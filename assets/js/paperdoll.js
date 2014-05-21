var Paperdoll = function(element){
    this.element = element;
    this.head = this.element.getAttribute('data-head');
    this.body = this.element.getAttribute('data-body');
    this.hair = this.element.getAttribute('data-hair');
    this.face = this.element.getAttribute('data-face');
    this.chin = this.element.getAttribute('data-chin');
    this.shirt = this.element.getAttribute('data-shirt');
    this.set('head', this.head, 1);
    this.set('body', this.head, 1);
    this.set('hair', this.head, 4);
    this.set('face', this.face, 3);
    this.set('chin', this.face, 3);
    this.set('shirt', this.face, 5);
};

Paperdoll.prototype.set = function(type, part, max){
    var part = part || Math.floor(Math.random() * max);
    var bodypart = document.createElement('div');
    bodypart.className = 'mpd-' + type + '-' + part;
    this.element.appendChild(bodypart);
};

var paperdolls = document.getElementsByClassName('js-module-paperdoll');
for(var i = 0; i < paperdolls.length; i++){
    new Paperdoll(paperdolls[i]);
}