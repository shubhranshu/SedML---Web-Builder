package com.shubhranshu.sedml.web;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.URL;
import java.net.URLConnection;

public class FileUtil {

	public static void fetchSave(String fieldvalue, String wsFolder) {
		fileDownload(fieldvalue, wsFolder);
	}

	final static int size = 1024;

	public static void fileUrl(String fAddress, String localFileName,
			String destinationDir) {
		OutputStream outStream = null;
		URLConnection uCon = null;

		InputStream is = null;
		try {
			URL Url;
			byte[] buf;
			int ByteRead, ByteWritten = 0;
			Url = new URL(fAddress);
			outStream = new BufferedOutputStream(new FileOutputStream(
					destinationDir + "\\" + localFileName));

			uCon = Url.openConnection();
			is = uCon.getInputStream();
			buf = new byte[size];
			while ((ByteRead = is.read(buf)) != -1) {
				outStream.write(buf, 0, ByteRead);
				ByteWritten += ByteRead;
			}
			System.out.println("Downloaded Successfully.");
			System.out.println("File name:\"" + localFileName
					+ "\"\nNo ofbytes :" + ByteWritten);
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			try {
				is.close();
				outStream.close();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	}

	public static void fileString(String fString, String localFileName,
			String destinationDir) {
		File xFile = null;
		FileWriter fw = null;
		try {
			xFile = new File(destinationDir + "\\" + localFileName);
			fw = new FileWriter(xFile);
			fw.write(fString);
			System.out.println("Written Successfully.");
			System.out.println("File name:\"" + localFileName
					+ "\"\nNo ofbytes :" + fString.length());
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			try {
				fw.close();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	}

	public static void fileDownload(String fAddress, String destinationDir) {

		int slashIndex = fAddress.lastIndexOf('/');
		int periodIndex = fAddress.lastIndexOf('.');

		String fileName = fAddress.substring(slashIndex + 1);

		if (periodIndex >= 1 && slashIndex >= 0
				&& slashIndex < fAddress.length() - 1) {
			fileUrl(fAddress, fileName, destinationDir);
		} else {
			System.err.println("path or file name.");
		}
	}

	public static void main(String[] args) {
		if (args.length == 2) {
			for (int i = 1; i < args.length; i++) {
				fileDownload(args[i], args[0]);
			}
		} else {

		}
	}

	/**
	 * Copy the file from tools folder to ws folder
	 * 
	 * @param fieldvalue
	 * @param wsFolder
	 */
	public static void copyTool(String toolName, String wsFolder) {
		try {
			File f1 = new File(toolName);
			File f2 = new File(wsFolder);
			InputStream in = new FileInputStream(f1);

			// For Append the file.
			// OutputStream out = new FileOutputStream(f2,true);

			// For Overwrite the file.
			OutputStream out = new FileOutputStream(f2);

			byte[] buf = new byte[1024];
			int len;
			while ((len = in.read(buf)) > 0) {
				out.write(buf, 0, len);
			}
			in.close();
			out.close();
		} catch (Exception ex) {
			ex.printStackTrace();
		}
	}
}
