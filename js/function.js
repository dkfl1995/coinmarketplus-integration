!function(t){function e(e,i){this.element=e,this.options=t.extend({},o,i),this.load()}var o={placeholder:"Select options",columns:1,search:!1,searchOptions:{"default":"Search",showOptGroups:!1,onSearch:function(t){}},selectAll:!1,selectGroup:!1,minHeight:200,maxHeight:null,showCheckbox:!0,jqActualOpts:{},onLoad:function(e){t(e).hide()},onOptionClick:function(t,e){},maxWidth:null,minSelect:!1,maxSelect:!1},i=1;e.prototype={load:function(){var e=this;if("SELECT"!=e.element.nodeName||t(e.element).hasClass("jqmsLoaded"))return!0;t(e.element).addClass("jqmsLoaded"),t(e.element).after('<div class="ms-options-wrap"><button>None Selected</button><div class="ms-options"><ul></ul></div></div>');var o=t(e.element).next(".ms-options-wrap").find("> button:first-child"),i=t(e.element).next(".ms-options-wrap").find("> .ms-options"),s=i.find("> ul"),n=t(e.element).find("optgroup").length?!0:!1,l=null;"number"==typeof e.options.width?(i.parent().css("position","relative"),l=e.options.width):"string"==typeof e.options.width?(t(e.options.width).css("position","relative"),l="100%"):i.parent().css("position","relative");var a=t(window).height()-i.offset().top-20;if(e.options.maxHeight&&(a=t(window).height()-i.offset().top-20,a=a<e.options.minHeight?e.options.minHeight:maxheight),a=a<e.options.minHeight?e.options.minHeight:a,i.css({maxWidth:l,minHeight:e.options.minHeight,maxHeight:a,overflow:"auto"}).hide(),i.bind("touchmove mousewheel DOMMouseScroll",function(e){if(t(this).outerHeight()<t(this)[0].scrollHeight){var o=e.originalEvent,i=o.wheelDelta||-o.detail;t(this).outerHeight()+t(this)[0].scrollTop>t(this)[0].scrollHeight&&(e.preventDefault(),this.scrollTop+=0>i?1:-1)}}),t(document).off("click.ms-hideopts").on("click.ms-hideopts",function(e){t(e.target).closest(".ms-options-wrap").length||t(".ms-options-wrap > .ms-options:visible").hide()}),o.bind("mousedown",function(o){if(1!=o.which)return!0;if(t(".ms-options-wrap > .ms-options:visible").each(function(){t(this).parent().prev()[0]!=i.parent().prev()[0]&&t(this).hide()}),i.toggle(),i.is(":visible")){i.css("maxHeight","");var s=t(window).height()-i.offset().top-20;e.options.maxHeight&&(s=t(window).height()-i.offset().top-20,s=s<e.options.minHeight?e.options.minHeight:maxheight),s=s<e.options.minHeight?e.options.minHeight:s,i.css("maxHeight",s)}}).click(function(t){t.preventDefault()}),e.options.placeholder&&o.text(e.options.placeholder),e.options.search){s.before('<div class="ms-search"><input type="text" value="" placeholder="'+e.options.searchOptions["default"]+'" /></div>');var p=i.find(".ms-search input");p.on("keyup",function(){return t(this).data("lastsearch")==t(this).val()?!0:(t(this).data("lastsearch",t(this).val()),"function"==typeof e.options.searchOptions.onSearch&&e.options.searchOptions.onSearch(e.element),void s.find("li:not(.optgroup)").each(function(){var o=t(this).text();o.toLowerCase().indexOf(p.val().toLowerCase())>-1?t(this).show():t(this).hasClass("selected")||t(this).hide(),!e.options.searchOptions.showOptGroups&&t(this).closest("li.optgroup")&&(t(this).closest("li.optgroup").show(),t(this).closest("li.optgroup").find("li:visible").length?t(this).closest("li.optgroup").show():t(this).closest("li.optgroup").hide())}))})}e.options.selectAll&&s.before('<a href="#" class="ms-selectall global">Select all</a>'),i.on("click",".ms-selectall",function(e){if(e.preventDefault(),t(this).hasClass("global"))s.find("li:not(.optgroup)").filter(":not(.selected)").length?s.find("li:not(.optgroup)").filter(":not(.selected)").find('input[type="checkbox"]').trigger("click"):s.find('li:not(.optgroup).selected input[type="checkbox"]').trigger("click");else if(t(this).closest("li").hasClass("optgroup")){var o=t(this).closest("li.optgroup");o.find("li:not(.selected)").length?o.find('li:not(.selected) input[type="checkbox"]').trigger("click"):o.find('li.selected input[type="checkbox"]').trigger("click")}});var c=[];t(e.element).children().each(function(){if("OPTGROUP"==this.nodeName){var e=[];t(this).children("option").each(function(){e[t(this).val()]={name:t(this).text(),value:t(this).val(),checked:t(this).prop("selected")}}),c.push({label:t(this).attr("label"),options:e})}else{if("OPTION"!=this.nodeName)return!0;c.push({name:t(this).text(),value:t(this).val(),checked:t(this).prop("selected")})}}),e.loadOptions(c),n?(s.find("> li:not(.optgroup)").css({"float":"left",width:100/e.options.columns+"%"}),s.find("li.optgroup").css({clear:"both"}).find("> ul").css({"column-count":e.options.columns,"column-gap":0,"-webkit-column-count":e.options.columns,"-webkit-column-gap":0,"-moz-column-count":e.options.columns,"-moz-column-gap":0}),this._ieVersion()&&this._ieVersion()<10&&s.find("li.optgroup > ul > li").css({"float":"left",width:100/e.options.columns+"%"})):(s.css({"column-count":e.options.columns,"column-gap":0,"-webkit-column-count":e.options.columns,"-webkit-column-gap":0,"-moz-column-count":e.options.columns,"-moz-column-gap":0}),this._ieVersion()&&this._ieVersion()<10&&s.find("> li").css({"float":"left",width:100/e.options.columns+"%"})),i.on("click",'input[type="checkbox"]',function(){t(this).closest("li").toggleClass("selected");var o=i.parent().prev();o.find('option[value="'+t(this).val()+'"]').prop("selected",t(this).is(":checked")).closest("select").trigger("change"),"function"==typeof e.options.onOptionClick&&e.options.onOptionClick(),e._updatePlaceholderText()}),"function"==typeof e.options.onLoad?e.options.onLoad(e.element):t(e.element).hide()},loadOptions:function(e,o){o="boolean"==typeof o?o:!0;var i=this,s=t(i.element).next(".ms-options-wrap").find("> .ms-options > ul");o&&s.find("> li").remove();for(var n in e){var l=e[n],a=t("<li></li>");if(l.hasOwnProperty("options")){a.addClass("optgroup"),a.append('<span class="label">'+l.label+"</span>"),a.find("> .label").css({clear:"both"}),i.options.selectGroup&&a.append('<a href="#" class="ms-selectall">Select all</a>'),a.append("<ul></ul>");for(var p in l.options){var c=l.options[p],h=t("<li></li>").addClass("ms-reflow");i._addOption(h,c),a.find("> ul").append(h)}}else l.hasOwnProperty("value")&&(a.addClass("ms-reflow"),i._addOption(a,l));s.append(a)}s.find('.ms-reflow input[type="checkbox"]').each(function(e){if(t(this).css("display").match(/block$/)){var o=t(this).outerWidth();o=o?o:15,t(this).closest("label").css("padding-left",2*parseInt(t(this).closest("label").css("padding-left"))+o),t(this).closest(".ms-reflow").removeClass("ms-reflow")}}),i._updatePlaceholderText()},unload:function(){t(this.element).next(".ms-options-wrap").remove(),t(this.element).show(function(){t(this).css("display","").removeClass("jqmsLoaded")})},reload:function(){t(this.element).next(".ms-options-wrap").remove(),t(this.element).removeClass("jqmsLoaded"),this.load()},_updatePlaceholderText:function(){var e=this,o=t(e.element).next(".ms-options-wrap").find("> button:first-child"),i=t(e.element).next(".ms-options-wrap").find("> .ms-options"),s=i.parent().prev(),n=[];s.find("option:selected").each(function(){n.push(t(this).text())}),o.text(n.join(", "));var l=o.clone().css({display:"inline",width:"auto",visibility:"hidden"}).appendTo(i.parent()),a="undefined"!=typeof t.fn.actual?l.actual("width",e.options.jqActualOpts):l.width(),p="undefined"!=typeof t.fn.actual?o.actual("width",e.options.jqActualOpts):o.width();a>p?o.text(n.length+" selected"):n.length?o.text(n.join(", ")):o.text(e.options.placeholder),l.remove()},_addOption:function(e,o){e.text(o.name),e.prepend(t('<input type="checkbox" value="" title="" />').val(o.value).attr("title",o.name).attr("id","ms-opt-"+i)),o.checked&&(e.addClass("default"),e.addClass("selected"),e.find('input[type="checkbox"]').prop("checked",!0));var s=t("<label></label>").attr("for","ms-opt-"+i);e.wrapInner(s),this.options.showCheckbox||e.find('input[id="ms-opt-'+i+'"]').hide(),i+=1},_ieVersion:function(){var t=navigator.userAgent.toLowerCase();return-1!=t.indexOf("msie")?parseInt(t.split("msie")[1]):!1}},t.fn.multiselect=function(o){var i,s=arguments;return void 0===o||"object"==typeof o?this.each(function(){t.data(this,"plugin_multiselect")||t.data(this,"plugin_multiselect",new e(this,o))}):"string"==typeof o&&"_"!==o[0]&&"init"!==o?(this.each(function(){var n=t.data(this,"plugin_multiselect");n instanceof e&&"function"==typeof n[o]&&(i=n[o].apply(n,Array.prototype.slice.call(s,1))),"unload"===o&&t.data(this,"plugin_multiselect",null)}),i):void 0}}(jQuery);

