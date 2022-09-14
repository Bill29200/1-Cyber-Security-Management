package fr.SII.MongoCRUD.model;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class TestModel {
	
	@Id
	private String id;
	private List<LocalDate> dates;
	private TestType testType;
	private Model model; 
	private LocalDate testDate;
	private Person user;
	//............................
	public TestModel(List<LocalDate> dates, TestType testType, Model model, LocalDate testDate, Person user) {
		this.dates = dates;
		this.testType = testType;
		this.model = model;
		this.testDate = testDate;
		this.user = user;
	}
	public TestModel() {}
	//............................
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public List<LocalDate> getDates() {
		return dates;
	}
	public void setDates(List<LocalDate> dates) {
		this.dates = dates;
	}
	public TestType getTestType() {
		return testType;
	}
	public void setTestType(TestType testType) {
		this.testType = testType;
	}
	public Model getModel() {
		return model;
	}
	public void setModel(Model model) {
		this.model = model;
	}
	public LocalDate getTestDate() {
		return testDate;
	}
	public void setTestDate(LocalDate testDate) {
		this.testDate = testDate;
	}
	public Person getUser() {
		return user;
	}
	public void setUser(Person user) {
		this.user = user;
	}
	//..................................................
	@Override
	public String toString() {
		return "testModel [id=" + id + ", dates=" + dates + ", testType=" + testType + ", model=" + model
				+ ", testDate=" + testDate + ", user=" + user + "]";
	}
	
	
	

}
