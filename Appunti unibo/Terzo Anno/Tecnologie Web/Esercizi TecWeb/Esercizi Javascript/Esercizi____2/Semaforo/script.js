function change(){
	let luci = document.getElementsByClassName("light");
	let colori = ["green", "yellow", "red"];

	for(let i=0; i < 3; i++){
		if(luci[i].hasAttribute("id")){
			luci[i].removeAttribute("id");

			let next = (i+1)%luci.length;
			luci[next].setAttribute("id", colori[next]);
			break;
		}
	}
}