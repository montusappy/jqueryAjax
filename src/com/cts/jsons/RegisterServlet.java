package com.cts.jsons;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONObject;

public class RegisterServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public RegisterServlet() {
		super();
	}

	@SuppressWarnings("unchecked")
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		String custName = request.getParameter("cname") != null && !request.getParameter("cname").isEmpty()
				? request.getParameter("cname") : "Hero";
		String custEmail = request.getParameter("customeremail") != null
				&& !request.getParameter("customeremail").isEmpty() ? request.getParameter("customeremail")
						: "montusappy@gmail.com";
		String customerpassword = request.getParameter("customerpassword") != null
				&& !request.getParameter("customerpassword").isEmpty() ? request.getParameter("customerpassword")
						: "defaultPassword";

		PrintWriter out = response.getWriter();

		JSONObject json = new JSONObject();

		try {
			json.put("cname", custName);
			json.put("customeremail", custEmail);
			json.put("customerpassword", customerpassword);

		} catch (Exception e) {
			e.printStackTrace();
		}

		System.out.println("from json.." + json.get("cname"));

		out.print(json);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

	}

}
