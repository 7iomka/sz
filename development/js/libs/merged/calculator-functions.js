//calculator-functions.js
var MAX_W = 3210;
var MAX_H = 2250;
var MAX_D = 2200;
var MIN_D = 150;

var MAX_CNT =1000;

/**
 * AddToBookmark
 */
function AddToBookmark(a){
 title=document.title;
   url=document.location;
   try {
     // Internet Explorer
     window.external.AddFavorite(url, title);
   }
   catch (e) {
     try {
       // Mozilla
       window.sidebar.addPanel(title, url, "");
     }
     catch (e) {
       // Opera
       if (typeof(opera)=="object") {
         a.rel="sidebar";
         a.title=title;
         a.url=url;
         return true;
       }
       else {
         // Unknown
         alert('Нажмите Ctrl-D чтобы добавить страницу в закладки');
       }
     }
   }
   return false;
}

/**
 *  Return part of a string
 *
 * @param  {String} f_string
 * @param  {Number} f_start
 * @param  {Number} f_length
 * @return {String}
 */
function substr( f_string, f_start, f_length ) {
 //
 // +	 original by: Martijn Wieringa

 if(f_start < 0) {
   f_start += f_string.length;
 }

 if(f_length == undefined) {
   f_length = f_string.length;
 } else if(f_length < 0){
   f_length += f_string.length;
 } else {
   f_length += f_start;
 }

 if(f_length < f_start) {
   f_length = f_start;
 }

 return f_string.substring(f_start, f_length);
}

/**
 * [loadQTips description]
 * @param  {[type]} selector [description]
 * @return {[type]}          [description]
 */
function loadQTips(selector) {

    var isFixed = true,
        my = 'center left',
        at = 'center right',
        viewport = $('body'),
        method = 'shift none',
        offsetX = 0,
        offsetY = 0;

      if(isMobile.any || Modernizr.touchevents) {
        isFixed = false;
        my = 'bottom left';
        at = 'bottom right';
        viewport = $('calculator__steps__line');
        method = 'flip flip';
        offsetX = -5;
        offsetY = -10;
      }
    $(selector).each(function() {


         $(this).qtip({
            style: {
                classes: 'qtip-bootstrap',
                tip: {
                    border: 2,
                    width: 19,
                    height: 13,
                }
            },


            show: {
                // solo: true,
                solo: $('.qtips'),
                effect: function() {
                    $(this).slideDown();
                }
            },
            hide: {
                fixed: isFixed,
                delay: 300,
                effect: function() {
                    $(this).fadeOut();
                },
                // event: false
            },
            position: {
                my: my, // Position my top left...
                at: at,
                //  viewport: $(this).closest('.step'),
                //  target: $(document),
                viewport: viewport,
                adjust: {
                    method: method,
                    x: offsetX,
                    y: offsetY,
                    resize: true // Can be ommited (e.g. default behaviour)

                    /*  mouse: false,*/
                }

            },
            content: {
                title: $(this).find('.qtip_title'),
                text: $(this).find('.qtip_description'),
                button: true
            },
            events: {
                show: function(event, api) {


                    // $(this).find('a.qtip-close').on('click touch', function () {
                    // alert('Мы закрыли');
                    //   console.log(api, 'api');
                    //
                    // })

                }
            }


        });
        });


}

function change_cnt(num){
    var num = parseInt(num);
    var val = parseInt($('#cnt').val());
    if(!val){ val = 1;}

    if(val>=1 && val <= MAX_CNT){
     $('#cnt').val(val+num);
    }
    val = parseInt($('#cnt').val());
    if(val < 1){
     $('#cnt').val(1);
    }
    else if(val > MAX_CNT){
     $('#cnt').val(MAX_CNT);
    }
    Raschet();
}

function checkInputs(block){
  switch(block){
 case "form1":
  var w = parseInt($('#form1_w_s').val());
  var h = parseInt($('#form1_h_s').val());
  if(w && h && ((w <= MAX_W && h <= MAX_H) || (w <= MAX_H && h <= MAX_W))){
   $('#block5 div.shadow').addClass('shadow-hidden');
   Raschet();
  }
  else if(w == 0 || h == 0){
   $('#block5 div.shadow').removeClass('shadow-hidden')/*.show()*/;
  }
  else{
   if(w > MAX_W){
    $('#form1_w_s').val(substr($('#form1_w_s').val(),0,-1));
   }
   else if(h > MAX_W){
    $('#form1_h_s').val(substr($('#form1_h_s').val(),0,-1));
   }
   else if(w > MAX_H){
    if(h > MAX_H){
     $('#form1_h_s').val(substr($('#form1_h_s').val(),0,-1));
    }
   }

   //$('#block5 div.shadow').removeClass('shadow-hidden')/*.show()*/;
  }
 break;
 case "form2":
  var d = parseInt($('#form2_diametr').val());
  if(d && d <= MAX_D && d >= MIN_D){
   $('#block5 div.shadow').addClass('shadow-hidden');
   Raschet();
  }
  else{
   if(d > MAX_D){
    //$('#form2_diametr').val(substr($('#form2_diametr').val(),0,-1));
    //$('#block5 div.shadow').removeClass('shadow-hidden')/*.show()*/;
   }
   if(d < MIN_D){
    //$('#form2_diametr').val(MIN_D);
    //$('#block5 div.shadow').removeClass('shadow-hidden')/*.show()*/;
   }
   $('#block5 div.shadow').removeClass('shadow-hidden')/*.show()*/;
  }
 break;
 case "form3":
  var w = parseInt($('#form3_w_s').val());
  var h = parseInt($('#form3_h_s').val());
  if(w && h && ((w <= MAX_W && h <= MAX_H) || (w <= MAX_H && h <= MAX_W))){
   $('#block5 div.shadow').addClass('shadow-hidden');
   Raschet();
  }
  else if(w == 0 || h == 0){
   $('#block5 div.shadow').removeClass('shadow-hidden')/*.show()*/;
  }
  else{
   if(w > MAX_W){
     $('#form3_w_s').val(substr($('#form1_w_s').val(),0,-1));
   }
   else if(h > MAX_W){
    $('#form3_h_s').val(substr($('#form1_h_s').val(),0,-1));
   }
   else if(w > MAX_H){
    if(h > MAX_H){
     $('#form3_h_s').val(substr($('#form1_h_s').val(),0,-1));
    }
   }
  }
 break;
}
}

