<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	Upload a file to server
	<br />
	<br />
	<form method="post" action="/SedML-WebBuilder/FileUploader" enctype="multipart/form-data">
		<input type="file" name="somename" size="20" /> <br /> <input
			type="submit" name="mysubmit" value="Click!" />
	</form>

</body>
</html>