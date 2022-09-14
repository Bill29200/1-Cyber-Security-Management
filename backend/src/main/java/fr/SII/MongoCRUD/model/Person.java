package fr.SII.MongoCRUD.model;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document
public class Person {
	@Id
    private String id;
	private String name;
	private String email;
	private String password;
	private Role role;
	private String bu;
	
	public Person(){}
	
	public Person(String name, String email, String password, Role role, String bu) {
		this.name = name;
		this.email = email;
		this.password = password;
		this.role = role;
		this.bu = bu;
	}
	public Person(String id, String name, String email, String password, Role role, String bu) {
		this.id =  id;
		this.name = name;
		this.email = email;
		this.password = password;
		this.role = role;
		this.bu = bu;
	}

	
	public String getId() {
		return this.id;
	}
	public String getName() {
		return this.name;
	}
	
	public String getEmail() {
		return this.email;
	}
	public String getPassword() {
		return this.password;
	}
	public Role getRole() {
		return this.role;
	}
	public String getBu() {
		return this.bu;
	}
	
	public void setId(String id) 
	{
		this.id=id;
	}
	public void setName(String name) 
	{
		this.name=name;
	}
	public void setEmail(String email) 
	{
		this.email=email;
	}
	public void setPassword(String password) 
	{
		this.password=password;
	}
	public void setRole(Role role) 
	{
		this.role=role;
	}
	public void setBu(String bu) 
	{
		this.bu=bu;
	}


	@Override
	public String toString() {
		return "Person [id=" + id + ", name=" + name + ", email=" + email + ", password=" + password + ", role=" + role
				+ ", bu=" + bu + "]";
	}
	
}
