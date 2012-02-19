<%@page import="java.util.Enumeration"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <div id="debug">
    <div class="debugNfo">
    Debug information
    </div>
<%
	String id = session.getId();
%>
	<div><span style="width:300px;">Session ID</span><span> : </span><span style="width:300px;"><%= session.getId() %></span></div>
<%
	Enumeration<String> names = session.getAttributeNames();
	while(names.hasMoreElements()){
		String name = names.nextElement();
%>	<div><span style="width:300px;"><%= name %></span><span> : </span><span style="width:300px;"><%= session.getAttribute(name) %></span></div>	
<%
	}
%>
</div>