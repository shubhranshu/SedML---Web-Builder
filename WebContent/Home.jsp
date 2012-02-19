<!DOCTYPE html>
<html
	class=" js flexbox canvas canvastext webgl no-touch geolocation postmessage no-websqldatabase indexeddb hashchange history draganddrop no-websockets rgba hsla multiplebgs backgroundsize borderimage borderradius boxshadow textshadow opacity cssanimations csscolumns cssgradients no-cssreflections csstransforms no-csstransforms3d csstransitions fontface video audio localstorage sessionstorage webworkers applicationcache svg inlinesvg smil svgclippaths">
<head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<meta charset="utf-8">
<title>Home Page</title>
<link type="text/css" href="css/redmond/jquery-ui-1.8.17.custom.css"
	rel="stylesheet" />
<link href="css/Site.css" rel="stylesheet" type="text/css">
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


			<h2>Welcome</h2>
			<p>The SED-ML Web tools represent a suite of tools for creating,
				editing, simulating SED-ML files.</p>

			<table class="noborder">
				<tbody>
					<tr>
						<td class="noborder"><a role="button"
							class="buttons ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only"
							href="Create.jsp" style="width: 100px;"><span
								class="ui-button-text">Create</span></a></td>
						<td class="noborder"></td>
						<td class="noborder">
							<p>Create a SED-ML document for an CellML model using a
								simple wizard.</p>
						</td>
					</tr>
					<tr>
						<td class="noborder">
							<form action="FileUploader" enctype="multipart/form-data"
								method="post">
								<table class="noborder">
									<tbody>
										<tr>
											<td class="noborder">
												<div class="fileinput-wrapper ui-widget">
													<input class="fileupload fileinput-file" name="sedML"
														id="file" type="file">
												</div>
											</td>
										</tr>
										<tr>
											<td class="noborder"><input type="submit"
												class="buttons ui-button ui-widget ui-state-default ui-corner-all"
												style="width: 220px;" value="Upload SED-ML" /></td>
										</tr>
									</tbody>
								</table>
								<input type="hidden" name="redir" value="Edit.jsp" />
							</form>
						</td>
						<td class="noborder"></td>
						<td class="noborder">
							<p>Upload a SED-ML Document for simulation</p>
						</td>
					</tr>
					<tr>
						<td class="noborder" colspan="3"></td>
					</tr>
				</tbody>
			</table>

			<p>
				For samples of SED-ML files to use on this site, please consult the
				<a
					href="http://libsedml.svn.sourceforge.net/viewvc/libsedml/trunk/Samples/sedx-archives/"
					target="_blank" title="LibSEDML sources">LibSedML sources</a>. For
				more information about SED-ML please consult the <a
					href="http://sed-ml.org/" target="_blank">project web site</a>.
			</p>

			<div id="currentModel"></div>



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

			<script type="text/javascript" language="JavaScript" src="js/tab6.js"></script>
			<style type="text/css">
.tdsfh {
	background:
		url('http://idea.informer.com/files/images/buttons/bea4c2c8eb82d05891ddd71584881b56.png');
}

* html .tdsfh {
	background-image: none;
	filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='http://idea.informer.com/files/images/buttons/bea4c2c8eb82d05891ddd71584881b56.png'
		);
}

.widsnjx {
	margin: 0 auto;
	position: relative;
}

.widsnjx fieldset {
	padding: 0;
	border: none;
	border: 0px solid #000;
	margin: 0;
}

.furjbqy {
	position: fixed;
	left: 0;
	top: 0;
	z-index: 5;
	width: 22px;
	height: 100%;
}

* html .furjbqy {
	position: absolute;
}

.furjbqy table {
	border-collapse: collapse;
}

.furjbqy td {
	padding: 0px;
	vertical-align: middle;
}

.furjbqy a {
	display: block;
	background: #FFA000;
}

.furjbqy a:hover {
	background: #FFA000;
}

