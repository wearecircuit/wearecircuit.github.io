var Paperdoll = function(element){
    this.element = element;

    // Body
    var shirtColoursClasses2 = ['js-bg-svg-02','js-bg-svg-03','js-bg-svg-04'];
    this.set('shirt', [], shirtColoursClasses2);


    // Shirt
    this.neck = this.element.getAttribute('data-neck');
    var necks = ['bowtie','round_neck','tie'];
    this.set(this.neck, necks);

    // Chest
    this.chest = this.element.getAttribute('data-chest');
    var chests = ['pen',''];
    var chestClasses = ['js-bg-svg-01'];
    this.set(this.chest, chests, chestClasses);

    // Chins
    this.chin = this.element.getAttribute('data-chin');
    var chins = ['moustache','freckles','beard','tired',''];
    this.set(this.chin, chins);

    this.head = this.element.getAttribute('data-head');
    this.body = this.element.getAttribute('data-body');
    this.hair = this.element.getAttribute('data-hair');
    this.eyes = this.element.getAttribute('data-eyes');



    var eyes = ['tired','round_glasses','glasses',''];
    var hairs = ['tophat','spinning_cap','side_parted','ponytail','hipster',''];


    this.set('body');
    this.set('head');
    this.set('left_eye');
    this.set('right_eye');
    this.set(this.hair, hairs);
    this.set(this.eyes, eyes);
};

Paperdoll.prototype.set = function(part, parts, styleClasses){
    if(part == "nothing") return false;

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
//
//var mouse = {x: 0, y: 0};
//
//document.addEventListener('mousemove', function(e){
//    mouse.x = e.clientX || e.pageX;
//    mouse.y = e.clientY || e.pageY
//}, false);
//
//setInterval(function(){
//
//    var elements = document.getElementsByClassName('icon-left_eye');
//
//    for(var i = 0; i < elements.length; i++){
//
//        var rect = elements[i].getBoundingClientRect();
//
//        if(rect.left > mouse.x){ elements[i].style.marginLeft = "-1px"; }
//        if(rect.left < mouse.x){ elements[i].style.marginLeft = "1px"; }
//        if(rect.left == mouse.x){ elements[i].style.marginLeft = "0"; }
//
//        if(rect.top > mouse.y){ elements[i].style.marginTop = "-1px"; }
//        if(rect.top < mouse.y){ elements[i].style.marginTop = "1px"; }
//        if(rect.top == mouse.y){ elements[i].style.marginTop = "0"; }
//
//    }
//
//    var elements = document.getElementsByClassName('icon-right_eye');
//
//    for(var i = 0; i < elements.length; i++){
//
//        var rect = elements[i].getBoundingClientRect();
//
//        if(rect.left > mouse.x){ elements[i].style.marginLeft = "-1px"; }
//        if(rect.left < mouse.x){ elements[i].style.marginLeft = "1px"; }
//        if(rect.left == mouse.x){ elements[i].style.marginLeft = "0"; }
//
//        if(rect.top > mouse.y){ elements[i].style.marginTop = "-1px"; }
//        if(rect.top < mouse.y){ elements[i].style.marginTop = "1px"; }
//        if(rect.top == mouse.y){ elements[i].style.marginTop = "0"; }
//
//    }
//
//},16);