// setBlock
// Пример использования setBlock(3);
// for (var i=3; i<=9; i++){
// открывает 3 блок и дальше, обнуляет все инпуты, выключает их, ресетит все чекбоксы и радиобуттоны
// количество выбранное на последнем шаге ставит по дефолту на 1шт
// в конце один раз выполнил колбэк
// }

function setBlock(num, callback) {
  var callback = callback || function() {};
  for(var i=num; i<=9; i++){
     if($('#block' + i + ' div.shadow').is(':hidden')){  //  if($('#block' + i + ' div.shadow').hasClass('shadow-hidden')) {}

       $('#block' + i + ' div.shadow').removeClass('shadow-hidden');/*.show()*/
       $('#block' + i + ' input[type=text]').val("");
       $('#block' + i + ' input[type=text]').attr("disabled","true");
       $('#block' + i + ' input[type=checkbox]').removeAttr("checked");
       $('#block' + i + ' input[type=radio]').removeAttr("checked");

       $('#cnt').val("1");
     }
    }
    callback();
  }



function loadMaterialImage(k, callback){
  var callback = callback || function() {}
  var src_id = 'radio-b2-1-' + k;
  var src = '/img/images_materials/' + $('#' + src_id).attr('data-img-src');
  //alert(src);
  $('#material_image > img').attr('src',src);
  $('#material_image').show();
  callback();
}

function loadMaterials(id_material,block,callback){
  var callback = callback || function() {}
    var err = true;
    //$('#' + block).unblock();
    if(!id_material){
     return;
    }

    switch(parseInt(id_material)){
    case 1:
     $("#div-b6-5").hide();
     $("#div-b6-6").show();
     $("#el_harding").show();
    break;
    case 2:
     $("#div-b6-6").hide();
     $("#div-b6-5").show();
     $("#el_harding").hide();
    break;
    }
    var err = true;
      $.ajax({
       url: '/ajax.php',
       dataType: 'json',
       type: 'POST',
       data: {
         task: "getMaterials",
         id_material: id_material
       },
       timeout: 10000,
       beforeSend: function(){
        $('#' + block).html();
       },
       ajaxError: function(){
        if(err == true){
        }
       },
       complete: function(){
        if(err == true){
        }
       },
       success: function (data) {
           err = false;
           if(data.is_err == 0){
            var txt_h2 = '<p class="title qtip_title">' + data.type_material + '</p>';
            var txt = "";
            //txt += "<div class='row view-1'><div class='col-sm-6'>";
            for(var i=0; i<data.materials.length; i++){
             var k = i+1;

             txt += '<div class="input-wrapper clearfix">';
             txt += '<input id="radio-b2-1-' + data.materials[i].id +'" data-material-id="' + data.materials[i].id + '" data-harding="' + data.materials[i].harding + '" data-img-src="' + data.materials[i].image + '" onChange="loadMaterialImage(' + data.materials[i].id + ');loadTypes(' + data.materials[i].id + ',\'block3\');setBlock(4);Raschet();" name="radio-b2" type="radio" />';
             txt += '<label for="radio-b2-1-' + data.materials[i].id + '"></label>\n';
             txt += '<label for="radio-b2-1-' + data.materials[i].id + '">' + data.materials[i].name + '</label>';
             txt += '<div class="question question_materials">';
             txt += '<div class="qtip_content">';
               txt += '<p class="title qtip_title">' + data.materials[i].tip_title + '</p>';
               txt += '<div class="qtip_description">';
                   txt += '<div class="tip_div">' + data.materials[i].tip_text + '</div>';
                   if(data.materials[i].image != ""){
                     txt += '<img src="/img/images_materials/' + data.materials[i].image + '" />';
                   }
               txt += '</div>';
             txt += '</div>';
             txt += '</div>';
             txt += '</div>';
            }
            //txt += "</div>";
            //var txt_img = "<div id='material_image' class='col-sm-6 second' style='display: block;'><img src='/images_materials/" + data.materials[0].image + "'></div>";
            var txt_img = "";
            //txt += txt_img + "</div>";

            $('#block2_cont').html("");
            $('#block2_cont').html(txt_h2 + txt);

            $('#' + block + ' div.shadow').addClass('shadow-hidden');
            loadQTips('.question_materials');


            callback();

           }


       }
     });
}

function check_harding(i){
    var attr = $('#checkbox-b6-1').attr('disabled');
    var harding = parseInt($("input[name=radio-b2]:checked").attr('data-harding'));

    if(i == 0){
     $('#checkbox-b6-1').attr('checked',false);
     $('#checkbox-b6-1').attr('disabled',true);
    }
    else if(harding){
     $('#checkbox-b6-1').attr('disabled',false);
    }
}

