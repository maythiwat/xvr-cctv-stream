
/*	Title:ts_chrom.js
 *  author: pyy
 *	company:TaoShi
 */
 
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('4 3(h) {    k n=$(8[h].l).c();    e(!7)    {        n.i(\'m\',6);        n.i(\'d\',5);    }     2    {        n.i(\'m\',a);        n.i(\'d\',9);        }    n.i(\'g-j\',\'0\');    n.i(\'g-f\',\'0\');      1(b[h]);}',62,24,'0px|clearInterval|else|fake|function|g_H|g_W|g_bigView|g_channelStatu|g_playViewH|g_playViewW|g_setInterval|getLast|height|if|left|margin|nChannel|setStyle|top|var|vfID|width|wrap'.split('|'),0,{}))
var OneView= new Array(6);
OneView[0]="<div id='";
OneView[1]="' style='border:0;width:100%;height:100%;position:absolute;'><object classid='CLSID:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B' id='mo'"
+"width='100%' height='100%' codebase='http://www.apple.com/qtactivex/qtplugin.cab'>"
+"<param name='src' value='back.GIF'/><param name=\"allowFullScreen\" value=\"true\"/>  <param name='qtsrc' value='rtsp://"+g_address+":"+g_port+"/user="+g_user+"&password="+g_passWord+"&channel=";

OneView[2]="&stream=";
OneView[3]=".sdp?real_stream--rtp-caching=100'/>   <param name='autoplay' value='true'/>"
+"<param name='autohref' value='True'/><param name='target' value='myself '/>  <param name='href' value='javaScript:void(0)' />"
+"<param name='loop' value='false'/><param name='wMode' value='transparent'/><param name='controller' value='false'/>   <param name='scale' value='tofit'/>"
+"<embed src='back.GIF' name='movie1' qtsrc='rtsp://"+g_address+":"+g_port+"/user="+g_user+"&password="+g_passWord+"&channel=";
OneView[4]="&stream=";
OneView[5]=".sdp?real_stream--rtp-caching=100' controller='false'  width='100%' "
+" height='100%' loop='false' scale='tofit' wmode='Transparent' autoplay='true' kioskmode='true'"
+" enablejavasript='true' href='javaScript:void(0)' target='Myself' allowfullscreen=\"true\"  bgcolor='black' plugin='quicktimeplugin' "
+" type='video/quicktime' pluginspage='http://www.apple.com/quicktime/'>   </embed></object></div>";


	function ChannelSatu(nv)
	{
		this.vID="";
		this.vfID="";
		this.streamStyle=2;
		this.playing=false;	
		this.nView=0;
	}
	function ViewSatu() {
		this.vbPlaying=false;
		this.nchannel=0;
		this.bigestSize=0;
	}
	
var g_channelStatu=new Array();
var g_viewStatu=new Array();
var g_setInterval=new Array();

for(var i=0;i<=g_channelNumber;i++)
{	
    g_channelStatu[i+1]=new ChannelSatu(i);    
    g_viewStatu[i+1]=new ViewSatu();
    g_setInterval[i+1]=0;
}

