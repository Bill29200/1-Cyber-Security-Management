package fr.SII.MongoCRUD.model;



import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Csvjson {
	@Id
	private String id;
	private String timestamp;
	private String label;
	//........................................................
	public Csvjson() {}
	public Csvjson(String timestamp, String label) {
		this.timestamp = timestamp;
		this.label = label;
	}		
	//........................................................
	public Csvjson(String id, String timestamp, String label) {
		this.id = id;
		this.timestamp = timestamp;
		this.label = label;
	}
	//........................................................
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getDate() {
		return timestamp;
	}
	public void setDate(String Timestamp) {
		this.timestamp = Timestamp;
	}
	
	public String getLabel() {
		return label;
	}
	public void setLabel(String Label) {
		this.label = Label;
	}
	//........................................................
	@Override
	public String toString() {
		return "LogStat [id=" + id + ", timestamp=" + timestamp + ", label=" + label +"]";
	}
	


}
