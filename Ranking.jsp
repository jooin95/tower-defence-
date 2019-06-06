<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR" import="java.util.*" import="java.sql.*"%>
<%@ page import="java.io.*" %>
<%@ page import="java.io.PrintWriter" %>
<%@ page import="Savedata.savedata" %>
<%@ page import="Savedata.savedataDAO" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>Insert title here</title>
<style type="text/css">
	#rank1{
		position:absolute;
		top : 0px;
		left : 0px
		z-index : 0;
	}
		#rank2{
		position:absolute;
		top : 98px;
		left : 0px
				z-index : 0;
	}
		#rank3{
		position:absolute;
		top : 196px;
		left : 0px
				z-index : 0;
	}
		#rank4{
		position:absolute;
		top : 294px;
		left : 0px
				z-index : 0;
	}
	#list0{
	    font-weight:bold;
		position:absolute;
		top : 22px;
		left : 100px;
				z-index : 1;
	}#list1{
	font-weight:bold;
		position:absolute;
		top : 55px;
		left : 100px;
				z-index : 1;
	}#list2{
	font-weight:bold;
		position:absolute;
		top : 121px;
		left : 100px;
				z-index : 1;
	}
	#list3{
	font-weight:bold;
		position:absolute;
		top : 153px;
		left : 100px;
				z-index : 1;
	}
	#list4{
	font-weight:bold;
		position:absolute;
		top : 219px;
		left : 100px;
				z-index : 1;
	}
	#list5{
	font-weight:bold;
		position:absolute;
		top : 252px;
		left : 100px;
				z-index : 1;
	}
	#list6{
	font-weight:bold;
		position:absolute;
		top : 316px;
		left : 100px;
				z-index : 1;
	}
	#list7{
	font-weight:bold;
		position:absolute;
		top : 348px;
		left : 100px;
				z-index : 1;
	}
	
</style>
</head>
<body>

<div id="rank1">
<img src ="image/rank1.png" width="300px" height="100px"/>
</div>
<div id="rank2">
<img src ="image/rank2.png" width="300px" height="100px"/>
</div>
<div id="rank3">
<img src ="image/rank3.png" width="300px" height="100px"/>
</div>
<div id="rank4">
<img src ="image/rank4.png" width="300px" height="100px"/>
</div>
<%
	ArrayList<savedata> datas = new ArrayList<savedata>();
	savedataDAO dataDAO = new savedataDAO();
	datas = dataDAO.getDBList();
	int i=0;
	for(savedata re : datas)
	{	
		%>
		<div id="list<%=i%>">
			<span style = "color:white"><%=re.getID() %></span>
		</div>
		<%i++; %>
		<div id="list<%=i%>">
		 <span style = "color:white"><%=re.getScore() %></span>
		 </div>>
		<%i++;
	}
%>
</body>
</html>