//该函数用来计算出两个点之间的距离
function calcDistance(x,y)
{
	var dx=Math.pow(x.x-y.x,2);
	var dy=Math.pow(x.y-y.y,2);
	return Math.sqrt(dx+dy);
}

//该函数用来计算两个node之间的角度，返回-PI/2到3PI/2之间的值
function getAngle(x,y)
{
	var dy=y.y-x.y;
	var dx=y.x-x.x;
	if(dx==0)
		if(dy>0)
			return Math.PI/2;
		else
			return -Math.PI/2;
	if(dy==0)
		if(dx>0)
			return 0;
		else
			return Math.PI;
	var angle=Math.atan(dy/dx);
	if(dx<0)
		angle+=Math.PI;
	return angle;
}

//这个函数用来计算斥力,返回一个数组！
function calcRepulsionForce(x, y)
{
	var distance=Math.max(calcDistance(x,y),1);	//距离最小为1
	var force=-(5/Math.pow(distance,2));	//常量暂时为5,负数代表斥力
	var angle=getAngle(x,y);
	var forcex=force*Math.cos(angle);
	var forcey=force*Math.sin(angle);
	return new Array(forcex,forcey);
}

//这个函数用来计算引力，返回一个数组！
function calcAttractionForce(x,y,springLength,attr_cnt)
{
	var distance=Math.max(calcDistance(x,y),1);
	var dd=Math.max(distance-springLength,0);
	var force=attr_cnt*dd;
	var angle=getAngle(x,y);
	var forcex=force*Math.cos(angle);
	var forcey=force*Math.sin(angle);
	return new Array(forcex, forcey);
}