.furjbqy img {
	border: 0;
}

.furrghtd {
	position: fixed;
	right: 0px;
	top: 0;
	z-index: 5;
	width: 22px;
	height: 100%;
}

* html .furrghtd {
	position: absolute;
}

.furrghtd table {
	border-collapse: collapse;
}

.furrghtd td {
	padding: 0px;
	vertical-align: middle;
}

.furrghtd a {
	display: block;
	background: #FFA000;
}

.furrghtd a:hover {
	background: #FFA000;
}

.furrghtd img {
	border: 0;
}

#poxupih {
	position: absolute;
	z-index: 1001;
	width: 689px;
	top: 0px;
	left: 0px;
	font-size: 11px;
	color: #3F4543;
	font-family: "Segoe UI", Arial, Tahoma, sans-serif;
}

.poxupih_top {
	width: 689px;
	height: 28px;
	background: transparent
		url(http://idea.informer.com/tmpl/images/popup_idea_top.png) 0 0
		no-repeat;
}

.poxupih_bt {
	width: 689px;
	height: 28px;
	background: transparent
		url(http://idea.informer.com/tmpl/images/popup_idea_bt.png) 0 0
		no-repeat;
}

.poxupih_center {
	width: 689px;
	background: transparent
		url(http://idea.informer.com/tmpl/images/popup_idea_bg.png) 0 0
		repeat-y;
}

.poxupih1 {
	margin: 0 20px;
	overflow: hidden;
	background: #efefef;
	padding: 0px;
}

.fdsrrel {
	float: right;
	margin: -2px 5px 0 0;
}

.bvnmrte {
	padding: 15px 20px 20px 12px;
	_padding-left: 1px;
	font-family: "Segoe UI", Arial, Tahoma, sans-serif;
	font-size: 11px;
	color: #3F4543;
}

.poxupih1 .bvnmrte {
	padding-bottom: 10px;
	padding-top: 0px;
	background: none;
}

.gertuik {
	padding: 0 8px 0 20px;
}

#poxupih #hretge {
	margin: 8px 0px;
	height: 96px;
	background: #fba11f
		url(http://idea.informer.com/tmpl/images/search_bg.gif) 0 0px
		no-repeat;
	position: relative;
}

#hretge form {
	padding: 10px 19px 0 18px;
}

#poxupih #bulbulh {
	width: 462px;
	float: left;
}

#adihet {
	float: right;
	background: transparent
		url(http://idea.informer.com/tmpl/images/add_idea_go.gif) 0 0px
		no-repeat;
	border: none medium;
	width: 132px;
	height: 27px;
	float: right;
	margin-right: -3px;
	cursor: pointer;
}

#adihet:hover {
	background-position: 0 -27px;
}

.drop_right {
	background: transparent
		url(http://idea.informer.com/tmpl/images/q_right1.gif) 0% 0px
		no-repeat;
	float: right;
	display: block;
	width: 8px;
	height: 11px;
	margin-top: 1px;
	font-size: 0;
}

.drop_left {
	background: transparent
		url(http://idea.informer.com/tmpl/images/q_left1.gif) 0% 0px no-repeat;
	float: right;
	display: block;
	width: 8px;
	height: 11px;
	margin-top: 1px;
}

.status_right {
	left: 15px !important;
	text-align: left;
	float: right;
	margin: 0 -15px 0 0;
}

#poxupih  a {
	position: relative;
	z-index: 10;
}

#poxupih .idea_green_top {
	height: 1%;
}

.poxupih_top {
	_background-image: none;
	_filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='http://idea.informer.com/tmpl/images/popup_idea_top.png'
		);
}

.poxupih_bt {
	_background-image: none;
	_filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='http://idea.informer.com/tmpl/images/popup_idea_bt.png'
		);
}

.poxupih_center {
	_background-image: none;
	_filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='http://idea.informer.com/tmpl/images/popup_idea_bg.png',
		sizingmethod='scale' );
}

