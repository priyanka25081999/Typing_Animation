const text_section = document.querySelector(".text2")
const areas = [
	"Developer",
	"Computer Engineer",
	"Enthusiastic learner",
	"Backend developer",
];

var area_cnt = 0;
var area_cnt_len = 0;

// arrow function syntax
const hideFromEnd = () => {
	var str = areas[area_cnt].substring(0, area_cnt_len);
	str += "_";
	text_section.innerHTML = str;

	if(area_cnt_len >= 0) {
		area_cnt_len--;
		setTimeout("hideFromEnd()", 150);
	} else {
		if(area_cnt < areas.length-1) area_cnt++;
		else area_cnt = 0;
		setTimeout("displayFromStart()", 150);
	}
};

const displayFromStart = () => {
	var str = areas[area_cnt].substring(0, area_cnt_len);
	str += "_";
	text_section.innerHTML = str;
	
	if(area_cnt_len < areas[area_cnt].length) {
		// increament the length
		area_cnt_len++;
		setTimeout("displayFromStart()", 150)
	} else if(area_cnt_len >= 0)
		hideFromEnd();
};

window.addEventListener("load", (e) => {
	displayFromStart();
});
