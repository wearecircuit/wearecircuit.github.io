var Paperdoll = function(element){
    this.element = element;


    // Shirt
    this.shirt = this.element.getAttribute('data-shirt');
    var shirts = ['bowtie','pen','round_neck','tie'];
    var shirtColoursClasses = ['js-bg-svg-01','js-bg-svg-02'];
    var shirtColoursClasses2 = ['js-bg-svg-03','js-bg-svg-04'];

    this.head = this.element.getAttribute('data-head');
    this.body = this.element.getAttribute('data-body');
    this.hair = this.element.getAttribute('data-hair');
    this.face = this.element.getAttribute('data-face');
    this.chin = this.element.getAttribute('data-chin');

    var chins = ['moustache','freckles','beard','tired',''];
    var faces = ['tired','round_glasses','glasses',''];
    var hairs = ['tophat','spinning_cap','side_parted','ponytail','hipster',''];


    this.set('shirt', [], shirtColoursClasses2);
    this.set('body');
    this.set('head');
    this.set(this.hair, hairs);
    this.set(this.face, faces);
    this.set(this.chin, chins);
    this.set(this.shirt, shirts, shirtColoursClasses);
};

Paperdoll.prototype.set = function(part, parts, styleClasses){
    var part = part || parts[Math.floor(Math.random() * parts.length)];
    var styleClass = '';
    if( styleClasses ){
    styleClass =styleClasses[Math.floor(Math.random() * styleClasses.length)];
    }
    var html = '<svg class="icon icon-' + part + ' ' + styleClass + '" viewBox="0 0 85 128"><use xlink:href="#icon-' + part + '"></use></svg>';
    this.element.innerHTML += html;
};

var paperdolls = document.getElementsByClassName('js-module-paperdoll');
for(var i = 0; i < paperdolls.length; i++){
    new Paperdoll(paperdolls[i]);
}