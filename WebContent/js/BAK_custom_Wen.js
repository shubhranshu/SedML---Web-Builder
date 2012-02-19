/*
 * @author : Shubhranshu
 * Custom javascript functions
 * TASK LIST : 
 * # confirm and implement a collection feature restricting maximum number of nodes
 * # Implement a Collapsible tree
 * # Implement type checking and validations
 * # load tree from xml and vice-versa 
 * # When xs:sequence > xs:choice without a name the default element is not an element it is a collection containing 2 values inside it 
 * -- This problem can be solved when creating the master node : don't create the collection node and find a proper way what makes a collection
 * -- what is the difference between a collection and a sequence
 * # attach elements to the Jsonix context
 * # provide Marshelling
 * # don't add elements on the run, Click and convert to XML when user is done 
 * # Implement a collapsible nodes

 */

var xString = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><sedML xmlns="http://sed-ml.org/" xmlns:ns2="http://www.w3.org/1999/xlink" xmlns:ns3="http://www.w3.org/1998/Math/MathML"/>';
var xDoc;
var nodeUid = 0;
var _xmlNs = "http://sed-ml.org/";

$(function() {
	jsx = new JsxTree();
	jsx.context = new Jsonix.Context([ org.sed_ml.Mappings ]);
	jsx.unmarshaller = jsx.context.createUnmarshaller();
	jsx.marshaller = jsx.context.createMarshaller();
	jsx.rootNode = jsx.unmarshaller.unmarshalString(xString);
	jsx.rootNode.id = 'node_' + nodeUid++;
	$.jsx = jsx;
	// jsx.xDoc = marshall();
	jsx.initTreeAt('#xRoot');
	initEventHandlers();
	// $('#tabs').tabs({ cookie: {}, cache: false });
	$('#tabs').tabs();
});

// to create an xml document from a jsonix object
marshall = function() {
	val = $.jsx.marshaller.marshalDocument($.jsx.rootNode);
	return val;
}