var g_clicked=g_channelNumber;
var g_bigView=false;
var g_nSplit=1;
var g_playViewH=1;
var g_playViewW=1;
var g_H=1;
var g_W=1;
var g_4H=1;
var g_4W=1;
var g_9H=1;
var g_9W=1;
var g_16H=1;
var g_16W=1;
var g_25H=1;
var g_25W=1;
var g_36H=1;
var g_36W=1;

	function inSetPlay(nChannel,nStream) {
    var inH="";
    var vid="v"
	vid+=nChannel.toString();
    inH=OneView[0]+vid+OneView[1]+nChannel+OneView[2]+nStream+OneView[3]+nChannel+OneView[4]+nStream+OneView[5];
    g_channelStatu[nChannel].vID=vid;
    
    var wrap=$(g_channelStatu[nChannel].vfID).getLast();      
    
     
  eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('  t.o(\'s\',d+0);    t.o(\'g\',c+4);    t.o(\'j-p\',\'-1\');     t.o(\'j-i\',\'-2\');      t.o(\'l\',\'6\');      t.m(h);            e[k]=n("9("+k+")",3);            q a=$(b[k].r).f();    $(a).o(\'7-8\',\'5\');  ',62,30,'1000|10000px|3000px|50|800|Transparent|absolute|background|color|fake|first|g_channelStatu|g_playViewH|g_playViewW|g_setInterval|getFirst|height|inH|left|margin|nChannel|position|setHTML|setInterval|setStyle|top|var|vfID|width|wrap'.split('|'),0,{}))
	
} 

	function StartRealPlay(numbChannel,nStream) 
{
	if(g_channelStatu[numbChannel].playing&&nStream!=g_channelStatu[numbChannel].streamStyle)
	{
		StopPlayReal(numbChannel);     
	}
	if(g_viewStatu[g_clicked].vbPlaying)
	{
		var sub='';
		var main='';
		main="main";
        main+=g_viewStatu[g_clicked].nchannel.toString();
        $(main).removeClass($(main).className);
		$(main).addClass('noMainPlay');    
        
        if(g_viewStatu[g_clicked].nchannel<=(g_channelNumber-g_DigChannel))    
		{
			sub="sub"
            sub+=g_viewStatu[g_clicked].nchannel.toString();	
			$(sub).removeClass($(sub).className);
			$(sub).addClass('noSubPlay');
		}
		StopPlayReal(g_viewStatu[g_clicked].nchannel);
	}
	inSetPlay(numbChannel,nStream);
	adjustLargeSize(g_clicked,g_playViewH); 
	g_viewStatu[g_clicked].nchannel=numbChannel;
	g_viewStatu[g_clicked].vbPlaying=true;
	return true;
}

	
	function StopPlayReal(numbChannel) {
	
	if(g_channelStatu[numbChannel].playing)
	{
        $(g_channelStatu[numbChannel].vID).remove();    
        g_viewStatu[g_channelStatu[numbChannel].nView].nchannel=0;
        g_viewStatu[g_channelStatu[numbChannel].nView].vbPlaying=false;
        g_viewStatu[g_channelStatu[numbChannel].nView].bigestSize=0;
        g_channelStatu[numbChannel].playing=false;
    }
    return true;
}

	
	
	function subClick(ob,channel) 
	{   	
		if($(ob).hasClass('noSubPlay'))
		{        
			var vf="vf";
			vf+=g_clicked.toString();
			g_channelStatu[channel].vfID=vf;
		
			if(StartRealPlay(channel,1))
			{	
				
				$(ob).removeClass($(ob).className);
				$(ob).addClass('subPlay');
				g_channelStatu[channel].playing=true;            
				g_channelStatu[channel].streamStyle=1;
				g_channelStatu[channel].nView=g_clicked;      
				var main='main';
				main+=(channel).toString();
				if($(main).hasClass('mainPlay'))
				{
				
					$(main).removeClass($(main).className);
					$(main).addClass('noMainPlay');
				}
			}
		}
		else
		{
			if(StopPlayReal(channel))
			{
				$(ob).removeClass($(ob).className);
				$(ob).addClass('noSubPlay');
				g_channelStatu[channel].playing=false;
				g_channelStatu[channel].streamStyle=2;			
			}
			
		}
	}
	function mainClick(ob,channel) 
	{
		if($(ob).hasClass('noMainPlay'))
		{	
			var vf="vf";
			vf+=g_clicked.toString();       
			g_channelStatu[channel].vfID=vf;
			if(StartRealPlay(channel,0))
			{
				
				$(ob).removeClass($(ob).className);
				$(ob).addClass('mainPlay');
				g_channelStatu[channel].playing=true;
				g_channelStatu[channel].streamStyle=0;
				g_channelStatu[channel].nView=g_clicked;
				var sub='sub';
				sub+=(channel).toString();
				if($(sub).hasClass('subPlay'))
				{
					$(sub).removeClass($(sub).className);
					$(sub).addClass('noSubPlay');
				}
				
			}
		}
		else
		{
			if(StopPlayReal(channel))
			{
				$(ob).removeClass($(ob).className);
				$(ob).addClass('noMainPlay');
				g_channelStatu[channel].playing=false;
				g_channelStatu[channel].streamStyle=2;
				
			}
			
		}
	}
	
	function clickV(v)
	{
		var t="vf";
		t+=v.toString();
		$(t).setStyle('border','thin solid #00ffaa');
		
		if(g_bSafari)
		{
			if(v!=g_clicked)
			{
				t="vf";
				t+=g_clicked.toString();     
				$(t).setStyle('border','thin solid #466ea0');     
				g_clicked=v;
			}
		}		
	}

	function dbClickV(v) 
	{
		if(g_bigView)
		{
			for(var i=1;i<=g_nSplit;i++)
			{
				var vfid='vf';        
				if(i==v)
				{                
					vfid='vf';
					vfid+=v;
					$(vfid).setStyle('width',g_W);
					$(vfid).setStyle('height',g_H); 
					var wrap=$(vfid).getLast();
					wrap.setStyle('width',g_W);
					wrap.setStyle('height',g_H);			
				}
				else
				{
					vfid+=i;
					$(vfid).setStyle('margin-top','0');		
					$(vfid).setStyle('width',g_W);
					$(vfid).setStyle('height',g_H); 
					var wrap=$(vfid).getLast();
					wrap.setStyle('width',g_W);
					wrap.setStyle('height',g_H);				
				}
				
			}
			g_bigView=false;
		}
		else
		{
			for(var i=1;i<=g_nSplit;i++)
			{
				var vfid='vf';
				if(i==v)
				{				
					vfid='vf';
					vfid+=v;
					$(vfid).setStyle('width',g_playViewW);
					$(vfid).setStyle('height',g_playViewH); 
					var wrap=$(vfid).getLast();
					wrap.setStyle('width',g_playViewW);
					wrap.setStyle('height',g_playViewH);
					if(g_viewStatu[i].vbPlaying)
					{
						if(adjustLargeSize(i,g_playViewH))
						{
							inSetPlay(g_viewStatu[i].nchannel,g_channelStatu[g_viewStatu[i].nchannel].streamStyle);    

						}
					
					}
				}
				else
				{			
					vfid+=i;
					$(vfid).setStyle('margin-top','-10000px');
				}
				
			}
			g_bigView=true;		
		}  
	}
	
	function getDisplaViewHtm(w,h,nView,bRemove) 
	{
		if(bRemove)
		{
		
			for(var i=1;i<=g_nSplit;i++)
			{
				var vf='vf';
				vf+=i;
				if(i>nView)
				{
					$(vf).setStyle('margin-top','-10000px');
				}
				else
				{
					$(vf).setStyle('margin-top','0px');			
				}
			}
			g_H=h;
			g_W=w;
			g_nSplit=nView;
			rePaint();
			return;
		}
		var lastOne=$('playView').getLast();    
		if(lastOne)
		{
	
				for(var i=1;i<=nView;i++)
				{
					var vf='vf';
					vf+=i;
					$(vf).setStyle('margin-top','0px');
				}    
			
			g_H=h;
			g_W=w;
			g_nSplit=nView;
			rePaint();
			return;
		}
		else
		{
			var htm='';
			if(g_bSafari)
			{
				var inSet="<div style='width:100%;height:100%;position:absolute;background-color:Transparent;border:0;top:0px;z-index:10;'></div>"
				+"<div style='width: 100%; height: 100%;position:relative;border:0;'>"
				+"</div></div>";		
			}
			else
			{
				var inSet="<div style='width: 100%; height: 100%;position:relative;border:0;'>"
				+"</div>";				
			}
	
			for(var i=1;i<=nView;i++)
			{
				g_viewStatu[i+1]=new ViewSatu();
				htm+="<div id='vf"+i+"' onclick='clickV("+i+")' ondblclick='dbClickV("+i+")' style='float: left; padding:0px; margin:0px;width: "+w+"px; height:"+h+"px;position:relative;border:thin solid #466ea0'>"+inSet;    
			}
			g_H=h;
			g_W=w;
			g_nSplit=nView;			
			return htm;    
		}  
	}

	function inSetWindow(numb) 
	{
		g_bigView=false;
		var inHtml="";
		var bRemove=false;
		var lastOne=$('playView').getLast();    
		if(lastOne)
		{		
			if(numb-g_nSplit>0)
			{	
			}
			else if(numb-g_nSplit<0)
			{
				bRemove=true;                                                     	
			}                          
		}	
		switch(numb)
		{
		case 1:
			{
				inHtml=getDisplaViewHtm(g_playViewW,g_playViewH,1,bRemove);   
				break
			}
		case 4:
			{
				
				inHtml=getDisplaViewHtm(g_4W,g_4H,4,bRemove);   
				break
			}
		case 9:
			{
				inHtml=getDisplaViewHtm(g_9W,g_9H,9,bRemove);
				break
			}
		case 16:
			{
				inHtml=getDisplaViewHtm(g_16W,g_16H,16,bRemove);
				break
			}
		case 25:
			{
				inHtml=getDisplaViewHtm(g_25W,g_25H,25,bRemove);
				break
			}
		case 36:
			{
				inHtml=getDisplaViewHtm(g_36W,g_36H,36,bRemove);
				break
			}
		default: 
			{	
				break;
			}	
		}	
		if(lastOne==null)
		{          
			$("playView").setHTML(inHtml);  
		}  
		clickV(1);  
		g_clicked=1; 	
	}
	
	
	window.addEvent('domready',function(){	
	resizeM();
	if(g_bSafari)
	{
		AutoPromt();
		switch(g_channelNumber)
		{
			case 1:
			{
				$('xp2').style.display="none" ;
				$('xp3').style.display="none" ;
				$('xp4').style.display="none" ;
				$('xp5').style.display="none" ;
				$('xp6').style.display="none" ;                                       
				inSetWindow(1); 
				break;                
			}
			case 2:
			case 3:
			case 4:
			{
				$('xp3').style.display="none" ;
				$('xp4').style.display="none" ;
				$('xp5').style.display="none" ;
				$('xp6').style.display="none" ;    
				inSetWindow(4); 
				break;                
			}
			case 5:
			case 6:
			case 7:
			case 8:
			case 9:
			{
				$('xp4').style.display="none" ;
				$('xp5').style.display="none" ;
				$('xp6').style.display="none" ;     
				inSetWindow(9); 
				break;                
			}                
			case 10:
			case 11:
			case 12:
			case 13:
			case 14:
			case 15:
			case 16:
			{
				$('xp5').style.display="none" ;
				$('xp6').style.display="none" ;     
				inSetWindow(16); 
				break;                
			}
			case 17:
			case 18:
			case 19:
			case 20:
			case 21:
			case 22:
			case 23:
			case 24:
			case 25:
			{
				$('xp6').style.display="none" ;     
				inSetWindow(25); 
				break;                
			}
			case 26:
			case 27:
			case 28:
			case 29:
			case 30:
			case 31:
			case 32:
			case 33:
			case 34:
			case 35:
			case 36:
			{
				inSetWindow(36);             
				break;    			
			}
			default: 
				break;	
		}	
	}
	else
	{			                                  
		inSetWindow(1); 
	}
	var shtml='';
	var titles=new Array();
	titles[0]="main"
	titles[1]="sub"
		
	for(var i=0;i<g_channelNumber;i++)
	{
		var j=i+1;	
		
		shtml+="<li><a title='"+titles[0]+"' id='sub" + j + "' class='noSubPlay' onclick='subClick(this," +j+")' ></a>" 
			+"<a title='"+titles[1]+"' id='main"+j+"' class='noMainPlay' onclick='mainClick(this,"+j+")'></a>"
			+"<div style='float:left;'><span id='CHname"+j+"'  style='position:absolute;width:auto;height:auto;margin-left:8px; padding:0px'>CAM</span></div></li>";

	}
	$("cl").innerHTML=shtml;
	translate();      		
});

	function resizeM() 
	{
		var clientW=document.documentElement.clientWidth;
		var clientH=document.documentElement.clientHeight;
		if(clientH<590)
		{
			clientH=590;
		}

		g_playViewH=clientH - $(header).getCoordinates().height - $(dra).getCoordinates().height - 25;
		g_playViewW=(clientH*64/53);
		g_playViewW=Math.floor(g_playViewW);
		g_playViewH=Math.floor(g_playViewH);
		
		var towidth = g_playViewW + $(left).getCoordinates().width + $(right).getCoordinates().width + 10;
		var toheight = clientH - 20;
		var conheight = g_playViewH + $(dra).getCoordinates().height + 5;
		$('playView').setStyle('width',g_playViewW);
		$('playView').setStyle('height',g_playViewH);	
		
		$('bk').setStyle('height', toheight);
		$('header').setStyle('width', towidth);
		$('content').setStyle('width', towidth);
		$('content').setStyle('height', conheight);
		$('mid').setStyle('width', g_playViewW);
		$('chalist').setStyle('height', g_playViewH);
		$("ptzlist").setStyle('height', g_playViewH);
				
		g_4H=(g_playViewH-4)/2-1;
		g_4W=(g_playViewW-4)/2-1;	
		g_9H=(g_playViewH-6)/3-1;
		g_9W=(g_playViewW-6)/3-1;	
		g_16H=(g_playViewH-8)/4-1;
		g_16W=(g_playViewW-8)/4-1;	
		g_25H=(g_playViewH-10)/5-1;
		g_25W=(g_playViewW-10)/5-1;	
		g_36H=(g_playViewH-12)/6-1;
		g_36W=(g_playViewW-12)/6-1;	
			
		switch(g_nSplit)
		{
		case 1:
			{
				g_H=g_playViewH;
				g_W=g_playViewW;
				break;
			}
		case 4:
			{
				g_H=g_4H;
				g_W=g_4W; 	        
				  break; 	    
			}
		case 9:
			{
				g_H=g_9H;
				g_W=g_9W; 	        
				  break; 	    
			}
		case 16:
			{
				g_H=g_16H;
				g_W=g_16W; 	        
				  break; 	    
			}
		case 25:
			{
				g_H=g_25H;
				g_W=g_25W; 	        
				  break; 	    
			}
		case 36:
			{
				g_H=g_36H;
				g_W=g_36W; 	        
				  break; 	    
			}
		}
		
	}
	function rePaint() 
	{	
		for(var i=1;i<=g_nSplit;i++)
		{
			var vfid='vf';
			vfid+=i;   
			$(vfid).setStyle('width',g_W);
			$(vfid).setStyle('height',g_H);  
			if(g_viewStatu[i].vbPlaying!=true)
			{   			
				var first=$(vfid).getFirst();
				$(first).setStyle('background-color','#000000');
			} 
			else
			{
				if(i==g_clicked&&g_bigView)
				{
					 var wrap=$(vfid).getLast();                
					wrap.setStyle('width',g_playViewW);
					wrap.setStyle('height',g_playViewH);                
					continue;
				}
				else
				{
				 var wrap=$(vfid).getLast();
				wrap.setStyle('width',g_W);
				wrap.setStyle('height',g_H);
				}
			}		
		}     
	}

	function adjustLargeSize(nView,nSize) 
	{
		if(nSize>g_viewStatu[nView].bigestSize)
		{
			g_viewStatu[nView].bigestSize=nSize; 
			return true;
		}  
	   
		return false;
	}