function loadFacet(depth, callback){
  var callback = callback || function() {}
 var err = true;
 //alert(depth);
 if(parseInt(depth) < 6){
  $("#checkbox-b6-6").attr("disabled",true);
 }
 else{
  $("#checkbox-b6-6").attr("disabled",false);
 }
  $.ajax({
   url: '/ajax.php',
   dataType: 'json',
   type: 'POST',
   data: {
     task: "getFacet",
     depth: depth
   },
   timeout: 10000,
   beforeSend: function(){
    $('#polirov_block').html("");
   },
   ajaxError: function(){
    if(err == true){
    //  alert(1);
    console.log(1, 'error ajaxError getFacet');
    }
   },
   complete: function(){
    if(err == true){
    //  alert(2);
    console.log(2, 'error on complete getFacet');
    }
   },
   success: function (data) {
       err = false;
       var arrNum = new Array('first','second','third','fourth','fifth');
       var txt = "";
       var txt_f = "";

       // if noErrors && exist data.nofacet_arr
       if(data.is_err == 0 && data.nofacet_arr && data.nofacet_arr.length){

        for(var i=0; i<data.nofacet_arr.length; i++){
         var k=i+1;
         if(i==0){ var check = "checked"; }else{ check = ""; }
           var img_src = data.nofacet_arr[i].image;
           txt += "<div class='input-wrapper clearfix'>";
           txt += "<input data-i='" + i + "' data-id ='" + data.nofacet_arr[i].id + "' data-img-src='" + data.nofacet_arr[i].image + "' id='radio-b5-" + data.nofacet_arr[i].id + "' onChange=\"check_harding(" + i + ");setBlock(7);$('#block6 div.shadow').addClass('shadow-hidden');$('#block7 div.shadow').addClass('shadow-hidden');check_dates_calc();Raschet();\" name='radio-b5' type='radio'>";
           txt += "<label for='radio-b5-" + data.nofacet_arr[i].id + "'></label>\n";
           txt += "<label for='radio-b5-" + data.nofacet_arr[i].id + "'>" + data.nofacet_arr[i].name + "</label>";
           txt += "<div class='question question_facet'>";
               txt += '<div class="qtip_content">';
                 txt += '<p class="title qtip_title">' + data.nofacet_arr[i].facet_tip_title + '</p>';
                 txt += '<div class="qtip_description">';
                     txt += '<div class="tip_div">' + data.nofacet_arr[i].facet_tip_text + '</div>';
                     if(data.nofacet_arr[i].image != ""){
                       txt += '<img src="/img/images_polirov/' + data.nofacet_arr[i].image + '" />';
                     }
                 txt += '</div>';
               txt += '</div>';
           txt += "</div>";
           txt += "</div>"; // input-wrapper end
        }

       }

       if(data.is_err == 0 && data.facet_arr && data.facet_arr.length){
         console.log(data.facet_arr[0]);
        txt_f += "<div class='input-wrapper clearfix'>";
            txt_f += "<input id='radio-b5-facet' name='radio-b5' type='radio' onClick=\"setBlock(7);$('#block6 div.shadow').addClass('shadow-hidden');$('#block7 div.shadow').addClass('shadow-hidden');check_dates_calc();Raschet();\">";
            txt_f += "<label for='radio-b5-facet'></label>\n";
            txt_f += "<label for='radio-b5-facet'>Фацет</label>";

            // txt_f += "<select style='margin-left: 25px;' name='b5-select' id='b5-select' onChange=\"setBlock(7);$('#block6 div.shadow').hide();$('#block7 div.shadow').hide();check_dates_calc();Raschet();\">";
            //
            // for(var i=0; i<data.facet_arr.length; i++){
            //  var k=i+1;
            //    var img_src = data.facet_arr[i].image;
            //    txt_f += "<option  data-i='" + i + "' data-id ='" + data.facet_arr[i].id + "' data-img-src='" + data.facet_arr[i].image + "' id='radio-b5-" + data.facet_arr[i].id + "' value='" + data.facet_arr[i].id + "'>" + data.facet_arr[i].name + "</option>";
            // }
            // txt_f += "</select>";



              txt_f += "<div class='question question_facet'>"; // start question
               txt_f += '<div class="qtip_content">'; // start qtip_content
                     txt_f += '<p class="title qtip_title">' + data.facet_arr[0].facet_tip_title + '</p>';
                     txt_f += '<div class="qtip_description">';
                         txt_f += '<div class="tip_div">' + data.facet_arr[0].facet_tip_text + '</div>';
                         if(data.facet_arr[0].image != ""){
                             txt_f += '<img src="/img/images_polirov/' + data.facet_arr[0].image + '" />';
                         }
                     txt_f += '</div>';
               txt_f += '</div>'; // end qtip_content
              txt_f += "</div>"; // end  question

              // start facet list
              txt_f += "<div class='radio-like-checkbox-container'>";
                  for(var i=0; i<data.facet_arr.length; i++){
                     var k=i+1;
                     var img_src = data.facet_arr[i].image;
                      txt_f += "<div class='radio-like-checkbox-wrapper'>";
                        txt_f += "<input type='radio' name='b5-select' class='radio-like-checkbox' data-i='" + i + "' data-id ='" + data.facet_arr[i].id + "' data-img-src='" + data.facet_arr[i].image + "' id='radio-b5-" + data.facet_arr[i].id + "' value='" + data.facet_arr[i].id + "' onChange=\"setBlock(7);$('#block6 div.shadow').addClass('shadow-hidden');$('#block7 div.shadow').addClass('shadow-hidden');check_dates_calc();Raschet();\"/>";
                        txt_f += "<label class='label_radio-like-checkbox' for='radio-b5-" + data.facet_arr[i].id + "'>" + data.facet_arr[i].name + "</label>";
                      txt_f += "</div>";
                   }
               txt_f += "</div>"
              // --end facet list


            txt_f += "</div>"; // input-wrapper end
       }

       $('#block5_cont').html("");
       $('#block5_cont').html(txt + txt_f);
       //return(data);

       loadQTips('.question_facet');
        callback();
   }
 });
}

function loadTypes(id_material, block, callback){
    var callback = callback || function() {};
    var id_material = parseInt(id_material);
    var harding = parseInt($('#radio-b2-1-' + id_material).attr('data-harding'));

    if(!harding){
     $('#checkbox-b6-1').attr('checked',false);
     $('#checkbox-b6-1').attr('disabled',true);
    }
    else{
     $('#checkbox-b6-1').attr('disabled',false);
    }

    var err = true;
      $.ajax({
       url: '/ajax.php',
       dataType: 'json',
       type: 'POST',
       data: {
         task: "getTypes",
         id_material: id_material
       },
       timeout: 10000,
       beforeSend: function(){
        $('#' + block).html();
       },
       ajaxError: function(){
        if(err == true){
        }
       },
       complete: function(){
        if(err == true){
        }
       },
       success: function (data) {
           err = false;
           var arrNum = new Array('first','second','third','fourth','fifth');
           if(data.is_err == 0){
            //alert(data.types.length);
            var txt_h2 = "<p class='title'>" + data.type_material + "</p>";
            var txt = "";
            for(var i=0; i<data.types.length; i++){
             var k=i+1;
             if(i==0){ var check = "checked"; }else{ check = ""; }
             txt += '<div class="input-wrapper clearfix">';
             txt += '<input id="radio-b3-' + data.types[i].id + '"  data-depth="' + data.types[i].depth + '" name="radio-b3" type="radio" onChange="loadFacet(' + data.types[i].depth + ');$(\'#block4 div.shadow\').addClass(\'shadow-hidden\');$(\'#block4 input[type=text] \').val(\'\');$(\'#block4 input[type=radio] \').removeAttr(\'checked\');$(\'#block4 input[type=text] \').attr(\'disabled\',true);setBlock(5);Raschet();" />';
             txt += '<label for="radio-b3-' + data.types[i].id + '"></label>\n';
             txt += '<label for="radio-b3-' + data.types[i].id + '">' + data.types[i].depth + ' мм</label>';
             txt += '<div class="question question_types">';
             txt += '<div class="qtip_content">';
              txt += '<p class="title qtip_title">' + data.types[i].type_tip_title + '</p>';
              txt += '<div class="qtip_description">';
                  txt += '<div class="tip_div">' + data.types[i].type_tip_text + '</div>';
                  if(data.types[i].image != ""){
                   txt += '<img src="/img/images_types/' + data.types[i].image + '" />';
                  }
              txt += '</div>';
             txt += '</div>';
             txt += '</div>';
             txt += '</div>';
            }
            $('#' + block + ' #block3_cont').html("");
            $('#' + block + ' #block3_cont').html(txt_h2 + txt);
            $('#' + block + ' div.shadow').addClass('shadow-hidden');
            callback();
           }
           //return(data);
           loadQTips('.question_types');

       }
     });
}

