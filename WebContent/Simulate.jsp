<!DOCTYPE html>
<%@page import="com.shubhranshu.sedml.web.ConfigReader"%>
<html class=" js flexbox canvas canvastext webgl no-touch geolocation postmessage no-websqldatabase indexeddb hashchange history draganddrop no-websockets rgba hsla multiplebgs backgroundsize borderimage borderradius boxshadow textshadow opacity cssanimations csscolumns cssgradients no-cssreflections csstransforms no-csstransforms3d csstransitions fontface video audio localstorage sessionstorage webworkers applicationcache svg inlinesvg smil svgclippaths"><head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <meta charset="utf-8">
    <title>Simulate</title>
    <link href="css/Site.css" rel="stylesheet" type="text/css">
    <link href="css/fileinput.css" rel="stylesheet" type="text/css">
	<link type="text/css" href="css/redmond/jquery-ui-1.8.17.custom.css" rel="stylesheet" />
	
	
    <script src="js/jquery-1.js" type="text/javascript"></script>
    <script src="js/jquery-ui-1.js" type="text/javascript"></script>
    <script src="js/jquery.js" type="text/javascript"></script>
    <script>
    	$(function(){
    		$('#simTool').change(function(){
    			toggleFileState();
			});
    		toggleFileState();
    	});
    	
    	function toggleFileState(){
			if($('#simTool').is(":checked")){
				$('#fileDiv').show();
				$('#discDiv').show();
			}else{
				$('#fileDiv').hide();
				$('#discDiv').hide();
			}
		}
    </script>
</head>
<body>
    <div class="page">
        <header>
            <div id="title">
                <table class="noborder">
                <tbody><tr>
                <td class="noborder">
                <img src="icon/logoSEDML_H75_t.png" alt="SED-ML logo">
                </td><td class="noborder">
                <h1> Web Builder</h1>
                </td></tr>
                </tbody></table>
            </div>
            <div id="logindisplay">
                
                &nbsp;
            </div>
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

            

<h2>Simulate</h2>
	<form method="post" action="SimulationSetup" enctype="multipart/form-data">
    <fieldset>
    	<legend>Setup the simulation workspace</legend>
    	<jsp:include page="FileInfos.jsp"></jsp:include>
    	<div>
    		<span style="display: inline-block;font-size: 15px;width: 120px;">Select Tool :</span>
	    	<span>
		    	<select name="toolSelector">
		    	<%
					String configPath = this.getServletContext().getInitParameter(
							"local.path")
							+ "/WEB-INF/app-custom-config.xml";
					String[] tools = ConfigReader.getTools(configPath);
					System.out.println(tools.length);
					for (int i = 0; i < tools.length; i++) {
						String toolName = tools[i];
						String[] _split = tools[i].split("/");
						String displayName = _split[_split.length - 1];
				%><option value="<%=toolName%>">
					<%=displayName%></option>
				<%
					}
				%>

		    	</select>
	    	</span>
    	</div>
    	<div><span style="display: inline-block;font-size: 15px;width: 120px;">Upload New</span><span><input type="checkbox" id="simTool" name="simTool" /></span></div>
    	<div id="fileDiv"><span style="display: inline-block;font-size: 15px;width: 120px;">Browse tool :</span><input name="newToolFile" type="file" /></div>
    	<div id="discDiv"><span style="display: inline-block;font-size: 15px;width: 120px;">Tool Description :</span><textarea id="toolText" name="toolText" cols="2" ></textarea></div>
    </fieldset>

		<input type="submit" value="Download Workspace" />
		<input type="hidden" name="fname" value="<%= session.getId() %>" />
		<input type="hidden" name="packed" value="true" />
	</form>
        </section>
    </div>


</body></html>