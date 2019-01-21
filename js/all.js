const listarea = document.querySelector('#selc_option');
const list_title = document.querySelector('#str_title');

const xhr = new XMLHttpRequest();
xhr.open('get','https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97',true);
xhr.send();

xhr.onload = function(){
	let call = JSON.parse(xhr.responseText);
	dataSelect = call.result.records;
	

	selectarea();    
	
}

//Option SelectList 使用
function selectarea(e){

	let area = [];
	for (let i = 0; i < dataSelect.length; i++) {
		area.push(dataSelect[i].Zone);
	};

	//----
	let selectZone = [];
	area.forEach(function(value) {
		if (selectZone.indexOf(value) == -1) {
			selectZone.push(value);
		};
	});
	//----
	let str = '';
	str = `<option id="str_title" value="none">- - 請選擇行政區 - -</option>` ;
	for (let i = 0; i < selectZone.length; i++) {
		//str += `<option value=" ${selectZone[i]} "> ${selectZone[i]} </option>`
		str += '<option value="' + selectZone[i] + '">' + selectZone[i] + '</option>' 
	}
	listarea.innerHTML = str;
}
//------------------------------------------------------
function optionChange(e){
	const commands = document.querySelector('.content_area');
	const main_content = document.querySelector('.location');
	let select = e.target.value;
	let str = '';
	for (let i = 0; i < dataSelect.length; i++) {
		if (select == dataSelect[i].Zone) {
			str += 
				'<li><div class="location_text"><h2>' + dataSelect[i].Name + '</h2><h1>' + dataSelect[i].Zone + '</h1><img src="' + dataSelect[i].Picture1 +
				 '" alt=""><p><img src="images/icons_clock.png" alt="">' 
				 + dataSelect[i].Opentime + '</p><p><img src="https://z110x119c911.github.io/KaohsiungTraval/images/icons_pin.png" alt="">' + dataSelect[i].Add + '</p><p><img src="https://z110x119c911.github.io/KaohsiungTraval/images/icons_phone.png" alt="">' 
				 + dataSelect[i].Tel + '<img class="space" src="https://z110x119c911.github.io/KaohsiungTraval/images/icons_tag.png" alt="">' + dataSelect[i].Ticketinfo + '</p></div></li>'
		}
		main_content.innerHTML = str;
		
	}
	commands.innerHTML = '<p>' + select + '</p>';
}

listarea.addEventListener('change', optionChange, false);


//------------------------------------------------------
const main_content = document.querySelector('.location');
const traval_recommend = document.querySelector('.content_area');


let btn1 = document.querySelector('#btn_area1');
btn1.addEventListener('click',function mainInfo(e) {
	btnSelect = e.target.value;
	let str = '';
	for (let i = 0; i < dataSelect.length; i++) {
		if (btnSelect == dataSelect[i].Zone) {
			str += 
				'<li><div class="location_text"><h2>' + dataSelect[i].Name + '</h2><h1>' + dataSelect[i].Zone + '</h1><img src="' + dataSelect[i].Picture1 +
				 '" alt=""><p><img src="https://z110x119c911.github.io/KaohsiungTraval/images/icons_clock.png" alt="">' 
				 + dataSelect[i].Opentime + '</p><p><img src="https://z110x119c911.github.io/KaohsiungTraval/images/icons_pin.png" alt="">' + dataSelect[i].Add + '</p><p><img src="https://z110x119c911.github.io/KaohsiungTraval/images/icons_phone.png" alt="">' 
				 + dataSelect[i].Tel + '<img class="space" src="https://z110x119c911.github.io/KaohsiungTraval/images/icons_tag.png" alt="">' + dataSelect[i].Ticketinfo + '</p></div></li>'
			
		}
		main_content.innerHTML = str;
		traval_recommend.innerHTML = '<p>' + btnSelect + '</p>';
	}
}, false);

let btn2 = document.querySelector('#btn_area2');
btn2.addEventListener('click',function mainInfo(e) {
	btnSelect = e.target.value;
	let str = '';
	for (let i = 0; i < dataSelect.length; i++) {
		if (btnSelect == dataSelect[i].Zone) {
			str += 
				'<li><div class="location_text"><h2>' + dataSelect[i].Name + '</h2><h1>' + dataSelect[i].Zone + '</h1><img src="' + dataSelect[i].Picture1 +
				 '" alt=""><p><img src="images/icons_clock.png" alt="">' 
				 + dataSelect[i].Opentime + '</p><p><img src="https://z110x119c911.github.io/KaohsiungTraval/images/icons_pin.png" alt="">' + dataSelect[i].Add + '</p><p><img src="https://z110x119c911.github.io/KaohsiungTraval/images/icons_phone.png" alt="">' 
				 + dataSelect[i].Tel + '<img class="space" src="https://z110x119c911.github.io/KaohsiungTraval/images/icons_tag.png" alt="">' + dataSelect[i].Ticketinfo + '</p></div></li>'
		}
	}
	main_content.innerHTML = str;
	traval_recommend.innerHTML = '<p>' + btnSelect + '</p>';
}, false);

let btn3 = document.querySelector('#btn_area3');
btn3.addEventListener('click',function mainInfo(e) {
	btnSelect = e.target.value;
	let str = '';
	for (let i = 0; i < dataSelect.length; i++) {
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

let btn4 = document.querySelector('#btn_area4');
btn4.addEventListener('click',function mainInfo(e) {
	btnSelect = e.target.value;
	let str = '';
	for (let i = 0; i < dataSelect.length; i++) {
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

