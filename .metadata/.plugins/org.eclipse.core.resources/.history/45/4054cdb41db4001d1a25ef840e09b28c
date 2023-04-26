<%@page import="java.util.Date" %>
<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Insert title here</title>
</head>
<body>
<c:set var="fruit" value="${param.fruit }"/>
<c:out value="${fruit }"/><br>

<c:if test="${fruit == 'apple' }">
    <c:out value="사과"/><br>
</c:if>

<c:choose>
    <c:when test="${fruit == 'apple' }">
        <c:out value="사과 입니다."/>
    </c:when>
    <c:when test="${fruit == 'banana' }">
        <c:out value="바나나 입니다."/>
    </c:when>
    <c:otherwise>
        <c:out value="기타 과일 입니다."/>
    </c:otherwise>
</c:choose>
<br><br>


<c:set var="now" value="<%= new Date() %>"/>
before : ${now } <br>
after : <fmt:formatDate value="${now }" pattern="yyyy-MM-dd"/><br><br>

<fmt:formatNumber value="3.14542347686" pattern="#.00"/><br><br>
<fmt:formatNumber value="0.9" type="percent"/><br><br>
<fmt:formatNumber value="3000000000" type="currency" currencySymbol="$"/>

</body>
</html>








