//首页
var rightb = $("#rightblock");
var tit = $("#title");
var hao = $("#hao");
var nam = $("#name");
var ind = new TimelineLite();
//var ind2 = new TimelineLite();

ind.to(rightb,0,{
	x:400,
	y:0,
}).to(rightb,2,{
//	延迟2秒
//	delay:2,
	x:0,
	y:0,
})
.to(tit,0,{
	delay:-2,
	x:-600,
	y:0,
})
.to(tit,2,{
	delay:-2,
	x:0,
	y:0,
})
.to(hao,3,{
	opacity:1,
})
.to(nam,1,{
	delay:-2,
	x:0,
	y:600,
})
.to(nam,1,{
	delay:-1,
	x:0,
	y:550,
})
.to(nam,1,{
	delay:-0.5,
	x:0,
	y:600,
})