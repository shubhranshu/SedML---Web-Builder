<jsp:include page="include.jsp"/>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>SedML-WebBuilder</title>
</head>
<body>
	<h1>Welcome to SedML WebBuilder</h1>
	<form action="FileUploader" method="post"
		enctype="multipart/form-data">
		Upload a SedML file<br /> <input type="file" name="sedML" /><br />
		<input type="hidden" name="key" value="upload" />
		<input type="submit" value="Upload SedML" />
	</form>
	<br />
	<h3>OR</h3>
	<br /> Create SedML
	<form action="RequestHandler" method="post" enctype="multipart/form-data" >
		<input type="hidden" name="key" value="create" />
		<input type="submit" value="Create SedML" />
	</form>
	<br />
</body>
</html>