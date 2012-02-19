package com.shubhranshu.sedml.web;

import java.io.File;
import java.io.FileReader;
import java.io.IOException;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import javax.xml.transform.OutputKeys;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerException;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.dom.DOMSource;
import javax.xml.transform.stream.StreamResult;

import org.w3c.dom.Attr;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.NamedNodeMap;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import org.xml.sax.SAXException;

public class ConfigReader {

	private static Document doc = null;
	private static boolean dirty = true;

	public static Document getConfigDocument(File f) {
		DocumentBuilderFactory dbFactory = DocumentBuilderFactory.newInstance();
		if (doc == null || dirty) {
			try {
				DocumentBuilder dBuilder = dbFactory.newDocumentBuilder();
				doc = dBuilder.parse(f);
			} catch (SAXException | IOException | ParserConfigurationException e) {
				e.printStackTrace();
			}
		}
		dirty = false;
		return doc;
	}

	public static String[] getModels(String filePath) {
		File f = new File(filePath);
		NodeList nodes = getConfigDocument(f).getElementsByTagName("model");
		String[] models = new String[nodes.getLength()];
		for (int i = 0; i < nodes.getLength(); i++) {
			NamedNodeMap attrs = nodes.item(i).getAttributes();
			models[i] = attrs.getNamedItem("url").getNodeValue();
		}
		return models;
	}

	public static void addModels(String filePath, String modelUrl) {
		if (isUniqueModel(filePath, modelUrl)) {
			File f = new File(filePath);
			Document confDoc = getConfigDocument(f);
			NodeList nodes = confDoc.getElementsByTagName("models");
			Element elNode = confDoc.createElement("model");
			elNode.setAttribute("url", modelUrl);
			nodes.item(0).appendChild(elNode);
			writeToXML(confDoc, f);
			dirty = true;
		}
	}

	private static boolean isUniqueModel(String filePath, String modelUrl) {
		String[] models = getModels(filePath);
		for (String string : models) {
			if(string.compareToIgnoreCase(modelUrl) == 0)
				return false;
		}
		return true;
	}

	private static void writeToXML(Document doc, File configFile) {
		try {
			Transformer transformer = TransformerFactory.newInstance()
					.newTransformer();
			transformer.setOutputProperty(OutputKeys.INDENT, "yes");

			// initialize StreamResult with File object to save to file
			StreamResult result = new StreamResult(configFile);
			DOMSource source = new DOMSource(getConfigDocument(configFile));
			transformer.transform(source, result);
		} catch (TransformerException e) {
			e.printStackTrace();
		}
	}

	public static void addTool(String toolName, String toolDescription, String configPath) {
		if (isUniqueTool(configPath, toolName)) {
			File f = new File(configPath);
			Document confDoc = getConfigDocument(f);
			NodeList nodes = confDoc.getElementsByTagName("tools");
			Element elNode = confDoc.createElement("tool");
			elNode.setAttribute("name", toolName);
			elNode.setAttribute("description", toolDescription);
			nodes.item(0).appendChild(elNode);
			writeToXML(confDoc, f);
			dirty = true;
		}		
	}

	public static boolean isUniqueTool(String configPath, String toolName) {
		
		return true;
	}
	
	public static String[] getTools(String filePath){
		File f = new File(filePath);
		NodeList nodes = getConfigDocument(f).getElementsByTagName("tool");
		String[] tools = new String[nodes.getLength()];
		for (int i = 0; i < nodes.getLength(); i++) {
			NamedNodeMap attrs = nodes.item(i).getAttributes();
			tools[i] = attrs.getNamedItem("name").getNodeValue();
		}
		return tools;		
	}
}
