package com.shubhranshu.sedml.web;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.shubhranshu.sedmlbuilder.FileUploader;

/**
 * Servlet implementation class SaveXml
 */
@WebServlet("/SaveXml")
public class SaveXml extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public SaveXml() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		//String modelParam = request.getParameter("ModelXML");
		String[] paramValue = request.getParameterValues("ModelXML");
		String wsLocation = FileUploader.userWsLocation;
		FileUtil.fileString(paramValue[0], "ModelXML-sedml.xml", wsLocation);
		request.getSession().setAttribute("sedML", "ModelXML-sedml.xml");
		response.sendRedirect("Simulate.jsp");
	}

}