function Raschet(){
    //вид стекла
    var material = $("#block1 input[name='radio-b1']:checked").attr('data-name-id');
    //подтип стекла
    var material_type = $("#block2 input[name='radio-b2']:checked").attr('data-material-id');

    //толщина стекла
    var material_depth = $("#block3 input[name='radio-b3']:checked").attr('data-depth');
    if(!material_depth){
     return(false);
    }
    //форма и размеры
    //обработка
    var form_id = $("#block4 input[name='radio-b4']:checked").attr('id');
    //alert(form_id);
    var form = "";
    var h = 0;
    var w = 0;
    var d = 0;
    switch(form_id){
     case 'radio-b4-1': //прямоуг
      form = 'square';
      w = parseInt($('#form1_w_s').val());
      h = parseInt($('#form1_h_s').val());
     break;
     case 'radio-b4-2': //круг
      form = 'round';
      d = parseInt($('#form2_diametr').val());
     break;
     case 'radio-b4-3': //другое
      form = 'other';
      w = parseInt($('#form3_w_s').val());
      h = parseInt($('#form3_h_s').val());
     break;
     default:
      return(false);
    }
    if(d == 0 && (h == 0 && w == 0)){
     return(false);
    }
    if(form == 'square' || form == 'other'){
     if(!w || !h || w > MAX_W || h > MAX_W){
      //jAlert('Максимально возможная ширина ' + MAX_W, 'Ошибка!');
      return(false);
     }
    }

    if(form == 'round'){
     if(!d || d>MAX_H){
      //jAlert('Максимально возможный диаметр ' + MAX_H, 'Ошибка!');
      return(false);
     }
    }

    //обработка
    var polirov = parseInt($("#block5 input[name='radio-b5']:checked").attr('data-id'));
    if(!polirov){ polirov=0;}

    if(polirov == 0 && $('#radio-b5-facet').is(':checked')){
    //  polirov = $('#b5-select :selected').attr('data-id');
     polirov = $('input[name=b5-select]:checked').attr('data-id');
    }

    //--дополнительно
    //закалка
    var harding = 0;
    if($('#checkbox-b6-1').is(':checked')){
     harding = 1;
    }
    //отверстия
    var otverst = 0;
    var cnt_otverst = 0;
    if($('#checkbox-b6-2').is(':checked')){
     $('#text-b6-1').attr('disabled',false);
     otverst = 1;
     cnt_otverst = $('#text-b6-1').val();
     if(!cnt_otverst){
      cnt_otverst = 1;
      //cnt_otverst = 0;
      $('#text-b6-1').val("1");
      //jAlert('Не указано количество отверстий!', 'Ошибка!');
      //return(false);
     }
    }
    else{
     $('#text-b6-1').val("");
     $('#text-b6-1').attr('disabled',true);
    }

    //вырезы
    var vyrez = 0;
    var cnt_vyrez = 0;
    if($('#checkbox-b6-3').is(':checked')){
     $('#text-b6-2').attr('disabled',false);
     vyrez = 1;
     cnt_vyrez = $('#text-b6-2').val();
     if(!cnt_vyrez){
      cnt_vyrez = 1;
      $('#text-b6-2').val("1");
      //jAlert('Не указано количество вырезов!', 'Ошибка!');
      //return(false);
     }
    }
    else{
     $('#text-b6-2').val("");
     $('#text-b6-2').attr('disabled',true);
    }

    //скругление
    var rounding = 0;
    var cnt_rounding = 0;
    if($('#checkbox-b6-4').is(':checked')){
     $('#text-b6-3').attr('disabled',false);
     rounding = 1;
     cnt_rounding = $('#text-b6-3').val();
     if(!cnt_rounding){
      cnt_rounding = 1;
      $('#text-b6-3').val("1");
      //jAlert('Не указано количество скругляемых углов!', 'Ошибка!');
      //return(false);
     }
    }
    else{
     $('#text-b6-3').val("");
     $('#text-b6-3').attr('disabled',true);
    }

    //пленка
    var safety = 0;
    if($('#checkbox-b6-5').is(':checked')){
     safety = 1;
    }

    //бронепленка
    var bron = 0;
    if($('#checkbox-b6-6').is(':checked')){
     bron = 1;
    }

    //доставка ?
    var dostavka = parseInt($("#block7 input[name='radio-b7']:checked").attr('data-num'));
    if(!dostavka){ dostavka=0;}

    //количество
    var cnt = parseInt($('#cnt').val());
    if(cnt < 1){
     cnt = 1;
    }
    else if(cnt > MAX_CNT){
     cnt = MAX_CNT;
    }
    if(!cnt){ cnt = 1;}
    //alert(d + ' ' + w + ' ' + ' ' + h + ' ' + material_depth);

    var err=true;

     $.ajax({
       url: '/ajax.php',
       dataType: 'json',
       type: 'POST',
       data: {
         task: "getRaschet",
         id_material: material,
         id_material_type: material_type,
         depth: material_depth,
         height: h,
         width: w,
         diametr: d,
         form: form,
         polirov: polirov,
         harding: harding,
         otverst: otverst,
         cnt_otverst: cnt_otverst,
         vyrez: vyrez,
         cnt_vyrez: cnt_vyrez,
         rounding: rounding,
         cnt_rounding: cnt_rounding,
         safety: safety,
         bron: bron,
         dostavka: dostavka,
         cnt: cnt
       },
       timeout: 10000,
       beforeSend: function(){
        //  $("#resultCalc").text('Расчет...');
        $(".price__line--next").text('Расчёт').parent().addClass('price-calculated');
         //$('#button_order').hide('slow');
       },
       ajaxError: function(){
        if(err == true){

        }
       },
       complete: function(){
        if(err == true){

        }
       },
       success: function (data) {
           err = false;
           //alert(data.itog_sum);
           if(data.is_err == 0){
            $("#resultCalc").text(data.itog_sum).closest('.price-calculated').removeClass('price-calculated');
           }
           else{
            if(!data.err){ data.err = "Ошибка при расчете";}
            //jAlert(data.err,'Ошибка!');
            alert(data.err);

           }
           //return(data);
       }
     });
}