$('#langOpt2').multiselect({
columns: 1,
placeholder: 'Select Languages',
search: true
});
 

$('#langOpt3').multiselect({
columns: 1,
placeholder: 'Select Category',
search: true
});

/******** Time-countdown******/
"use strict";"object"!=typeof window.CP&&(window.CP={}),window.CP.PenTimer={programNoLongerBeingMonitored:!1,timeOfFirstCallToShouldStopLoop:0,_loopExits:{},_loopTimers:{},START_MONITORING_AFTER:2e3,STOP_ALL_MONITORING_TIMEOUT:5e3,MAX_TIME_IN_LOOP_WO_EXIT:2200,exitedLoop:function(o){this._loopExits[o]=!0},shouldStopLoop:function(o){if(this.programKilledSoStopMonitoring)return!0;if(this.programNoLongerBeingMonitored)return!1;if(this._loopExits[o])return!1;var t=this._getTime();if(0===this.timeOfFirstCallToShouldStopLoop)return this.timeOfFirstCallToShouldStopLoop=t,!1;var i=t-this.timeOfFirstCallToShouldStopLoop;if(i<this.START_MONITORING_AFTER)return!1;if(i>this.STOP_ALL_MONITORING_TIMEOUT)return this.programNoLongerBeingMonitored=!0,!1;try{this._checkOnInfiniteLoop(o,t)}catch(o){return this._sendErrorMessageToEditor(),this.programKilledSoStopMonitoring=!0,!0}return!1},_sendErrorMessageToEditor:function(){try{if(this._shouldPostMessage()){var o={action:"infinite-loop",line:this._findAroundLineNumber()};parent.postMessage(JSON.stringify(o),"*")}else this._throwAnErrorToStopPen()}catch(o){this._throwAnErrorToStopPen()}},_shouldPostMessage:function(){return document.location.href.match(/boomerang/)},_throwAnErrorToStopPen:function(){throw"We found an infinite loop in your Pen. We've stopped the Pen from running. Please correct it or contact support@codepen.io."},_findAroundLineNumber:function(){var o=new Error,t=0;if(o.stack){var i=o.stack.match(/boomerang\S+:(\d+):\d+/);i&&(t=i[1])}return t},_checkOnInfiniteLoop:function(o,t){if(!this._loopTimers[o])return this._loopTimers[o]=t,!1;var i=t-this._loopTimers[o];if(i>this.MAX_TIME_IN_LOOP_WO_EXIT)throw"Infinite Loop found on loop: "+o},_getTime:function(){return+new Date}},window.CP.shouldStopExecution=function(o){var t=window.CP.PenTimer.shouldStopLoop(o);return t===!0&&console.warn("[CodePen]: An infinite loop (or a loop taking too long) was detected, so we stopped its execution. Sorry!"),t},window.CP.exitedLoop=function(o){window.CP.PenTimer.exitedLoop(o)};

