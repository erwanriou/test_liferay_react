package com.liferay.blade.npm.react.portlet;

import com.liferay.portal.kernel.portlet.bridges.mvc.MVCPortlet;
import javax.portlet.Portlet;
import org.osgi.service.component.annotations.Component;

/**
 * @author Liferay
 */
@Component(
	immediate = true,
	property = {
		"com.liferay.portlet.display-category=category.sample",
		"com.liferay.portlet.header-portlet-css=/static/css/main.chunk.css",
		"com.liferay.portlet.footer-portlet-javascript=/static/js/1.chunk.js",
		"com.liferay.portlet.footer-portlet-javascript=/static/js/main.chunk.js",
		"com.liferay.portlet.footer-portlet-javascript=/static/js/runtime~main.js",
		"com.liferay.portlet.instanceable=false",
		"javax.portlet.display-name=React Portlet",
		"javax.portlet.init-param.template-path=/",
		"javax.portlet.init-param.view-template=/view.jsp",
		"javax.portlet.security-role-ref=power-user,user"
	},
	service = Portlet.class
)
public class ReactPortlet extends MVCPortlet {
}
