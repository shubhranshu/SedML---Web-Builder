<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%
    String modelLocation = (String)session.getAttribute("cellML");
	String[] _split = modelLocation.split("/");
	String displayName = _split[_split.length - 1];
    %>
<div id="cellML">CellML in use :<span id="cellML-name"><%= displayName %></span></div>
<div id="sedML">Sed-ML in use :<span id="sedML-name"><%= session.getAttribute("sedML") %></span></div>
