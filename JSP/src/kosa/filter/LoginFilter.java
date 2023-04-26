package kosa.filter;

import java.io.IOException;
import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@WebFilter({"/session/main.jsp", "/session/logout.jsp"})
//로그인된 사람, session을 갖고있는 사람만 접근 가능하도록 적용 대상을 정해줘야함!!!!
//main, logout 에만 적용
public class LoginFilter implements Filter {

    public LoginFilter() {
    }

	public void destroy() {
	}

	public void doFilter(ServletRequest request2, ServletResponse response2, FilterChain chain) throws IOException, ServletException {
		//session 객체 구하기 => session 갖고있는지 유무 체크 가능
		HttpServletRequest request = (HttpServletRequest)request2;
		HttpServletResponse response = (HttpServletResponse)response2;
		
		HttpSession session = request.getSession();
		
		String name = (String)session.getAttribute("name");
	    if(name == null){
	        response.sendRedirect("loginForm.jsp");
	    }
	    
		chain.doFilter(request2, response2);
	}

	public void init(FilterConfig fConfig) throws ServletException {
	}

}
