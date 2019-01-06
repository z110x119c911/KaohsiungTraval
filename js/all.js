var xhr = new XMLHttpRequest();
var listarea = document.querySelector('#selc_option');
var list_title = document.querySelector('#str_title');
xhr.open('get','https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97',true);

xhr.send();

xhr.onload = function(){
	var call = JSON.parse(xhr.responseText);
	dataSelect = call.result.records;
	

	selectarea();    // Option SelectList 
	
}

//Option SelectList 使用
function selectarea(e){
	
	var str = '';
	str = '<option id="str_title" value="none">- - 請選擇行政區 - -</option>' ;

	for (var i = 0; i < dataSelect.length; i++) 
	{
		
		str += '<option value="' + dataSelect[i].Zone + '">' + dataSelect[i].Zone + '</option>' 
		if (true) {}
	}

	listarea.innerHTML = str;
}
//------------------------------------------------------
function optionChange(e){
	var commands = document.querySelector('.content_area');
	var main_content = document.querySelector('.location');
	var select = e.target.value;
	var str = '';
	for (var i = 0; i < dataSelect.length; i++) {
		if (select == dataSelect[i].Zone) {
			str += 
				'<li><div class="location_text"><h2>' + dataSelect[i].Name + '</h2><h1>' + dataSelect[i].Zone + '</h1><img src="' + dataSelect[i].Picture1 +
				 '" alt=""><p><img src="images/icons_clock.png" alt="">' 
				 + dataSelect[i].Opentime + '</p><p><img src="images/icons_pin.png" alt="">' + dataSelect[i].Add + '</p><p><img src="images/icons_phone.png" alt="">' 
				 + dataSelect[i].Tel + '<img class="space" src="images/icons_tag.png" alt="">' + dataSelect[i].Ticketinfo + '</p></div></li>'
		}
		main_content.innerHTML = str;
		
	}
	commands.innerHTML = '<p>' + select + '</p>';
}

listarea.addEventListener('change', optionChange, false);


//------------------------------------------------------
var main_content = document.querySelector('.location');
var traval_recommend = document.querySelector('.content_area');


var btn1 = document.querySelector('#btn_area1');
btn1.addEventListener('click',function mainInfo(e) {
	btnSelect = e.target.value;
	var str = '';
	for (var i = 0; i < dataSelect.length; i++) {
		if (btnSelect == dataSelect[i].Zone) {
			str += 
				'<li><div class="location_text"><h2>' + dataSelect[i].Name + '</h2><h1>' + dataSelect[i].Zone + '</h1><img src="' + dataSelect[i].Picture1 +
				 '" alt=""><p><img src="images/icons_clock.png" alt="">' 
				 + dataSelect[i].Opentime + '</p><p><img src="images/icons_pin.png" alt="">' + dataSelect[i].Add + '</p><p><img src="images/icons_phone.png" alt="">' 
				 + dataSelect[i].Tel + '<img class="space" src="images/icons_tag.png" alt="">' + dataSelect[i].Ticketinfo + '</p></div></li>'
			
		}
		main_content.innerHTML = str;
		traval_recommend.innerHTML = '<p>' + btnSelect + '</p>';
	}
}, false);

var btn2 = document.querySelector('#btn_area2');
btn2.addEventListener('click',function mainInfo(e) {
	btnSelect = e.target.value;
	var str = '';
	for (var i = 0; i < dataSelect.length; i++) {
		if (btnSelect == dataSelect[i].Zone) {
			str += 
				'<li><div class="location_text"><h2>' + dataSelect[i].Name + '</h2><h1>' + dataSelect[i].Zone + '</h1><img src="' + dataSelect[i].Picture1 +
				 '" alt=""><p><img src="images/icons_clock.png" alt="">' 
				 + dataSelect[i].Opentime + '</p><p><img src="images/icons_pin.png" alt="">' + dataSelect[i].Add + '</p><p><img src="images/icons_phone.png" alt="">' 
				 + dataSelect[i].Tel + '<img class="space" src="images/icons_tag.png" alt="">' + dataSelect[i].Ticketinfo + '</p></div></li>'
		}
	}
	main_content.innerHTML = str;
	traval_recommend.innerHTML = '<p>' + btnSelect + '</p>';
}, false);

var btn3 = document.querySelector('#btn_area3');
btn3.addEventListener('click',function mainInfo(e) {
	btnSelect = e.target.value;
	var str = '';
	for (var i = 0; i < dataSelect.length; i++) {
		if (btnSelect == dataSelect[i].Zone) {
			str += 
				'<li><div class="location_text"><h2>' + dataSelect[i].Name + '</h2><h1>' + dataSelect[i].Zone + '</h1><img src="' + dataSelect[i].Picture1 +
				 '" alt=""><p><img src="images/icons_clock.png" alt="">' 
				 + dataSelect[i].Opentime + '</p><p><img src="images/icons_pin.png" alt="">' + dataSelect[i].Add + '</p><p><img src="images/icons_phone.png" alt="">' 
				 + dataSelect[i].Tel + '<img class="space" src="images/icons_tag.png" alt="">' + dataSelect[i].Ticketinfo + '</p></div></li>'
		}
	}
	main_content.innerHTML = str;
	traval_recommend.innerHTML = '<p>' + btnSelect + '</p>';
}, false);

var btn4 = document.querySelector('#btn_area4');
btn4.addEventListener('click',function mainInfo(e) {
	btnSelect = e.target.value;
	var str = '';
	for (var i = 0; i < dataSelect.length; i++) {
		if (btnSelect == dataSelect[i].Zone) {
			str += 
				'<li><div class="location_text"><h2>' + dataSelect[i].Name + '</h2><h1>' + dataSelect[i].Zone + '</h1><img src="' + dataSelect[i].Picture1 +
				 '" alt=""><p><img src="images/icons_clock.png" alt="">' 
				 + dataSelect[i].Opentime + '</p><p><img src="images/icons_pin.png" alt="">' + dataSelect[i].Add + '</p><p><img src="images/icons_phone.png" alt="">' 
				 + dataSelect[i].Tel + '<img class="space" src="images/icons_tag.png" alt="">' + dataSelect[i].Ticketinfo + '</p></div></li>'
		}
	}
	main_content.innerHTML = str;
	traval_recommend.innerHTML = '<p>' + btnSelect + '</p>';
}, false);

