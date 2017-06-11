package com.cts.jsons;

import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

public class FeedbackServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    
    public FeedbackServlet() {
        super();
       
    }

	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		FileWriter file =null;
		String custEmail = request.getParameter("emailid");
		String custMessage = request.getParameter("message");
		
		
		
		PrintWriter out=response.getWriter();
		
		  JSONObject json = new JSONObject();

		   try {
			   		json.put("customer_emailid",custEmail);
			   		json.put("customer_message",custMessage);
			   		
		   
		  } catch (Exception e) {
			  e.printStackTrace();
		  }
		  

	        try {
	        	file = new FileWriter("C:\\Users\\337003\\JQuery\\JQuery_CS1\\feedback.txt",true);
	            file.write(json.toJSONString());
	            System.out.println("Successfully Copied JSON Object to File...");
	            System.out.println("\nJSON Object: " + json);
	 
	        } catch (IOException e) {
	            e.printStackTrace();
	 
	        } finally {
	            file.flush();
	            file.close();
	        }
		  
		  
		  out.print(json);
	}

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
	}

}
