package camp.kh.semi.member.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
//컨트롤러 역할을 한다고 명시해주는 역할을 하는 어노테이션.
public class HomeController {

	@GetMapping(value = "comm/")
	public void index() {
		System.out.println("메인페이지로 이동");
	}
}
