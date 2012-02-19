package com.shubhranshu.sedml.web;

import java.io.BufferedInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.List;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.tomcat.util.http.fileupload.FileItem;
import org.apache.tomcat.util.http.fileupload.disk.DiskFileItemFactory;
import org.apache.tomcat.util.http.fileupload.servlet.ServletFileUpload;

import com.shubhranshu.sedmlbuilder.FileUploader;

/**
 * Servlet implementation class SimulationSetup
 */
@WebServlet("/SimulationSetup")
public class SimulationSetup extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private String toolDescription;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public SimulationSetup() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {

		try {
			String redirTarget = "";
			boolean isNewUpload = false;
			String toolName = null;
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
					else if (fieldname.equalsIgnoreCase("simTool"))
						isNewUpload = true;
					else if (fieldname.equalsIgnoreCase("toolText")) {
						toolDescription = fieldvalue;
					} else if ((fieldname.equalsIgnoreCase("toolSelector"))
							&& fieldvalue.trim().length() > 0) {
						String wsFolder = FileUploader.userWsLocation;
						toolName = fieldvalue;
						FileUtil.copyTool(FileUploader.globalToolsLocation + toolName, wsFolder + "/" + toolName);
					}
				}
			}

			for (FileItem item : items)
				if (!item.isFormField()) {
					// Process form file field (input type="file").
					String fieldname = item.getFieldName();
					String filename = (item.getName());
					if (isNewUpload && filename.trim().length() > 0) {
						// Empty file name return without anything
						String[] splitted = filename.split("\\\\");
						toolName = filename = splitted[splitted.length - 1];
						InputStream filecontent = item.getInputStream();
						String toolsLocation = FileUploader.globalToolsLocation;
						File f = new File(toolsLocation + "/" + filename);
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
					}

				}
			if (isNewUpload) {
				String configPath = this.getServletContext().getInitParameter(
						"local.path")
						+ "/WEB-INF/app-custom-config.xml";
				ConfigReader.addTool(toolName, toolDescription, configPath);
			}
			zipDownloadAndCleanup(request, response);
		} catch (Exception e) {
			e.printStackTrace(System.err);
			throw new ServletException("FileUpload Error", e);
			// response.sendRedirect(request.getPathTranslated());
		}
	}

	private void zipDownloadAndCleanup(HttpServletRequest request, HttpServletResponse response) {
		String userWsLocation = FileUploader.userWsLocation;
		File f = new File(userWsLocation);
		String[] fileList = f.list();
		byte[] buf = new byte[1024];
		String oFile = request.getSession().getId() + ".zip";
		try {
			response.setContentType("application/zip");
			response.setHeader("Content-disposition","attachment; filename=\"" + oFile +"\"");
			ZipOutputStream zos = new ZipOutputStream(response.getOutputStream());
			for (int i = 0; i < fileList.length; i++) {
				FileInputStream fis = new FileInputStream(userWsLocation + "/" + fileList[i]);
				zos.putNextEntry(new ZipEntry(fileList[i]));
				int len;
				while ((len = fis.read(buf)) > 0) {
			    	zos.write(buf, 0, len);
			    }
				
				zos.closeEntry();
				fis.close();
			}
			zos.close();
			request.getSession().invalidate();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}