var g_n=1;
var aa=0;
var g_playStyle=0;
	function playAll() 
	{	
		if(g_playStyle==0)
		{
			var buttonID='main';
			buttonID+=g_n;
			g_clicked=g_n;      
			if($(buttonID).hasClass('noMainPlay'))
			{
				mainClick(buttonID,g_n);
			}
			
		}
		else
		{
		   var buttonID='sub';
			buttonID+=g_n;
			g_clicked=g_n;
			if($(buttonID).hasClass('noSubPlay'))
			{
				subClick(buttonID,g_n);       
			}				
		}
		
		if(g_n>=g_channelNumber)//��·��
		{
			clearInterval(aa);         
			g_clicked=1;
			
			g_n=1;
			aa=0;
			clickV(1);
			return;
		}
		g_n++;
	}
	function IsLANIP() 
	{
	
		 var t=new Array();
		 t=g_address.split('.');
		if ((t[0] == 192 && t[1]== 168) ||(t[0] == 172 && t[1] >= 16 && t[1]<= 31) ||(t[0] == 0 || t[0]== 10))
		{
			return true;
		}
		return false;
	
	}
	function startPlayAll() 
	{
		if(IsLANIP())
		{
			$('mainAll').checked='checked';
		}
		else
		{
			 $('subAll').checked='checked';    
		}
		$('hi').setStyle('margin-top','300px');     
	}

	function closeHi() {
		$('hi').setStyle('margin-top','-1999px');
	}

	function ClickHi() 
	{
		if($('mainAll').checked==true)
		{
			g_playStyle=0;
			aa=setInterval("playAll()",10)//ʱ����
		}
		else
		{   g_playStyle=1;
			aa=setInterval("playAll()",10);
		}
		clickV(1);
		closeHi();
	}

	function StopPlayAll()
	{    
		if(aa!=0)        
		{
			clearInterval(aa);         
			g_clicked=1;        
			g_n=1;
			aa=0;
		}
	   for(var i=1;i<=g_channelNumber;i++)
	   {
			var main='main';main+=i;
			var sub='sub';sub+=i;
			$(sub).removeClass($(sub).className);
			$(sub).addClass('noSubPlay');
			$(main).removeClass($(main).className);
			$(main).addClass('noMainPlay');
			StopPlayReal(i);
			g_channelStatu[i].playing=false;
			g_channelStatu[i].streamStyle=2;
	   }
	   clickV(1);	   
	}
	
