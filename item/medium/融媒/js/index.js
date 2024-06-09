const loading_container = getDOM(".loading_container")
const index_container = getDOM((".index_container"))
const yinle = getDOM("#yinle")
const warring_container = getDOM(".warring_container")
const dati_container = getDOM(".dati_container")
const timu_container = getDOM(".timu_container");
const last_container = getDOM(".last_container")
// button 
const index_btn = getDOM(".index_btn")
const warring_btn = getDOM(".warring_btn")
const last_btn = getDOM(".last_btn")
const info = getDOM(".info")
let dati = 0;						const ddd_btn = getDOM(".ddd_btn")
const dati_contents = document.querySelector(".dati_content")
const timu = [
	{
		show:'打一茶叶名',
		title:"充耳不闻无话讲",
		select:["A：龙井","B：碧螺春","C：佛手","D：铁观音"],
		selected:0
	},
	{
		show:"打一字",
		title:"春香连日去听琴",
		select:["A：项 ","B：需" ,"C：秦 ","D：鹏"],
		selected:2
	},
	{
		show:"打一广东地名",
		title:"山水相连称第一",
		select:["A：深圳","B：广州","C：佛山","D：汕头"],
		selected:3
	},
	{
		show:"打一成语",
		title:"动物学索引",
		select:["A：虎头虎脑","B：目中无人","C：双龙戏珠","D：物是人非"],
		selected:1
	},
	{
		show:"打一字",
		title:"二人别后又相逢",
		select:["A：友","B：归","C：情","D：笑"],
		selected:0
	},
	{
		show:"打一成语",
		title:" 公孙胜驾云，丁得孙狂奔",
		select:["A：精神抖擞","B：龙腾虎跃","C：无法无天","D：春暖花开"],
		selected:1
	}
	
]
let str = "";
for (let i = 0; i < timu.length; i++) {
	str += `<button class="dati_btn dati_no"data-index = "${i}"><span>${timu[i].show}</span></button>`
}
dati_contents.innerHTML = str;
const items = dati_contents.childNodes;
let seletdItem = null;
for (var i = 0; i < items.length; i++) {
	items[i].addEventListener("click",function(e){
	// switchPage(timu_container,dati_container)
	seletdItem = this;
	timu_container.style.display = "flex"
	setTimeout(()=>{
		timu_container.classList.add("show")
		timu_container.classList.remove("hident")
		const index = this.getAttribute("data-index")
		timu_container.setAttribute("data-select",index);
		let tii = `<div class="timu_content">
				<h3> ${timu[index].title}</h3>
				<h5>${timu[index].show}</h5>
				<div class="timu_switchs">`
				
				for (var i = 0; i < timu[index].select.length; i++) {
					tii+=`<label index=${i}>
						<input type="radio">
						<span>${timu[index].select[i]} </span>
					</label>`
				}	
		tii+=`</div>
				<button class="timu_btn">立即提交</button>
			</div>`
		
		timu_container.innerHTML = tii;
		
		const labels = document.querySelectorAll(".timu_container label");
		
		for (var i = 0; i < labels.length; i++) {
			labels[i].addEventListener("click",function(e){
				const index = this.getAttribute("index")
				
				for (var i = 0; i < labels.length; i++) {
					labels[i].children[0].checked = false;
				}
				this.children[0].checked = true;
				timu_container.setAttribute("index",index);
			})
		}	
		const timu_btn = getDOM(".timu_btn")
		timu_btn.addEventListener("click",function(e){
			const selected = timu_container.getAttribute("data-select");
			const index = timu_container.getAttribute("index");
			if(timu[selected].selected==index){
				timu_container.classList.remove("show")
					timu_container.classList.add("hident")
					
					seletdItem.classList.remove("dati_no")
					seletdItem.classList.add("dati_yes")
					seletdItem.innerHTML = `<span>答对了</span>`
					dati++;
					if(dati==6){
						ddd_btn.style.display = "flex"
					}
				setTimeout(()=>{
					timu_container.style.display = "flex"
					},2000);
			}else {
				info.style.display="flex"
				setTimeout(()=>{
					info.style.display="none"
				},1000)
			}
		})
		
		
	},100)
	
})
}
ddd_btn.addEventListener("click",e=>{
	setTimeout(()=>{
		last_container.style.display = "flex"
		
	},100)
	setTimeout(()=>{
		last_container.classList.add("show")
		last_container.classList.remove("hident")
	},2000)
	// switchPage(last_container,dati_container)
})
last_btn.addEventListener("click",e=>{
	setTimeout(()=>{
		last_container.classList.remove("show")
		last_container.classList.add("hident")
	},100)
	setTimeout(()=>{
		last_container.style.display = "none"
	},2000)
	switchPage(index_container,dati_container)
})




// 加载页面
function loadPage(){
	
	const loading_count = getDOM(".loading_count")
	const load_move = getDOM(".load_move")
	let count = 0;
	const t = setInterval(()=>{
		count++;
		if(count>=100){
			count=100;
			clearInterval(t)
			switchPage(index_container,loading_container)
		}
		loading_count.innerHTML = count+"%";
		load_move.style.left = count-10+"%"
	},30)
	
}
// 音乐
yinle.addEventListener("click",e=>{
	const audio = getDOM("#yinle audio")
	if(audio.paused){
		audio.play()
		yinle.style.animationPlayState="running";
	}else {
		audio.pause()
		yinle.style.animationPlayState="paused";
	}
})
// 规则页面
index_btn.addEventListener("click",e=>{
	switchPage(warring_container,index_container)
})

// 游戏页面
warring_btn.addEventListener("click",e=>{
	switchPage(dati_container,warring_container)
	
})







loadPage()

function getDOM(text){
	return document.querySelector(text)
}
// 显示 e1
function switchPage(e1,e2,time=3000){
		e1.style.display = "flex"

	setTimeout(()=>{
		e1.classList.add("show")
		e1.classList.remove("hident")
		
	},500)
	
	setTimeout(()=>{
		
		e2.classList.remove("show")
		e2.classList.add("hident")
	},100)
	setTimeout(()=>{
		e2.style.display = "none"
	},time)
}