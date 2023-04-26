package kosa.servlet;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/CalsServlet")
public class CalsServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
     
    public CalsServlet() {
        super();
    }
    
	protected void doPost(HttpServletRequest request, 
			HttpServletResponse response) throws ServletException, IOException {

		int num1 = Integer.parseInt(request.getParameter("num1"));
		int num2 = Integer.parseInt(request.getParameter("num2"));
		
		String name = "Hong";
		//int result = num1 + num2;
		
		int result = 0;
		
		while (num1 < num2) {
			result += num1;
			num1++;
		}
		
		request.setAttribute("result", result);		//두 값을 JSP에 전달
		request.setAttribute("name", name);
		
		//**페이지 이동방식 2가지**
		//1.Redirect: 기존 요청과 다른 새로운 요청
		//response.sendRedirect("result.jsp");
		
		//2.Dispatcher: 기존 요청의 연장선
		RequestDispatcher re =
				request.getRequestDispatcher("/result.jsp");	
		//request에서 set했던 기존 요청의 연장선으로 봐야 새 페이지에도 저장되어있음
		re.forward(request, response);
	}

}