$( document ).ready(function() {
  setInterval(function time(){
  var d = new Date();
  var hours = 24 - d.getHours();
  var min = 60 - d.getMinutes();
  if((min + '').length == 1){
    min = '0' + min;
  }
  var sec = 60 - d.getSeconds();
  if((sec + '').length == 1){
        sec = '0' + sec;
  }
  jQuery('#countdown #hour').html(hours);
  jQuery('#countdown #min').html(min);
  jQuery('#countdown #sec').html(sec);
}, 1000); });
/******** home banner animation ******/
"use strict";"object"!=typeof window.CP&&(window.CP={}),window.CP.PenTimer={programNoLongerBeingMonitored:!1,timeOfFirstCallToShouldStopLoop:0,_loopExits:{},_loopTimers:{},START_MONITORING_AFTER:2e3,STOP_ALL_MONITORING_TIMEOUT:5e3,MAX_TIME_IN_LOOP_WO_EXIT:2200,exitedLoop:function(o){this._loopExits[o]=!0},shouldStopLoop:function(o){if(this.programKilledSoStopMonitoring)return!0;if(this.programNoLongerBeingMonitored)return!1;if(this._loopExits[o])return!1;var t=this._getTime();if(0===this.timeOfFirstCallToShouldStopLoop)return this.timeOfFirstCallToShouldStopLoop=t,!1;var i=t-this.timeOfFirstCallToShouldStopLoop;if(i<this.START_MONITORING_AFTER)return!1;if(i>this.STOP_ALL_MONITORING_TIMEOUT)return this.programNoLongerBeingMonitored=!0,!1;try{this._checkOnInfiniteLoop(o,t)}catch(o){return this._sendErrorMessageToEditor(),this.programKilledSoStopMonitoring=!0,!0}return!1},_sendErrorMessageToEditor:function(){try{if(this._shouldPostMessage()){var o={action:"infinite-loop",line:this._findAroundLineNumber()};parent.postMessage(JSON.stringify(o),"*")}else this._throwAnErrorToStopPen()}catch(o){this._throwAnErrorToStopPen()}},_shouldPostMessage:function(){return document.location.href.match(/boomerang/)},_throwAnErrorToStopPen:function(){throw"We found an infinite loop in your Pen. We've stopped the Pen from running. Please correct it or contact support@codepen.io."},_findAroundLineNumber:function(){var o=new Error,t=0;if(o.stack){var i=o.stack.match(/boomerang\S+:(\d+):\d+/);i&&(t=i[1])}return t},_checkOnInfiniteLoop:function(o,t){if(!this._loopTimers[o])return this._loopTimers[o]=t,!1;var i=t-this._loopTimers[o];if(i>this.MAX_TIME_IN_LOOP_WO_EXIT)throw"Infinite Loop found on loop: "+o},_getTime:function(){return+new Date}},window.CP.shouldStopExecution=function(o){var t=window.CP.PenTimer.shouldStopLoop(o);return t===!0&&console.warn("[CodePen]: An infinite loop (or a loop taking too long) was detected, so we stopped its execution. Sorry!"),t},window.CP.exitedLoop=function(o){window.CP.PenTimer.exitedLoop(o)};
var refreshDuration = 10000;
var refreshTimeout;
var numPointsX;
var numPointsY;
var unitWidth;
var unitHeight;
var points;
function onLoad()
{
var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
svg.setAttribute('width',window.innerWidth);
svg.setAttribute('height',window.innerHeight);
var unitSize = (window.innerWidth+window.innerHeight)/20;
numPointsX = Math.ceil(window.innerWidth/unitSize)+1;
numPointsY = Math.ceil(window.innerHeight/unitSize)+1;
unitWidth = Math.ceil(window.innerWidth/(numPointsX-1));
unitHeight = Math.ceil(window.innerHeight/(numPointsY-1));
points = [];
for(var y = 0; y < numPointsY; y++) {if (window.CP.shouldStopExecution(2)){break;}if (window.CP.shouldStopExecution(2)){break;}
for(var x = 0; x < numPointsX; x++) {if (window.CP.shouldStopExecution(1)){break;}if (window.CP.shouldStopExecution(1)){break;}
points.push({x:unitWidth*x, y:unitHeight*y, originX:unitWidth*x, originY:unitHeight*y});
}
window.CP.exitedLoop(1);
window.CP.exitedLoop(1);
}
window.CP.exitedLoop(2);
window.CP.exitedLoop(2);
randomize();
for(var i = 0; i < points.length; i++) {if (window.CP.shouldStopExecution(4)){break;}if (window.CP.shouldStopExecution(4)){break;}
if(points[i].originX != unitWidth*(numPointsX-1) && points[i].originY != unitHeight*(numPointsY-1)) {
var topLeftX = points[i].x;
var topLeftY = points[i].y;
var topRightX = points[i+1].x;
var topRightY = points[i+1].y;
var bottomLeftX = points[i+numPointsX].x;
var bottomLeftY = points[i+numPointsX].y;
var bottomRightX = points[i+numPointsX+1].x;
var bottomRightY = points[i+numPointsX+1].y;
var rando = Math.floor(Math.random()*2);
for(var n = 0; n < 2; n++) {if (window.CP.shouldStopExecution(3)){break;}if (window.CP.shouldStopExecution(3)){break;}
var polygon = document.createElementNS(svg.namespaceURI, 'polygon');
if(rando==0) {
if(n==0) {
polygon.point1 = i;
polygon.point2 = i+numPointsX;
polygon.point3 = i+numPointsX+1;
polygon.setAttribute('points',topLeftX+','+topLeftY+' '+bottomLeftX+','+bottomLeftY+' '+bottomRightX+','+bottomRightY);
} else if(n==1) {
polygon.point1 = i;
polygon.point2 = i+1;
polygon.point3 = i+numPointsX+1;
polygon.setAttribute('points',topLeftX+','+topLeftY+' '+topRightX+','+topRightY+' '+bottomRightX+','+bottomRightY);
}
} else if(rando==1) {
if(n==0) {
polygon.point1 = i;
polygon.point2 = i+numPointsX;
polygon.point3 = i+1;
polygon.setAttribute('points',topLeftX+','+topLeftY+' '+bottomLeftX+','+bottomLeftY+' '+topRightX+','+topRightY);
} else if(n==1) {
polygon.point1 = i+numPointsX;
polygon.point2 = i+1;
polygon.point3 = i+numPointsX+1;
polygon.setAttribute('points',bottomLeftX+','+bottomLeftY+' '+topRightX+','+topRightY+' '+bottomRightX+','+bottomRightY);
}
}
polygon.setAttribute('fill','rgba(0,0,0,'+(Math.random()/3)+')');
var animate = document.createElementNS('http://www.w3.org/2000/svg','animate');
animate.setAttribute('fill','freeze');
animate.setAttribute('attributeName','points');
animate.setAttribute('dur',refreshDuration+'ms');
animate.setAttribute('calcMode','linear');
polygon.appendChild(animate);
svg.appendChild(polygon);
}
window.CP.exitedLoop(3);
window.CP.exitedLoop(3);
}
}
window.CP.exitedLoop(4);
window.CP.exitedLoop(4);

}
function randomize() {
for(var i = 0; i < points.length; i++) {if (window.CP.shouldStopExecution(5)){break;}if (window.CP.shouldStopExecution(5)){break;}
if(points[i].originX != 0 && points[i].originX != unitWidth*(numPointsX-1)) {
points[i].x = points[i].originX + Math.random()*unitWidth-unitWidth/2;
}
if(points[i].originY != 0 && points[i].originY != unitHeight*(numPointsY-1)) {
points[i].y = points[i].originY + Math.random()*unitHeight-unitHeight/2;
}
}
window.CP.exitedLoop(5);
window.CP.exitedLoop(5);
}
function refresh() {
randomize();
for(var i = 0; i < document.querySelector('#bg svg').childNodes.length; i++) {if (window.CP.shouldStopExecution(6)){break;}if (window.CP.shouldStopExecution(6)){break;}
var polygon = document.querySelector('#bg svg').childNodes[i];
var animate = polygon.childNodes[0];
if(animate.getAttribute('to')) {
animate.setAttribute('from',animate.getAttribute('to'));
}
animate.setAttribute('to',points[polygon.point1].x+','+points[polygon.point1].y+' '+points[polygon.point2].x+','+points[polygon.point2].y+' '+points[polygon.point3].x+','+points[polygon.point3].y);
animate.beginElement();
}
window.CP.exitedLoop(6);
window.CP.exitedLoop(6);
refreshTimeout = setTimeout(function() {refresh();}, refreshDuration);
}