//dates
      //holidays
   var natDays = [
     [1, 1, 'uk'],
     [12, 25, 'uk'],
     [12, 26, 'uk']
   ];

   var dateMin = new Date();
   var weekDays = AddBusinessDays(1);

   dateMin.setDate(dateMin.getDate() + weekDays);

function AddBusinessDays(weekDaysToAdd) {
     var curdate = new Date();
     var realDaysToAdd = 0;
     while (weekDaysToAdd > 0){
       curdate.setDate(curdate.getDate()+1);
       realDaysToAdd++;
       //check if current day is business day
       if (noWeekendsOrHolidays(curdate)[0]) {
         weekDaysToAdd--;
       }
     }
     return realDaysToAdd;

   }

   function noWeekendsOrHolidays(date) {
       var weekend = [0];
   if ($.inArray(date.getDay(), weekend) > -1) {
     return [false, "", "Unavailable"];
   }

   return [true, ""];
       /*
   var noWeekend = $.datepicker.noWeekends(date);
       if (noWeekend[0]) {
           return nationalDays(date);
       } else {
           return noWeekend;
       }
   */
   }
   function nationalDays(date) {
       for (i = 0; i < natDays.length; i++) {
           if (date.getMonth() == natDays[i][0] - 1 && date.getDate() == natDays[i][1]) {
               return [false, natDays[i][2] + '_day'];
           }
       }
       return [true, ''];
   }

function dates_calc_init(block,init_days){
    if(parseInt(init_days)<0){var init_days = 0; }
    var dateMin = new Date();
    var weekDays = AddBusinessDays(init_days);

    dateMin.setDate(dateMin.getDate() + weekDays);
    $( "#" + block ).datepicker( "destroy" );
    $( "#" + block ).datepicker({
          beforeShowDay: noWeekendsOrHolidays,
          altField: "#date_value",
          showOn: "both",
          dateFormat: "dd/mm/yy",
          firstDay: 1,
          changeFirstDay: false,
          minDate: dateMin,
          onSelect: function(){
                      $('#block9 div.shadow').addClass('shadow-hidden');
                     }
     });
}

//проверяем возможность выбора даты
function check_dates_calc(){
    var c_val = 1;
    var max_val = 0;

    var is_facet = false;
    var days_facet = 0;

    var is_harding = false;
    var days_harding = 0;

    var days_form = 0;

    var days_skruglen = 0;

    var days_dopolnit = 0;

    var days_dostavka = 0;

    var days_all = 0;
    var days_add = 0;

    if ($("#radio-b4-1").is(':checked')) {
        //прямоугольник
      //резка
      if($("#radio-b5-1").is(':checked')){
       days_add = 0;
      }
      //резка + отверст/вырезы
      if($("#radio-b5-1").is(':checked') &&
       ($("#checkbox-b6-2").is(':checked') || $("#checkbox-b6-3").is(':checked')) ){
       days_add = 1;
      }
      //резка + скругления
      if($("#radio-b5-1").is(':checked') && $("#checkbox-b6-4").is(':checked')){
       days_add = 1;
      }
      //резка + пленка(бро/защ)
      if($("#radio-b5-1").is(':checked') && ($("#checkbox-b6-5").is(':checked')
       || $("#checkbox-b6-6").is(':checked')) ){
       days_add = 1;
      }

      //полировка/фацет
      if($("#radio-b5-2").is(':checked') || $("#radio-b5-facet").is(':checked') ){
       days_add = 1;
      }
      //полировка/фацет + закалка
      if(($("#radio-b5-2").is(':checked') || $("#radio-b5-facet").is(':checked'))
       && $("#checkbox-b6-1").is(':checked') ){
       days_add = 1;
      }
      //полировка/фацет + отверст/вырезы
      if(($("#radio-b5-2").is(':checked') || $("#radio-b5-facet").is(':checked'))
       && ($("#checkbox-b6-2").is(':checked') || $("#checkbox-b6-3").is(':checked') )){
       days_add = 1;
      }
      //полировка/фацет + отверст/вырезы + закалка
      if(($("#radio-b5-2").is(':checked') || $("#radio-b5-facet").is(':checked'))
       && ($("#checkbox-b6-2").is(':checked') || $("#checkbox-b6-3").is(':checked') )
       && $("#checkbox-b6-1").is(':checked')){
       days_add = 1;
      }
      //полировка/фацет + скругления
      if(($("#radio-b5-2").is(':checked') || $("#radio-b5-facet").is(':checked'))
       && $("#checkbox-b6-4").is(':checked')){
       days_add = 7;
      }
      //полировка/фацет + скругления + закалка
      if(($("#radio-b5-2").is(':checked') || $("#radio-b5-facet").is(':checked'))
       && $("#checkbox-b6-4").is(':checked')
       && $("#checkbox-b6-1").is(':checked')){
       days_add = 7;
      }

      //полировка/фацет + пленка(бро/защ)
      if(($("#radio-b5-2").is(':checked') || $("#radio-b5-facet").is(':checked'))
       && ($("#checkbox-b6-5").is(':checked') || $("#checkbox-b6-6").is(':checked'))){
       days_add = 1;
      }

    }
    else if ($("#radio-b4-2").is(':checked') || $("#radio-b4-3").is(':checked')) {
        //круг, фигура
      //резка
      if($("#radio-b5-1").is(':checked')){
       days_add = 0;
      }
      //резка + отверст/вырезы
      if($("#radio-b5-1").is(':checked') &&
       ($("#checkbox-b6-2").is(':checked') || $("#checkbox-b6-3").is(':checked')) ){
       days_add = 1;
      }
      //резка + скругления
      if($("#radio-b5-1").is(':checked') && $("#checkbox-b6-4").is(':checked')){
       days_add = 1;
      }
      //резка + пленка(бро/защ)
      if($("#radio-b5-1").is(':checked') && ($("#checkbox-b6-5").is(':checked')
       || $("#checkbox-b6-6").is(':checked')) ){
       days_add = 1;
      }

      //полировка/фацет
      if($("#radio-b5-2").is(':checked') || $("#radio-b5-facet").is(':checked') ){
       days_add = 7;
      }
      //полировка/фацет + закалка
      if(($("#radio-b5-2").is(':checked') || $("#radio-b5-facet").is(':checked'))
       && $("#checkbox-b6-1").is(':checked') ){
       days_add = 7;
      }
      //полировка/фацет + отверст/вырезы
      if(($("#radio-b5-2").is(':checked') || $("#radio-b5-facet").is(':checked'))
       && ($("#checkbox-b6-2").is(':checked') || $("#checkbox-b6-3").is(':checked') )){
       days_add = 7;
      }
      //полировка/фацет + отверст/вырезы + закалка
      if(($("#radio-b5-2").is(':checked') || $("#radio-b5-facet").is(':checked'))
       && ($("#checkbox-b6-2").is(':checked') || $("#checkbox-b6-3").is(':checked') )
       && $("#checkbox-b6-1").is(':checked')){
       days_add = 7;
      }
      //полировка/фацет + скругления
      if(($("#radio-b5-2").is(':checked') || $("#radio-b5-facet").is(':checked'))
       && $("#checkbox-b6-4").is(':checked')){
       days_add = 7;
      }
      //полировка/фацет + скругления + закалка
      if(($("#radio-b5-2").is(':checked') || $("#radio-b5-facet").is(':checked'))
       && $("#checkbox-b6-4").is(':checked')
       && $("#checkbox-b6-1").is(':checked')){
       days_add = 7;
      }

      //полировка/фацет + пленка(бро/защ)
      if(($("#radio-b5-2").is(':checked') || $("#radio-b5-facet").is(':checked'))
       && ($("#checkbox-b6-5").is(':checked') || $("#checkbox-b6-6").is(':checked'))){
       days_add = 7;
      }
    }


    //проверяем и прибавляем доставку
    if ($("#radio-b7-1").is(':checked')) {
       days_dostavka = 0;
    }
    if ($("#radio-b7-2").is(':checked')) {
       days_dostavka = 2;
    }
    if ($("#radio-b7-3").is(':checked')) {
       days_dostavka = 3;
    }

    //days_all = days_form + days_facet + days_harding + days_skruglen + days_dopolnit + days_dostavka;
    days_all = days_add + days_dostavka;
    if(1){
     //dates_calc_init('datepicker',max_val);
     dates_calc_init('datepicker',days_all);
    }
}

