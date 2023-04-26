<%@page import="java.util.ArrayList" %>
<%@page import="kosa.bean.Person" %>
<%@page import="java.util.List" %>
<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Insert title here</title>
</head>
<body>
<%
    String hello = "Hello!!!";
%>

<c:set var="msg" value="Hello2!!!"/>
<c:set var="msg2" value="<%= hello %>"/>
<c:out value="${msg2 }"/>

<!-- forEach =>구구단 4단 -->
<ul>
    <c:forEach var="i" begin="1" end="9">	<!-- forEach:자바의 for문과 같음 (1부터 9까지) -->
        <li>4 * ${i } = ${4*i }</li>
    </c:forEach>
</ul>

<%
    List<Person> list = new ArrayList<Person>();
    list.add(new Person("홍길동"));
    list.add(new Person("박길동"));
    list.add(new Person("김길동"));

    request.setAttribute("list2", list);	/* 무조건 setAttr로 list2키로 넣어주고 */
%>

<table border="1">
    <tr>
        <td>이름</td>
    </tr>
    <c:forEach var="p" items="${list2 }">	<!-- el태그안의 키 list2 객체의 요소 개수만큼 begin,end XX -->
        <tr>
            <td>${p.name }</td>
        </tr>
    </c:forEach>
</table>

</body>
</html>














