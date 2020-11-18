package org.springframework.samples.petclinic.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.samples.petclinic.service.UsuarioService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class UsuarioController {
	
	private final UsuarioService usuarioService;
	
	@Autowired
	public UsuarioController(UsuarioService usuarioService) {
		this.usuarioService=usuarioService;
	}
	
	@GetMapping(value = { "/login" })
	public String typeOfUser(@RequestParam("username") String nickUsuario, @RequestParam("password") String contraseya) {
		String type=usuarioService.typeOfUser(nickUsuario);
		
		return null;
	}
	
}