function checkOrder(){
    $('#modal-windows').show();
    $('#window_order').show();
}

function sendOrder(){
      var name = $("#user_name--order").val();
      var phone = $("#user_phone--order").val();
      var email = $("#user_email--order").val();
      var comments = $("#comments--order").val();
      // var inn = $("#zakaz_customer-inn").val();
      var cnt = $('#cnt').val();

       //вид стекла
      var material = $("#block1 input[name='radio-b1']:checked").attr('data-name-id');
      //подтип стекла
      var material_type = $("#block2 input[name='radio-b2']:checked").attr('data-material-id');

      //толщина стекла
      var material_depth = $("#block3 input[name='radio-b3']:checked").attr('data-depth');
      if(!material_depth){
       return(false);
      }
      //форма и размеры
      //обработка
      var form_id = $("#block4 input[name='radio-b4']:checked").attr('id');
      //alert(form_id);
      var form = "";
      var h = 0;
      var w = 0;
      var d = 0;
      switch(form_id){
       case 'radio-b4-1': //прямоуг
        form = 'square';
        w = parseInt($('#form1_w_s').val());
        h = parseInt($('#form1_h_s').val());
       break;
       case 'radio-b4-2': //круг
        form = 'round';
        d = parseInt($('#form2_diametr').val());
       break;
       case 'radio-b4-3': //другое
        form = 'other';
        w = parseInt($('#form3_w_s').val());
        h = parseInt($('#form3_h_s').val());
       break;
       default:
        return(false);
      }
      if(d == 0 && (h == 0 && w == 0)){
       return(false);
      }
      if(form == 'square' || form == 'other'){
       if(!w || !h || w > MAX_W || h > MAX_W){
        //jAlert('Максимально возможная ширина ' + MAX_W, 'Ошибка!');
        return(false);
       }
      }

      if(form == 'round'){
       if(!d || d>MAX_H){
        //jAlert('Максимально возможный диаметр ' + MAX_H, 'Ошибка!');
        return(false);
       }
      }

      //обработка
      var polirov = parseInt($("#block5 input[name='radio-b5']:checked").attr('data-id'));
      if(!polirov){ polirov=0;}

      if(polirov == 0 && $('#radio-b5-facet').is(':checked')){
      //  polirov = $('#b5-select :selected').attr('data-id');
       polirov = $('input[name=b5-select]:checked').attr('data-id');
      }

      //--дополнительно
      //закалка
      var harding = 0;
      if($('#checkbox-b6-1').is(':checked')){
       harding = 1;
      }
      //отверстия
      var otverst = 0;
      var cnt_otverst = 0;
      if($('#checkbox-b6-2').is(':checked')){
       otverst = 1;
       cnt_otverst = $('#text-b6-1').val();
       if(!cnt_otverst){
        //jAlert('Не указано количество отверстий!', 'Ошибка!');
        //return(false);
       }
      }

      //вырезы
      var vyrez = 0;
      var cnt_vyrez = 0;
      if($('#checkbox-b6-3').is(':checked')){
       vyrez = 1;
       cnt_vyrez = $('#text-b6-2').val();
       if(!cnt_vyrez){
        //jAlert('Не указано количество вырезов!', 'Ошибка!');
        //return(false);
       }
      }
      //скругление
      var rounding = 0;
      var cnt_rounding = 0;
      if($('#checkbox-b6-4').is(':checked')){
       rounding = 1;
       cnt_rounding = $('#text-b6-3').val();
       if(!cnt_rounding){
        //jAlert('Не указано количество скругляемых углов!', 'Ошибка!');
        //return(false);
       }
      }
      //пленка
      var safety = 0;
      if($('#checkbox-b6-5').is(':checked')){
       safety = 1;
      }

      //бронепленка
      var bron = 0;
      if($('#checkbox-b6-6').is(':checked')){
       bron = 1;
      }

      //доставка ?
      var dostavka = parseInt($("#block7 input[name='radio-b7']:checked").attr('data-num'));
      var dostavka_addr = "";
      if(!dostavka){
       dostavka=0;
      }
      switch(dostavka){
       case 1:
        dostavka_addr = $('#text-b7-1').val();
       break;
       case 2:
        dostavka_addr = $('#text-b7-2').val();
       break;
       default:
        dostavka_addr = "";
      }

      //дата заказа
      var date_zakaz = $('#date_value').val();

      //alert(material_depth);
      var err=true;
      //alert(material + " " + material_type);return;
       $.ajax({
         url: '/ajax.php',
         dataType: 'json',
         type: 'POST',
         data: {
           task: "order-now",
           name_user: name,
           phone_user: phone,
           email_user: email,
           comments_user: comments,
          //  inn_user: inn,
           id_material: material,
           id_material_type: material_type,
           depth: material_depth,
           height: h,
           width: w,
           diametr: d,
           form: form,
           polirov: polirov,
           harding: harding,
           otverst: otverst,
           cnt_otverst: cnt_otverst,
           vyrez: vyrez,
           cnt_vyrez: cnt_vyrez,
           rounding: rounding,
           cnt_rounding: cnt_rounding,
           safety: safety,
           bron: bron,
           dostavka: dostavka,
           dostavka_addr: dostavka_addr,
           date_zakaz: date_zakaz,
           cnt: cnt
         },
         timeout: 30000,
         beforeSend: function(){
           //$("#resultCalc").text('Расчет...');
           //$('#button_order').hide('slow');
          //  $('#button_order').attr('disabled',true);
          //  $('#button_order').attr('value','Идет отправка...');
          // alert('идет отправка');
          }
        }) // end base ajax and go callbacks

         .always( function(){
          //  alert('always');
          if(err == true){
           //alert(data.err);
           //$('#button_order').show('slow');
            //  $('#button_order').attr('disabled',false);
            //  $('#button_order').attr('value','Отправить');
          }
        })
         .done(function (data) {
             err = false;
             //alert(data.itog_sum);
            //  if(data.is_err == 0){
            //   location.href = "/thankyou.html?id_zakaz=" + data.id_zakaz;
            //  }
            //  else{
            //   if(!data.err){ data.err = "Ошибка при отправке письма";}
            //   //jAlert(data.err,'Ошибка!');
            //   alert(data.err);
            //   //$('#button_order').show('slow');
            //   $('#button_order').attr('disabled',false);
            //   $('#button_order').attr('value','Отправить');
            //  }

            if(data.is_error == 0) {
              $('.remodal--order .remodal--action__title').text('Ваша заявка оформлена');
              $('.remodal--order #order-info__success-id').text(data.id_zakaz);
              $('.remodal--order .site-form--action').addClass('site-form--action--hidden').afterTransition(function () {
                $('.remodal--order .site-form--action').hide();
                $('.remodal--order .submit-success').fadeIn();
                console.log('lollll');
              });
            }
            else {
              console.log('same error');
            }
             //return(data);

          })
          .fail(function(request, textStatus, errorThrown){
             if(err == true){
              //alert(data.err);
              //$('#button_order').show('slow');
             //  $('#button_order').attr('disabled',false);
             //  $('#button_order').attr('value','Отправить');
             console.log(request.responseText);
             console.log(textStatus);
             console.log(errorThrown);

             }
         })

}