function initEventHandlers() {
	/*
	 * $('.options').on('click', function(event){ // get type from the event
	 * alert('called'); $.jsx.createElementFromType(event.currentTarget);
	 * //typeInfo.properties[0].name });
	 */

	// implement the function to create a node
	$('.options').delegate(
			'.iconFL',
			'click',
			function(event) {
				// alert('called');
				// If it is not an element return and do nothing
				_parent = event.currentTarget.parentNode;
				if (_parent.className != 'options')
					return;
				_parentID = _parent.parentElement.id;
				coll = eval(_parent.childNodes[1].getAttribute('collection'));
				cName = _parent.childNodes[1].getAttribute('className');
				xmlNS = _parent.childNodes[1].getAttribute('xmlNS');
				newEl = $.jsx.createElementFromType('<' + cName + ' xmlns="'
						+ xmlNS + '"></' + cName + '>');
				newEl.id = 'node_' + nodeUid++;
				_htmlNode = $.jsx.createHtmlNode(newEl, coll);
				if (!coll) {
					$(_parent.childNodes[0]).remove();
					$(_parent.childNodes[0]).remove();
				}
				$(_parent).append(_htmlNode);
			});

	// implement to delete a node
	/*
	 * $('.options').delegate('.options-name', 'click', function(event){
	 * //alert('called'); // point to the selector of the last element
	 * childNodes
	 * aim=event.currentTarget.parentNode.getElementsByClassName('element'); if
	 * (aim.length<1) return; $(aim[aim.length-1]).remove(); });
	 */

	// implement to validate the input format
	$('body').delegate(
					'span[class="attribute-value"] > input',
					'blur',
					function(event) {
						// alert('hi');
						_class = $(event.currentTarget).attr('class');
						if (_class == 'decimal') {
							// Checks that an input string is a decimal number,
							// with an optional +/- sign character.
							var isDecimal_re = /^\s*(\+|-)?((\d+(\.\d+)?)|(\.\d+))\s*$/;
							validator = String($(event.currentTarget).val()).search(isDecimal_re) != -1;
							if (!validator) {
								$('#dialog-decimal').dialog({position : [event.target.getClientRects()[0].right,event.target.getClientRects()[0].top ]});
							}
						} else if (_class == 'integer') {
							// checks that an input string is an integer, with
							// an optional +/- sign character.
							var isInteger_re = /^\s*(\+|-)?\d+\s*$/;
							validator = String($(event.currentTarget).val()).search(isInteger_re) != -1;
							if (!validator) {
								$('#dialog-integer')
										.dialog(
												{
													position : [
															event.target
																	.getClientRects()[0].right,
															event.target
																	.getClientRects()[0].top ]
												});
							}
						} else if (_class == 'double') {

							// Checks that an input string is a decimal number
							// (double), with an optional +/- sign character.
							var isDecimal_re = /^\s*(\+|-)?((\d+(\.\d+)?)|(\.\d+))\s*$/;
							validator = String($(event.currentTarget).val())
									.search(isDecimal_re) != -1;
							if (!validator) {
								$('#dialog-double')
										.dialog(
												{
													position : [
															event.target
																	.getClientRects()[0].right,
															event.target
																	.getClientRects()[0].top ]
												});
							}
						} else if (_class == 'boolean') {

							// Checks that an input string is a boolean (true or
							// false), with an optional +/- sign character.
							if (!($(event.currentTarget).val() == 'true' || $(
									event.currentTarget).val() == 'false')) {
								$('#dialog-boolean')
										.dialog(
												{
													position : [
															event.target
																	.getClientRects()[0].right,
															event.target
																	.getClientRects()[0].top ]
												});
							}
						} else if (_class == 'string') {
							// Check if string is non-blank
							var isNonblank_re = /\S/;
							validator = String($(event.currentTarget).val())
									.search(isNonblank_re) != -1;
							if (!validator) {
								$('#dialog-string')
										.dialog(
												{
													position : [
															event.target
																	.getClientRects()[0].right,
															event.target
																	.getClientRects()[0].top ]
												});
							}
						}
					});

	// to c
	$('body')
			.delegate(
					'.ui-icon-closethick',
					'click',
					function(event) {
						aim = event.currentTarget.parentNode.parentNode;
						if (aim.getAttribute('collection') == "true") {
							$(aim).remove();
						} else {
							elName = event.target.parentNode.children[1].innerHTML;
							// to append the original element after delete the
							// old one
							optIcon = $($.jsx.contentNode).addClass(
									$.jsx.addIconClass);
							optName = $($.jsx.contentNode).addClass(
									$.jsx.optionsClass + $.jsx.nameSuffix)
									.append(elName);
							optName.attr('xmlNS', 'http://sed-ml.org/');
							optName.attr('collection', 'false');
							optName.attr('className', elName);
							$(aim.parentNode).append(optIcon);
							$(aim.parentNode).append(optName);
							$(aim).remove();
						}
					});

	$('div[class="element"]').delegate('div[class="element-div"] > .iconFL',
			'click', function(event) {
				pId = $(event.currentTarget.parentNode.parentNode).attr('id');
				obj = $(event.currentTarget.parentNode.firstChild);
				if (obj.hasClass('ui-icon-triangle-1-s')) {
					obj.removeClass('ui-icon-triangle-1-s');
					obj.addClass('ui-icon-triangle-1-e');
					$('#' + pId + ' > div[class="attribute"]').hide();
					$('#' + pId + ' > div[class="options"]').hide();
				} else {
					obj.removeClass('ui-icon-triangle-1-e');
					obj.addClass('ui-icon-triangle-1-s');
					$('#' + pId + ' > div[class="attribute"]').show();
					$('#' + pId + ' > div[class="options"]').show();
				}
			});
};
/*
 * $('.element').delegate('div > .iconFL ', 'click', function(event){
 * $(event.currentTarget.parentNode.parentNode.children).toggle('fold'); });
 */

