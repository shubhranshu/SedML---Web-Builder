package com.shubhranshu.sedmlbuilder;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStream;
import java.net.FileNameMap;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.tomcat.util.http.fileupload.FileItem;
import org.apache.tomcat.util.http.fileupload.FileUploadException;
import org.apache.tomcat.util.http.fileupload.disk.DiskFileItemFactory;
import org.apache.tomcat.util.http.fileupload.servlet.ServletFileUpload;

import com.shubhranshu.sedml.web.ConfigReader;
import com.shubhranshu.sedml.web.FileUtil;

/**
 * Servlet implementation class FileUploader
 */
@WebServlet("/FileUploader")
public class FileUploader extends HttpServlet {
	private static final long serialVersionUID = 1L;
	public static final String saveLocation = "WEB-INF/data/";
	public static final String toolsLocation = "WEB-INF/tools/";
	public static String userWsLocation = "dummy";
	public static String globalToolsLocation;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public FileUploader() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		try {
			String redirTarget = "";
			String fileName = null;
			boolean done = false;
			List<FileItem> items = new ServletFileUpload(
					new DiskFileItemFactory()).parseRequest(request);
			for (FileItem item : items) {
				if (item.isFormField()) {
					// Process regular form field (input
					// type="text|radio|checkbox|etc", select, etc).
					String fieldname = item.getFieldName();
					String fieldvalue = item.getString();
					if (fieldname.equalsIgnoreCase("redir"))
						redirTarget = fieldvalue;
					else if ((fieldname.equalsIgnoreCase("url") || fieldname.equalsIgnoreCase("recent")) 
							&& fieldvalue.trim().length() > 0
							&& !done ) {
						String configPath = this.getServletContext().getInitParameter("local.path") + "/WEB-INF/app-custom-config.xml";
						String wsFolder = checkInitFolder(request);
						ConfigReader.addModels(configPath, fieldvalue);
						fileName = fieldvalue;
						FileUtil.fetchSave(fieldvalue, wsFolder);
						done = true;
					}else if(fieldname.equalsIgnoreCase("filetype")){
						request.getSession().setAttribute(fieldvalue, fileName);
					}
				} else {
					// Process form file field (input type="file").
					String fieldname = item.getFieldName();
					String filename = (item.getName());
					if (filename.trim().length() > 0) {
						//Empty file name return without anything
						String[] splitted = filename.split("\\\\");
						filename = splitted[splitted.length - 1];
						InputStream filecontent = item.getInputStream();
						String wsLocation = checkInitFolder(request);
						fileName = filename;
						File f = new File(wsLocation + "/" + filename);
						BufferedInputStream bis = new BufferedInputStream(
								filecontent);
						FileOutputStream fos = new FileOutputStream(f);
						byte[] buff = new byte[256];
						int rByte = 0;
						while ((rByte = bis.read(buff)) > 0) {
							fos.write(buff, 0, rByte);
						}
						fos.close();
						bis.close();
						done = true;
					}
				}
			}
			request.getSession().setAttribute("redir", redirTarget);
			response.sendRedirect(redirTarget);
		} catch (Exception e) {
			e.printStackTrace(System.err);
			throw new ServletException("FileUpload Error", e);
			// response.sendRedirect(request.getPathTranslated());
		}
	}


	/**
	 * 
	 * @param request
	 * @return
	 * @throws IOException
	 */
	private String checkInitFolder(HttpServletRequest request)
			throws IOException {
		String localPath = this.getServletContext().getInitParameter(
				"local.path");
		String fName = localPath + saveLocation + request.getSession().getId();
		String toolsFolder = localPath + toolsLocation;
		File folder = new File(fName);
		if (folder.exists()) {
			System.out.println("The folder exists returning path : "
					+ folder.getPath());
		} else {
			System.out.println("Creating folder : " + folder.getPath());
			folder.mkdir();
		}
		userWsLocation = (folder.getPath());
		globalToolsLocation = toolsFolder;
		return folder.getPath();
	}

}