window.onload = onLoad;

/**********To Top**********/
$(function(){
    $(document).on( 'scroll', function(){
        if ($(window).scrollTop() > 100) {
            $('.scroll-top-wrapper').addClass('show');
        } else {
            $('.scroll-top-wrapper').removeClass('show');
        }
    });
    $('.scroll-top-wrapper').on('click', scrollToTop);
});
function scrollToTop() {
    verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
    element = $('body');
    offset = element.offset();
    offsetTop = offset.top;
    $('html, body').animate({scrollTop: offsetTop}, 500, 'linear');
}
/**********Fixed Nav**********/
var nums = $('#header').offset().top;
$(window).scroll(function() {
	if ($(window).scrollTop() > nums) {
		$('#header').addClass('fixedNav');
	} else {
		$('#header').removeClass('fixedNav');
		nums = $('#header').offset().top;
	}
});
/**********Releted-product**********/
$(document).ready(function(){
$('#itemslider').carousel({ interval: 3000 });
$('.carousel-showmanymoveone .item').each(function(){
var itemToClone = $(this);
for (var i=1;i<5;i++) {
itemToClone = itemToClone.next();
if (!itemToClone.length) {
itemToClone = $(this).siblings(':first');
}
itemToClone.children(':first-child').clone()
.addClass("cloneditem-"+(i))
.appendTo($(this));
}
});
});
/**********Counter**********/
$('.counter').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 10000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
/**********Counter**********/
window.requestAnimationFrame = (function(){
return  window.requestAnimationFrame       ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame    ||
  function( callback ){
	window.setTimeout(callback, 1000 / 60);
  };
})();
/**********voting-slideContainer**********/
var speed = 5000;
(function currencySlide(){
var currencyPairWidth = $('.slideItem-voting:first-child').outerWidth();
$(".slideContainer").animate({marginLeft:-currencyPairWidth},speed, 'linear', function(){
		$(this).css({marginLeft:0}).find("li:last").after($(this).find("li:first"));
});
requestAnimationFrame(currencySlide);
})();


