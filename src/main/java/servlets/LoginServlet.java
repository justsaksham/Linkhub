package servlets;
import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
//@WebServlet(urlPatterns="/abc.htm")
public class LoginServlet extends HttpServlet {
@Override
protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
	// TODO Auto-generated method stub
	//super.doPost(req, resp);
	HttpSession s=req.getSession();
	String uid=(String)req.getParameter("hiddenValue1");
	//uid="sakshm";
	if(uid==null) {
	uid=(String)req.getParameter("HiddenValue");
	}
	s.setAttribute("login",uid);
	System.out.println(uid);
	resp.sendRedirect("Home");
}

}