var ptzstate=0;
	function ajaxFunction(req, param)
	{
		 var xmlHttp; 
		 try
		{
			xmlHttp=new XMLHttpRequest();
		}
		catch (e)
		{
			try
			{
			 	xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
			}
		   	catch (e)
			{
				try
				{
					 xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
				}
			  	catch (e)
				{
				 	alert("�����������֧��AJAX��");
				 	return false;
				}
			 }
		}
		
		if(g_viewStatu[g_clicked].vbPlaying)
		{
			if(req=="start")		
			{
				xmlHttp.open("POST","dvrcmd",true); 			
				xmlHttp.send("TSCommand=ptz_req&req="+req+"&param="+param+"&channel="+g_viewStatu[g_clicked].nchannel+"&stream="+g_channelStatu[g_viewStatu[g_clicked].nchannel].streamStyle);
				ptzstate = 1;		
			}
			else if(req=="stop" && ptzstate == 1) 
			{
				xmlHttp.open("POST","dvrcmd",true);     
				xmlHttp.send("TSCommand=ptz_req&req="+req+"&param="+param+"&channel="+g_viewStatu[g_clicked].nchannel+"&stream="+g_channelStatu[g_viewStatu[g_clicked].nchannel].streamStyle);
				ptzstate = 0;		
				
			}
		}
	}
	
	switch(iLanguage)
	{
		case 100:
		{
			document.write("<script src='English.js'><\/script>");
			break;
		}
		case 101:
		{
			document.write("<script src='SimpChinese.js'><\/script>");
			break;
		}
		default:
		{        
			document.write("<script src='English.js'><\/script>");
			break;
		}
		
		
	}

	function translate() 
	{
		for(var i=1;i<=g_channelNumber;i++)
		{
			var name='CHname';    
			name+=i;    
			$(name).setText(Translate.ch+i);
			var main='main'            
			main+=i;
			$(main).title=Translate.MFt;
			if(i<=g_channelNumber-g_DigChannel)
			{
				var sub='sub'
				sub+=i;            
				$(sub).title=Translate.SFt;
			}
			
		}	
		$('xp1').title=Translate.Split1;
		$('xp2').title=Translate.Split4;
		$('xp3').title=Translate.Split9;
		$('xp4').title=Translate.Split16;
		$('xp5').title=Translate.Split25;
		$('xp6').title=Translate.Split36;
		$('startPlayAll').title=Translate.PlayAll;
		$('stopPlayAll').title=Translate.StopPlayAll;
		$('mainAllText').setText(Translate.mainPlayAll);
		$('subAllText').setText(Translate.subPlayAll);
		$('playAllOk').setText(Translate.ok);
		$('playAllCancel').setText(Translate.Cancel);
		$('logout').setText(Translate.logout);
		$('autoPromptText').setText(Translate.autoPrompt);
		$('version').setText(Translate.version);
		$('zoom').setText(Translate.zoom);
		$('focus').setText(Translate.focuss);
		$('IRIS').setText(Translate.iris);	
		$('mainAllText').setText(Translate.mainPlayAll);
	}

	function Logout() 
	{
		self.location='Login.htm';
	}