function send_quick_call(){
  var name = $("#call_customer-name").val();
  var phone = $("#call_prefix").val() + " " + $("#call_code").val() + " " + $("#call_customer-phone").val();

 var err=true;

 $.ajax({
   url: '/ajax.php',
   dataType: 'json',
   type: 'POST',
   data: {
     task: "sendQuickCall",
     name_user: name,
     phone_user: phone
   },
   timeout: 10000,
   beforeSend: function(){
     //$("#resultCalc").text('Расчет...');
     //$('#button_quick_call').hide('slow');
     $('#button_quick_call').attr('disabled',true);
   },
   ajaxError: function(){
    if(err == true){
     $('#button_quick_call').attr('disabled',false);
    }
   },
   complete: function(){
    if(err == true){
     $('#button_quick_call').attr('disabled',false);
    }
   },
   success: function (data) {
       err = false;
       //alert(data.itog_sum);
       if(data.is_err == 0){
        location.href = "/thankyou.html";
       }
       else{
        if(!data.err){ data.err = "Ошибка при отправке письма";}
        //jAlert(data.err,'Ошибка!');
        alert(data.err,'Ошибка!');
        //$('#button_quick_call').show('slow');
        $('#button_quick_call').attr('disabled',false);
       }
       //return(data);
   }
 });

}

function send_vyzov(){
  var name = $("#vyzov_customer-name").val();
  var phone = $("#vyzov_prefix").val() + " " + $("#vyzov_code").val() + " " + $("#vyzov_customer-phone").val();

 var err=true;

 $.ajax({
   url: '/ajax.php',
   dataType: 'json',
   type: 'POST',
   data: {
     task: "sendVyzov",
     name_user: name,
     phone_user: phone
   },
   timeout: 10000,
   beforeSend: function(){
     //$("#resultCalc").text('Расчет...');
     //$('#button_vyzov').hide('slow');
     $('#button_vyzov').attr('disabled',true);
   },
   ajaxError: function(){
    if(err == true){
     $('#button_vyzov').attr('disabled',false);
    }
   },
   complete: function(){
    if(err == true){
     $('#button_vyzov').attr('disabled',false);
    }
   },
   success: function (data) {
       err = false;
       //alert(data.itog_sum);
       if(data.is_err == 0){
        location.href = "/thankyou.html";
       }
       else{
        if(!data.err){ data.err = "Ошибка при отправке письма";}
        //jAlert(data.err,'Ошибка!');
        alert(data.err,'Ошибка!');
        //$('#button_vyzov').show('slow');
        $('#button_vyzov').attr('disabled',false);
       }
       //return(data);
   }
 });

}

