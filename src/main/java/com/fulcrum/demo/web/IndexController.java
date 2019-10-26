package com.fulcrum.demo.web;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

/**
 * Controller that serves the initial page
 */
@Controller
public class IndexController {

	/**
	 * Method that sets up and serves the initial page of the app
	 * @param model Object from Spring MVC
	 * @return ModelAndView object
	 */
  @RequestMapping(method=RequestMethod.GET, value="/")
  public ModelAndView index(Model model) {
	  ModelAndView modelAndView = new ModelAndView();
	  modelAndView.setViewName("index");
		
    return modelAndView;
  }
}