/**********rate-box**********/
jQuery(document).ready(function(e){e(".rate-circle-static-small40").rateCircle({size:40,valuePrefix:""}),e(".rate-circle-static-small").rateCircle({size:45,valuePrefix:""}),e(".rate-box-static-small").rateBox(),e(".rate-circle-static-medium").rateCircle({size:80,valueSufix:"%"}),e(".rate-box-static-medium").rateBox({width:150,height:150,valueSufix:"%"}),e(".rate-circle-static-small2").rateCircle({size:35,fontSize:11,valuePrefix:""}),e(".rate-circle-static-small3").rateCircle({size:50,fontSize:18,valuePrefix:""}),e(".rate-box-static-big").rateBox({width:200,height:200,valuePrefix:""}),e(".rate-circle").rateCircle({size:100,lineWidth:10,fontSize:10,referenceValue:100,valuePrefix:"",valueSufix:""}),e(".rate-box").rateBox({width:100,height:100,fontSize:30,referenceValue:100,valuePrefix:"",valueSufix:""}),e('input[id*="rate-circle"]').on("change mousemove",function(){e(".rate-circle").data("value",e("#rate-circle-value").val()),e(".rate-circle").rateCircle({size:e("#rate-circle-size").val(),lineWidth:e("#rate-circle-line-width").val(),fontSize:e("#rate-circle-font-size").val()})}),e('input[id*="rate-box"]').on("change mousemove",function(){e(".rate-box").data("value",e("#rate-box-value").val()),e(".rate-box").rateBox({width:e("#rate-box-width").val(),height:e("#rate-box-height").val(),fontSize:e("#rate-box-font-size").val()})})}),function(e){e.fn.rateCircle=function(t){var a=e.extend({size:10,lineWidth:6,fontSize:14,referenceValue:10,valuePrefix:"",valueSufix:""},t),i=a.size,r=i/2,l=r-a.lineWidth/2,c=a.lineWidth,s=a.fontSize,n=a.referenceValue,h=a.valuePrefix,o=a.valueSufix;e(this).html(""),e(this).append(["<canvas class='rate-circle-back' width='"+i+"' height='"+i+"'></canvas>","<canvas class='rate-circle-front' width='"+i+"' height='"+i+"'></canvas>"]),e(this).css({position:"relative",display:"block",width:i,height:i,margin:"0 auto","text-align":"center"}),e(this).each(function(){var t,a=e(this).data("value"),u=e(this).find(".rate-circle-back"),f=u.get(0).getContext("2d");t=10*a/n,f.lineWidth=c,u.addClass("rate-color-back"),f.strokeStyle=u.css("color"),f.arc(r,r,l,-Math.PI/180*90,2*Math.PI-Math.PI/180*90,!1),f.stroke();var v=e(this).find(".rate-circle-front"),d=v.get(0).getContext("2d");d.lineWidth=c,v.addClass("rate-color"+parseInt(t/10,0)),d.strokeStyle=v.css("color");var x=Math.PI*t*2/10;d.arc(r,r,l,-Math.PI/180*90,x-Math.PI/180*90,!1),d.stroke(),e(this).append("<span class='rate-circle-value'>"+h+a+o+"</span>"),e(this).find(".rate-circle-value").css({"line-height":i+"px","font-size":s+"px",color:d.strokeStyle})})},e.fn.rateBox=function(t){var a=e.extend({width:100,height:100,fontSize:30,referenceValue:10,valuePrefix:"",valueSufix:""},t),i=a.width,r=a.height,l=a.fontSize,c=a.referenceValue,s=a.valuePrefix,n=a.valueSufix;e(this).each(function(){var t,a,h=e(this).data("value");a="rate-gradient"+parseInt(10*h/c/10,0),e(this).html("<div></div>"),(t=e(this).find("div")).addClass(a),t.css({width:i+"px",height:r+"px",margin:"0 auto"}),t.append("<span class='rate-box-value'>"+s+h+n+"</span>"),e(this).find(".rate-box-value").css({"font-size":l+"px",height:r+"px","line-height":r+"px"})})}}(jQuery);