<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="java.io.*" %>
<%@ page import="java.io.PrintWriter" %>
<%@ page import="Savedata.savedata" %>
<%@ page import="Savedata.savedataDAO" %>
<%request.setCharacterEncoding("UTF-8"); %>
<!DOCTYPE html>
<html>
<head>
	<title>Register</title>
		
</head>
<body>
<%
	String userName = request.getParameter("name");
	String score = request.getParameter("score");
	int sum = Integer.parseInt(score);
	
	savedata data = new savedata();
	savedataDAO dataDAO = new savedataDAO();
	
	data.setID(userName);
	data.setScore(sum);
	
	boolean result = dataDAO.join(data);
	if(result){
		PrintWriter script = response.getWriter();	
		script.println("<script>");
		script.println("alert('저장되었습니다.')");
		script.println("location.href = 'main.html'");
		script.println("</script>");
	}
	else{
		PrintWriter script = response.getWriter();	
		script.println("<script>");
		script.println("alert('저장 실패.')");
		script.println("location.href = 'main.html'");
		script.println("</script>");	
	}
%>
</body>
</html>