function send_consult(){
  var name = $("#consult_customer-name").val();
  var phone = $("#consult_prefix").val() + " " + $("#consult_code").val() + " " + $("#consult_customer-phone").val();

 var err=true;

 $.ajax({
   url: '/ajax.php',
   dataType: 'json',
   type: 'POST',
   data: {
     task: "sendConsult",
     name_user: name,
     phone_user: phone
   },
   timeout: 10000,
   beforeSend: function(){
     //$("#resultCalc").text('Расчет...');
     //$('#button_consult').hide('slow');
     $('#button_consult').attr('disabled',true);
   },
   ajaxError: function(){
    if(err == true){
     $('#button_consult').attr('disabled',false);
    }
   },
   complete: function(){
    if(err == true){
     $('#button_consult').attr('disabled',false);
    }
   },
   success: function (data) {
       err = false;
       //alert(data.itog_sum);
       if(data.is_err == 0){
        location.href = "/thankyou.html";
       }
       else{
        if(!data.err){ data.err = "Ошибка при отправке письма";}
        //jAlert(data.err,'Ошибка!');
        alert(data.err);
        //$('#button_consult').show('slow');
        $('#button_consult').attr('disabled',false);
       }
       //return(data);
   }
 });

}

function send_question(){
  var name = $("#question_customer-name").val();
  var phone = $("#question_prefix").val() + " " + $("#question_code").val() + " " + $("#question_customer-phone").val();
  var email = $("#question_customer-email").val();
  var question = $("#question_customer-question").val();

 var err=true;

 $.ajax({
   url: '/ajax.php',
   dataType: 'json',
   type: 'POST',
   data: {
     task: "sendQuestion",
     name_user: name,
     phone_user: phone,
     email_user: email,
     question: question
   },
   timeout: 10000,
   beforeSend: function(){
     //$("#resultCalc").text('Расчет...');
     $('#button_question').hide('slow');
   },
   ajaxError: function(){
    if(err == true){
     alert('Ошибка!');
     //$('#button_question').show('slow');
     $('#button_question').attr('disabled',false);
    }
   },
   complete: function(){
    if(err == true){
     alert('Ошибка!');
     //$('#button_question').show('slow');
     $('#button_question').attr('disabled',false);
    }
   },
   success: function (data) {
       err = false;
       //alert(data.itog_sum);
       if(data.is_err == 0){
        location.href = "/thankyou.html";
       }
       else{
        if(!data.err){ data.err = "Ошибка при отправке письма";}
        //jAlert(data.err,'Ошибка!');
        alert(data.err,'Ошибка!');
        //$('#button_question').show('slow');
        $('#button_question').attr('disabled',true);
       }
       //return(data);
   }
 });

}

/** FIND ORDER BY IT NUMBER */
function findOrder(){
 var err = true;
 var number = parseInt($("#order-number").val());
 if(!number){
  // alert("Не указан номер заказа");
  $('#order-number').val('');
  $('.order-result--error').text('Не указан номер заказа');
  $('.order-result--error').fadeIn();
    $('#order-info').fadeOut();

  return;
 }

 $.ajax({
    url: '/ajax.php',
    dataType: 'json',
    type: 'POST',
    data: {
      task: "findOrder",
      number: number
    },
    timeout: 10000,
    beforeSend: function(){
        $('.order-result--error').fadeOut();
      $('.order-search__submit').attr('disabled',true);
      $('.order-preloader').fadeIn();
      if($('#order-info').is(':visible')){
        $('.order-info-container').addClass('order-info-container--expanded');
        $('#order-info').fadeOut(500);
      }


    },
    ajaxError: function(){
     if(err == true){
      // alert('Ошибка!');
      $('.order-result--error').text('Ошибка на сервере');
      $('.order-search__submit').attr('disabled',false);

      $('.order-preloader').fadeOut(500, function () {
        $('#order-info:visible').fadeOut();
        $('.order-result--error').fadeIn();
      });
     }
    },
    complete: function(){
      // $('.order-preloader').fadeOut();
     if(err == true){

      // alert('Ошибка!');
      $('.order-result--error').text('Ошибка на сервере');
      $('.order-search__submit').attr('disabled',false);
      // $('.order-preloader').fadeOut();
      // $('.order-preloader').fadeOut(1000, function () {
      //   $('#order-info').fadeOut();
      // });
     }
    },
    success: function (data) {
        err = false;
        //alert(data.itog_sum);
        if(data.is_err == 0){


            $('.order-preloader').fadeOut(1000, function () {
              $('#order-info__sum').text(data.zakaz.sum);
              if(parseInt(data.zakaz.status) == 1){
               $('.btn--start-pay').show();
              }
              else{
               $('.btn--start-pay').hide();
              }
              $('.order-info__result').html(data.td_txt);
              /** data for pay -- hidden fields  **/
              $('#shop_id').val(data.shop.shop_id);
              $('#amount').val(data.shop.amount);
              $('#order_number').val(data.shop.order_number);
              $('#order_description').val(data.shop.order_description);
              $('#client_name').val(data.shop.client_name);
              $('#client_phone').val(data.shop.client_phone);
              $('#client_email').val(data.shop.client_email);
              $('#signature').val(data.shop.signature);
              $('#back_url_ok').val('http://стекло24.москва/thank_you.html?id=' + data.zakaz.id);
              $('#back_url_fail').val('http://стекло24.москва/order.html?id=' + data.zakaz.id);

              $('#order-info').fadeIn();
              $('.order-search__submit').attr('disabled',false);
            });
            // $('#order-info').slideDown();
            //   $('.order-search__submit').attr('disabled',false);
        }
        else{
         if(!data.err){ data.err = "Ошибка при поиске заказа";}
        //  alert(data.err);
         $('.order-preloader').fadeOut(1000, function () {

             $('.order-result--error').text(data.err);
             $('.order-result--error').fadeIn();
           $('#order-info').fadeOut();
           $('.order-search__submit').attr('disabled',false);
         });

        }
        //return(data);
    }
  });
}

function checkFormBamkPayment(){
 if(!$('#checkbox-rules').is(':checked')){
  alert("Небходимо согласиться с условиями платежа");
  return;
 }
 $('#form_bank_payment').submit();
}

function sbros_calc(){
    $("#resultCalc").text("0");
    $('input:radio').removeAttr("checked");
    $('input:checkbox').removeAttr("checked");
    $('.forms_input').attr('disabled',true);
    $('#block6 input[type=text]').attr('disabled',true);
    for(var i=2; i<=9; i++){
     $('#block' + i + ' div.shadow').removeClass('shadow-hidden');
    }
    //$('.forms_input').attr('disabled',true);
    $('.forms_input').val('');
    $('.block6_input').val('');
    $('#date_num_value').val(1);
    dates_calc_init('datepicker',0);
    $('#cnt').val(1);
  }