JsxTree = function() {

	this.contentNode = '<span>';
	this.containerNode = '<div>';
	this.inputNode = '<input type="text" value="1.0">';
	this.treeExpdClass = 'iconFL ui-icon ui-icon-triangle-1-s';
	this.treeCollClass = 'iconFL ui-icon ui-icon-triangle-1-e';
	this.treeDelClass = 'iconRL ui-icon ui-icon-closethick';
	this.elementClass = 'element';
	this.elementIContainerClass = 'element-div';
	this.attributeClass = 'attribute';
	this.optionsClass = 'options';
	this.addIconClass = 'iconFL ui-icon ui-icon-plus';
	this.nameSuffix = '-name';
	this.valueSuffix = '-value';
	this.iconSuffix = '-icon';
	this.initTreeAt = function(selector) {
		$(selector).append(this.createHtmlNode(this.rootNode));
	}

	// create an html node
	this.createHtmlNode = function(node, coll) {
		typeInfo = jsx.context.getElementInfo(node.name).typeInfo;
		optional = this.getElements(typeInfo);
		attributes = this.getAttributes(typeInfo);
		stringName = node.name.localPart;
		_element = $(this.containerNode).addClass(this.elementClass);
		_iContainer = $(this.containerNode).append($(this.contentNode).addClass(this.treeExpdClass));
		_iContainer.addClass(this.elementIContainerClass);
		_element.append(_iContainer.append($(this.contentNode).addClass(this.elementClass + this.nameSuffix).append(stringName)));
		if (stringName != "sedML")
			_iContainer.append($(this.contentNode).addClass(this.treeDelClass));
		_element.attr('id', node.id);
		if (coll)
			_element.attr('collection', 'true');
		else
			_element.attr('collection', 'false');
		for (i = 0; i < attributes.length; i++) {
			attrName = $(this.contentNode).addClass(this.attributeClass + this.nameSuffix).append(attributes[i].name);
			_iNode = $(this.inputNode);
			_iNode.addClass(this.getTypeClass(node.name, attributes[i].name));
			attrValue = $(this.contentNode).addClass(this.attributeClass + this.valueSuffix).append(_iNode);
			attr = $(this.containerNode).addClass(this.attributeClass);
			attr.append(attrName);
			attr.append(attrValue);
			$(_element).append(attr);
		}

		for (i = 0; i < optional.length; i++) {
			optIcon = $(this.contentNode).addClass(this.addIconClass);
			optName = $(this.contentNode).addClass(this.optionsClass + this.nameSuffix).append(optional[i].name);
			/*
			 * Since it is a collection This codeline is #hack and should be
			 * modified properly
			 */

			optName.attr('xmlNS', 'http://sed-ml.org/');
			if (this.isCollection(optional[i])) {
				optName.attr('collection', 'true');
			} else {
				// optName.attr('xmlNS', optional[i].elementName.namespaceURI);
				optName.attr('collection', 'false');
			}
			optName.attr('className', optional[i].name);
			attr = $(this.containerNode).addClass(this.optionsClass);
			attr.append(optIcon);
			attr.append(optName);
			$(_element).append(attr);
		}

		return _element;
	}

	this.getAttributes = function(typeInfo) {
		attributes = new Array();
		for (i = 0; i < typeInfo.properties.length; i++) {
			if (typeInfo.properties[i].CLASS_NAME == "Jsonix.Model.AttributePropertyInfo")
				attributes.push(typeInfo.properties[i]);
		}
		return attributes;
	}

	this.getElements = function(typeInfo) {
		elements = new Array();
		for (i = 0; i < typeInfo.properties.length; i++) {
			if (typeInfo.properties[i].CLASS_NAME == "Jsonix.Model.ElementPropertyInfo"
					|| typeInfo.properties[i].CLASS_NAME == "Jsonix.Model.ElementsPropertyInfo")
				elements.push(typeInfo.properties[i]);
		}
		return elements;
	}

	this.isCollection = function(el) {
		return el.collection;
	}

	this.checkCollectionType = function(typeName) {
		created = this.createElementFromType('<' + typeName + ' xmlns="'
				+ _xmlNs + '"></' + typeName + '>');
		var p;
	}

	this.createElementFromType = function(elType) {
		xType = this.unmarshaller.unmarshalString(elType);
		return xType;
	}

	this.searchDFS = function(elementId, node) {
		if (node == null)
			node = $.jsx.rootNode;
		if (node.id == elementId)
			return node;
		for (node2 in node.value)
			return this.searchDFS(elementId, node.value[node2]);
	}

	// convert the input to a required format
	this.convertToDesiredType = function(node, attribute, value) {
		if (value.length > 0) {
			className = node.children()[0].childNodes[1].innerHTML;
			created = this.createElementFromType('<' + className + ' xmlns="'
					+ _xmlNs + '" />');
			elInfo = $.jsx.context.getElementInfo(created.name);
			props = elInfo.typeInfo.properties;
			for (i in props) {
				if (props[i].name == attribute) {
					return props[i].typeInfo.parse(value);
				}
			}
		}
		return;
	}

	// to get the type of class for a particular node
	this.getTypeClass = function(node, attribute) {
		typeInfo = jsx.context.getElementInfo(node).typeInfo;
		props = typeInfo.properties;
		for (j in props) {
			if (props[j].name == attribute) {
				if (props[j].typeInfo.CLASS_NAME == 'Jsonix.Schema.XSD.Decimal')
					return 'decimal';
				else if (props[j].typeInfo.CLASS_NAME == 'Jsonix.Schema.XSD.String')
					return 'string';
				else if (props[j].typeInfo.CLASS_NAME == 'Jsonix.Schema.XSD.Double')
					return 'double';
				else if (props[j].typeInfo.CLASS_NAME == 'Jsonix.Schema.XSD.Integer')
					return 'integer';
				else if (props[j].typeInfo.CLASS_NAME == 'Jsonix.Schema.XSD.Boolean')
					return 'boolean';
			}
		}
	}

	// to convert the html node to a jsonix object
	this.htmlToJsx = function(selector, cNode) {
		node = $(selector);
		uid = '#' + node.attr('id');
		root = false;
		if (!cNode) {
			cNode = $.jsx.rootNode.value;
			root = true;
		}

		cNode = {};

		// Add all attributes to the node
		$(uid + ' > .attribute').each(
				function(i) {
					attrName = this.childNodes[0].textContent;
					val = $.jsx.convertToDesiredType(node, attrName,
							this.childNodes[1].firstChild.value);
					// val = this.childNodes[1].firstChild.value;
					if (val)
						cNode[attrName] = val;
				});

		// For each nested element
		$(uid + ' > .options > .element').each(function(i) {
			name = this.firstChild.childNodes[1].textContent;
			coll = eval(this.getAttribute('collection'));
			if (coll) {
				// to check whether the cNode[name] has been created, if not
				// then create it as a new array
				if (!$.isArray(cNode[name]))
					cNode[name] = new Array();
				cNode[name].push($.jsx.htmlToJsx(this, cNode[name]));
			} else {
				cNode[name] = $.jsx.htmlToJsx(this, cNode[name]);
			}
		});

		if (root)
			$.jsx.rootNode.value = cNode;
		return cNode;
	}

	// to convert a html node to an xml document

	this.htmlToXml = function() {
		$.jsx.rootNode.value = $.jsx.htmlToJsx('#node_0');
		return $.jsx.marshaller.marshalString($.jsx.rootNode);
	}

	this.attachProperties = function(uid, cNode) {
		$(uid + ' > .attribute').each(
				function(kk) {
					attrName = this.childNodes[0].textContent;
					val = $.jsx.convertToDesiredType(node, attrName,
							this.childNodes[1].firstChild.value);
					if (val)
						cNode[attrName] = val;
				});
		return cNode;
	}
}


function toXml(){
	_xml = $.jsx.htmlToXml();
	$('#ModelXML').val(_xml);
}