.adihet_div {
	float: right;
	background: url(http://idea.informer.com/i/add_idea_go_lt.gif) top left
		no-repeat;
	height: 27px;
	margin-left: 0px;
	cursor: pointer;
}

.adihet_div:hover {
	background-position: 0 -27px;
}

#adihet {
	background: url(http://idea.informer.com/i/add_idea_go_rt.gif) top right
		no-repeat;
	border: none;
	height: 27px;
	cursor: pointer;
	color: #fff;
	font: 14px/27px 'Segoe UI', Arial, Tahoma, sans-serif;
	padding: 0 8px 3px;
	margin: 0;
}

#adihet:hover {
	background-position: 100% -27px;
}

a.pokusijy {
	display: block;
	width: 16px;
	height: 16px;
	background: transparent
		url(http://idea.informer.com/tmpl/images/cancel.gif) 100% 0px
		no-repeat;
	float: right;
	position: relative;
	z-index: 101;
}

a.pokusijy:hover {
	background-position: 100% 100%;
	cursor: pointer;
}

.i_prop {
	font-size: 18px;
	color: #fff;
	padding: 0 0 5px 0;
}

#bulbulh {
	width: 600px;
	padding: 2px 4px;
	color: #3F4543;
	font-family: "Segoe UI", Arial;
	font-size: 16px;
	margin-bottom: 5px;
}

#hdsfjfsr {
	background: transparent
		url(http://idea.informer.com/tmpl/images/search_go.gif) 0 0px
		no-repeat;
	border: none medium;
	width: 97px;
	height: 27px;
	float: right;
	margin-right: -3px;
	cursor: pointer;
}

#hdsfjfsr:hover {
	background-position: 0 -27px;
}

#poxupih .fdsrrel a {
	z-index: 0;
}
</style>
			<div class="furrghtd">
				<table height="100%">
					<tbody>
						<tr>
							<td valign="middle"><a
								href="javascript:MyOtziv.mo_show_box();"><img
									src="icon/bea4c2c8eb82d05891ddd71584881b56.png" alt=""
									style="border: 0pt none;" class="tdsfh"></a></td>
						</tr>
					</tbody>
				</table>
			</div>
			<div style="position: absolute; top: 50%; left: 50%;">
				<div
					style="position: absolute; display: none; top: -200px; left: -350px;"
					id="myotziv_box">
					<div class="widsnjx">
						<div id="poxupih">
							<div class="poxupih_top"></div>
							<div class="poxupih_center">
								<div class="poxupih1">
									<div class="gertuik">
										<a class="pokusijy" onclick="MyOtziv.mo_hide_box();"></a>
										<div class="fdsrrel">
											<a href="http://idea.informer.com/" target="_blank"><img
												src="icon/widget_logo.jpg" alt="" width="109" border="0"
												height="23"></a>
										</div>
										SED-ML Web Tools
									</div>
									<div id="hretge">
										<form target="_blank"
											action="http://sed-ml-webtools.idea.informer.com/proj/"
											method="get">
											<input name="charset" value="" type="hidden">
											<fieldset>
												<div class="i_prop">I would like to...</div>
												<input id="bulbulh" name="idea" type="text">
												<div class="adihet_div">
													<input id="adihet" value="Add feedback" type="submit">
												</div>
											</fieldset>
											<input type="hidden" name="filetype" value="sedML" />
										</form>
									</div>
									<div class="bvnmrte" style="height: 250px;" id="fthere"></div>
								</div>
							</div>
							<div class="poxupih_bt"></div>
						</div>
					</div>
				</div>
			</div>
			<noscript>
				<a href="http://sed-ml-webtools.idea.informer.com">SED-ML Web
					Tools feedback </a> <a href="http://idea.informer.com"><img
					src="http://widget.idea.informer.com/tmpl/images/widget_logo.jpg" /></a>
			</noscript>


		</section>
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
