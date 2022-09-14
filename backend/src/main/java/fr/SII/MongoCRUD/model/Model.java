package fr.SII.MongoCRUD.model;

import javax.management.modelmbean.ModelMBeanConstructorInfo;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Model {

    @Id
    private String id;
	private String name;
	private String type;
	private Person user;
    private String algoc1;
    private String algoc2;
    private String algoc3;
    private String hpc1;
    private String hpc2;
    private String hpc3;

    public Model() {}

	public Model(String name, String type, Person user, String algoc1, String algoc2, String algoc3,
			String hpc1, String hpc2, String hpc3) {
		this.name = name;
		this.type = type;
		this.user = user;
		this.algoc1 = algoc1;
		this.algoc2 = algoc2;
		this.algoc3 = algoc3;
		this.hpc1 = hpc1;
		this.hpc2 = hpc2;
		this.hpc3 = hpc3;
	}
	public Model(String id,String name, String type, Person user, String algoc1, String algoc2, String algoc3,
			String hpc1, String hpc2, String hpc3) {
		this.id = id;
		this.name = name;
		this.type = type;
		this.user = user;
		this.algoc1 = algoc1;
		this.algoc2 = algoc2;
		this.algoc3 = algoc3;
		this.hpc1 = hpc1;
		this.hpc2 = hpc2;
		this.hpc3 = hpc3;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public Person getUser() {
		return user;
	}

	public void setUser(Person user) {
		this.user = user;
	}

	public String getAlgoc1() {
		return algoc1;
	}

	public void setAlgoc1(String algoc1) {
		this.algoc1 = algoc1;
	}

	public String getAlgoc2() {
		return algoc2;
	}

	public void setAlgoc2(String algoc2) {
		this.algoc2 = algoc2;
	}

	public String getAlgoc3() {
		return algoc3;
	}

	public void setAlgoc3(String algoc3) {
		this.algoc3 = algoc3;
	}

	public String getHpc1() {
		return hpc1;
	}

	public void setHpc1(String hpc1) {
		this.hpc1 = hpc1;
	}

	public String getHpc2() {
		return hpc2;
	}

	public void setHpc2(String hpc2) {
		this.hpc2 = hpc2;
	}

	public String getHpc3() {
		return hpc3;
	}

	public void setHpc3(String hpc3) {
		this.hpc3 = hpc3;
	}

	@Override
	public String toString() {
		return "Model [id=" + id + ", name=" + name + ", type=" + type + ", user=" + user + ", algoc1=" + algoc1
				+ ", algoc2=" + algoc2 + ", algoc3=" + algoc3 + ", hpc1=" + hpc1 + ", hpc2=" + hpc2 + ", hpc3=" + hpc3
				+ "]";
	}
	
    
    

    
}
