package fr.SII.MongoCRUD.model;

import java.time.LocalDate;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class LogStat {
	
	@Id
	private String id;
	private LocalDate date;
	private Long nbLog;
	private Long nbAnomalie;
	private Long nbBenign;
	private String label;
	//........................................................
	public LogStat() {}
	public LogStat(LocalDate date, Long nbLog, Long nbAnomalie, Long nbBenign, String label) {
		this.date = date;
		this.nbLog = nbLog;
		this.nbAnomalie = nbAnomalie;
		this.nbBenign = nbBenign;
		this.label = label;
	}		
	//........................................................
	public LogStat(String id, LocalDate date, Long nbLog, Long nbAnomalie, Long nbBenign, String label) {
		this.id = id;
		this.date = date;
		this.nbLog = nbLog;
		this.nbAnomalie = nbAnomalie;
		this.nbBenign = nbBenign;
		this.label = label;
	}
	//........................................................
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public LocalDate getDate() {
		return date;
	}
	public void setDate(LocalDate date) {
		this.date = date;
	}
	public Long getNbLog() {
		return nbLog;
	}
	public void setNbLog(Long nbLog) {
		this.nbLog = nbLog;
	}
	public Long getNbAnomalie() {
		return nbAnomalie;
	}
	public void setNbAnomalie(Long nbAnomalie) {
		this.nbAnomalie = nbAnomalie;
	}
	public Long getNbBenign() {
		return nbBenign;
	}
	public void setNbBenign(Long nbBenign) {
		this.nbBenign = nbBenign;
	}
	public String getLabel() {
		return label;
	}
	public void setLabel(String label) {
		this.label = label;
	}
	//........................................................
	@Override
	public String toString() {
		return "LogStat [id=" + id + ", date=" + date + ", nbLog=" + nbLog + ", nbAnomalie=" + nbAnomalie
				+ ", nbBenign=" + nbBenign + ", label=" + label +"]";
	}
	

}
