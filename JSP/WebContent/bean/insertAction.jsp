<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<% 
	request.setCharacterEncoding("UTF-8");		//JSP에서는 request/response를 바로 사용 가능: 내장객체이기 때문
												//request, response, out, session, application, exception
%>
<jsp:useBean id="board" class="kosa.model.Board"/>
<jsp:setProperty property="*" name="board"/>	<!-- form에서 넘어오는 모든 데이터값들을 board객체로 -->

<%
	request.setAttribute("name", board.getWriter());	//board객체의 name을 set
%>

<jsp:forward page="result2.jsp"/>		<!-- 액션태그를 이용해서 Dispatcher -->

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<%
	out.println(board.toString());
%>

</body>
</html>