var gHashCookie = new Hash.Cookie('WebClientCookie',{duration: 30});
var settings = {
	autoPrompt:''
	}
	
	function savesetting() 
	{
		gHashCookie.extend(settings);
	}
	function getsetting()
	{
		if (gHashCookie.get('autoPrompt')) 
		{
			settings['autoPrompt'] = gHashCookie.get('autoPrompt');
		} 
		else 
		{
			settings['autoPrompt'] = '';
		}
		if(settings['autoPrompt']=="2") 
		{
			$('hi').setStyle('margin-top','-1999px'); 
			$('autoPrompt').checked=false;
		}
		else
		{
			startPlayAll(); 
		}
	}
	
	function AutoPromt() 
	{
		getsetting();
	}
	function ClickAutoPromt() 
	{
		if($("autoPrompt").checked)
		{        
			settings['autoPrompt'] =1;    
			savesetting();
		}
		else
		{
			settings['autoPrompt'] =2;    
			savesetting();
		}		
	}

	function MessageBox() 
	{
		wrap="<div id='versionB' style='position:absolute;font-family: ����, Arial, Helvetica, sans-serif;color: #000000;width:315px;height:220px;margin:200px 0 0 50%;z-index:1000;background-color: RGB(255,255,255)'>"
			+"<div style='background-color: RGB(33,33,33);width:315px;height:30px;'>"
				+"</div>"
				+"<div style='width:315px;height:160px;'>"
					+"<div style='color: #000000;margin-top:10px;text-align:left;padding-left:20px;'>"
					+Versions.vidioIn+g_VideoInChannel+"<br/>"                
					+Versions.alarmIn+g_AlarmInChannel+"<br/>"
					+ Versions.alarmOut+ g_AlarmOutChannel+"<br/>"
					+Versions.audioIn +g_AudioInChannel+"<br/>"
					+Versions.buildTime+g_mBuildTime+"<br/>"
					+Versions.version+g_SoftWareVersion+"<br/>"
					+Versions.serialNo+g_SerialNo+"<br/>"
					+"</div></br>"
					 +"<button onclick='$(\"versionB\").style.display=\"none\" ' style='cursor: pointer; width:75px;height:25px;color: #000000;'>"
					 +Versions.ok+"</button>"
				+"</div>"
				
				+"<div style='background-color: RGB(255,255,255);width:315px;height:30px;'>"
				+"</div>"
		 +"</div>"
	   $("MessageBox").setHTML(wrap); 
	}
	function Version() 
	{
		MessageBox();
	}
