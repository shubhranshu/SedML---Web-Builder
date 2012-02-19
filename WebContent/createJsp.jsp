<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	<form action="FileUploader" method="post"
		enctype="multipart/form-data">
		Upload a CellML model<br /> <input type="file" name="cellML" /><br />
		<input type="submit" value="Upload SedML" />
	</form>
	<br />
	<h3>OR</h3>
	<br /> Provide the CellML URL
	<form action="RequestHandler" method="post" >
		<input type="text" name="cellMLUrl" />
		<input type="submit" value="Create SedML" />
	</form>
</body>
</html>