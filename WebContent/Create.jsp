<!DOCTYPE html>
<%@page import="com.shubhranshu.sedml.web.ConfigReader"%>
<html
	class=" js flexbox canvas canvastext webgl no-touch geolocation postmessage no-websqldatabase indexeddb hashchange history draganddrop no-websockets rgba hsla multiplebgs backgroundsize borderimage borderradius boxshadow textshadow opacity cssanimations csscolumns cssgradients no-cssreflections csstransforms no-csstransforms3d csstransitions fontface video audio localstorage sessionstorage webworkers applicationcache svg inlinesvg smil svgclippaths">
<head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<meta charset="utf-8">
<title>Create</title>
<link href="css/Site.css" rel="stylesheet" type="text/css">
<link type="text/css" href="css/redmond/jquery-ui-1.8.17.custom.css"
	rel="stylesheet" />
<link href="css/fileinput.css" rel="stylesheet" type="text/css">

<script src="js/jquery-1.js" type="text/javascript"></script>
<script src="js/jquery-ui-1.js" type="text/javascript"></script>
<script src="js/jquery.js" type="text/javascript"></script>
<script src="js/jquery_002.js" type="text/javascript"></script>
<script src="js/modernizr-1.js" type="text/javascript"></script>
</head>
<body>
	<div class="page">
		<header>
			<div id="title">
				<table class="noborder">
					<tbody>
						<tr>
							<td class="noborder"><img src="icon/logoSEDML_H75_t.png"
								alt="SED-ML logo"></td>
							<td class="noborder">
								<h1>Web Builder</h1>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div id="logindisplay">&nbsp;</div>
			<nav>
				<ul id="menu">
					<li><a href="Home.jsp">Home</a></li>
					<li><a href="Create.jsp">Create</a></li>
					<li><a href="Edit.jsp">Edit</a></li>
					<li><a href="Simulate.jsp">Simulate</a></li>
				</ul>
			</nav>
		</header>
		<section id="main">

			<div id="upload"></div>

			<h2>Create SED-ML Descriptions</h2>
			<p>This first step is to create SED-ML description for an CellML
				model. Simply upload the CellML model (or refer to one by miriam
				URN, or web site).</p>
			<div align="center">
				<form action="FileUploader" enctype="multipart/form-data"
					method="post">
					<table class="noborder">
						<tbody>
							<tr>
								<td class="noborder">
									<fieldset>
										<legend>Upload Model</legend>
										<div align="left">
											<div class="fileinput-wrapper ui-widget">
												FromFile: <input class="fileupload fileinput-file"
													name="cellML" id="file" type="file" />
											</div>
											<br />
											<div class="ui-widget">
												FromURL: <input name="url" id="url" type="text" />
											</div>
											<br />
											<div class="ui-widget">
												Recent: <select name="recent">
												<option value=""></option>
													<%
														String configPath = this.getServletContext().getInitParameter(
																"local.path")
																+ "/WEB-INF/app-custom-config.xml";
														String[] models = ConfigReader.getModels(configPath);
														System.out.println(models.length);
														for (int i = 0; i < models.length; i++) {
															String modelLocation = models[i];
															String[] _split = models[i].split("/");
															String displayName = _split[_split.length - 1];
													%><option value="<%=modelLocation%>">
														<%=displayName%></option>
													<%
														}
													%>

												</select>
											</div>
										</div>
									</fieldset>
								</td>
								<td class="noborder"></td>
								<td class="noborder"></td>
							</tr>
						</tbody>
					</table>
					<p>
						<input type="hidden" name="redir" value="Edit.jsp" /> <input
							value="Create SED-ML" type="submit" />
					</p>
					<input type="hidden" name="filetype" value="cellML" />
				</form>
			</div>



			<script type="text/javascript">
				reformal_wdg_domain = "sed-ml-webtools";
				reformal_wdg_mode = 0;
				reformal_wdg_title = "SED-ML Web Tools";
				reformal_wdg_ltitle = "Feedback";
				reformal_wdg_lfont = "";
				reformal_wdg_lsize = "";
				reformal_wdg_color = "#FFA000";
				reformal_wdg_bcolor = "#516683";
				reformal_wdg_tcolor = "#FFFFFF";
				reformal_wdg_align = "right";
				reformal_wdg_waction = 0;
				reformal_wdg_vcolor = "#9FCE54";
				reformal_wdg_cmline = "#E0E0E0";
				reformal_wdg_glcolor = "#105895";
				reformal_wdg_tbcolor = "#FFFFFF";

				reformal_wdg_bimage = "bea4c2c8eb82d05891ddd71584881b56.png";
			</script>

		</section>
		<footer> © 2011 Frank T. Bergmann. </footer>
		<script type="text/javascript">
			//         
			$(document).ready(function() {
				$('.buttons').button();
				$('.fileupload').fileinput();
			});
			//
		</script>
	</div>
	<jsp:include page="debug.jsp"></jsp:include>
</body>
</html>