<!DOCTYPE html>


<html class=" js flexbox canvas canvastext webgl no-touch geolocation postmessage no-websqldatabase indexeddb hashchange history draganddrop no-websockets rgba hsla multiplebgs backgroundsize borderimage borderradius boxshadow textshadow opacity cssanimations csscolumns cssgradients no-cssreflections csstransforms no-csstransforms3d csstransitions fontface video audio localstorage sessionstorage webworkers applicationcache svg inlinesvg smil svgclippaths"><head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">

    <title>Edit</title>

	<link type="text/css" href="css/redmond/jquery-ui-1.8.17.custom.css" rel="stylesheet" />
    <link href="css/Site.css" rel="stylesheet" type="text/css">
    <link href="css/fileinput.css" rel="stylesheet" type="text/css">
	<link type="text/css" href="css/shubhranshu-custom.css"  rel="stylesheet" />
	
	<!--
    <script src="js/jquery-1.js" type="text/javascript"></script>
    <script src="js/jquery-ui-1.js" type="text/javascript"></script>	
    <script src="js/jquery.js" type="text/javascript"></script>
    <script src="js/jquery_002.js" type="text/javascript"></script>
    <script src="js/modernizr-1.js" type="text/javascript"></script>
-->
	<script src="js/jquery-1.7.1.min.js" type="text/javascript"></script>
	<script src="js/jquery-ui-1.8.17.custom.min.js" type="text/javascript"></script>
	<script src="js/jsonix-scripts-1.0-all.js" type="text/javascript"></script>
	<script src="js-schema/org/sed_ml/Mappings.js" type="text/javascript"></script>
	<script src="js/custom.js" type="text/javascript"></script>
	
	
	
</head>
<body onload="buildCellMLModel()">
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
            

        <h2>Edit SedML</h2>
   <p> <jsp:include page="FileInfos.jsp"></jsp:include> </p>
 
 
    <div id="tabs">
		<ul>
			<li><a href="#tabs-1">Edit Experiment</a></li>
			<li><a href="#tabs-2" onclick="toXml()">Edit XML</a></li>
		</ul>
    <div id="tabs-1">
        <div>			
				<fieldset>					
						<div id="infoHeader"></div>
						<div id="messageCache"></div>
						<div id="xRoot"></div>
						<!-- <input type="button" onclick="$.jsx.htmlToJsx('#node_0')" value="To XML" />-->
			     </fieldset>
		<div id="dialog-decimal" class="validation-dialog" title="Format Error">
			<p>Please input a decimal</p>
		</div>
		
		<div id="dialog-double" class="validation-dialog" title="Format Error">
			<p>Please input a double</p>
		</div>

		<div id="dialog-integer" class="validation-dialog" title="Format Error">
			<p>Please input a integer</p>
		</div>

		<div id="dialog-boolean" class="validation-dialog" title="Format Error">
			<p>Please input true or false</p>
		</div>

		<div id="dialog-string" class="validation-dialog" title="Format Error">
			<p>Please input a string</p>
		</div>

		</div>
    </div>
	
	

    <div id="tabs-2">
        <div>
				<fieldset>
                    <legend>Edit XML</legend>
                    <p style="color: Gray">Edit the document using XML.</p>
                    <form method="post" action="SaveXml">
                    <textarea cols="20" id="ModelXML" name="ModelXML" rows="2">&lt;?xml version="1.0" encoding="utf-8"?&gt;
&lt;!-- Written by libSedML v1.1.4400.38005 see http://libsedml.sf.net --&gt;
&lt;sedML level="1" version="1" xmlns="http://sed-ml.org/" /&gt;</textarea>
                    <p>
                        <input value="Save changes" type="submit"></p>
                        </form>
                </fieldset>
        </div>
    </div>
</div>

            
        </section>
    </div>

<jsp:include page="debug.jsp"></jsp:include>
</body></html>