package fr.SII.MongoCRUD.model;

import java.time.LocalDate;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class PcapStat {
	@Id
	private String id;
	private LocalDate date;
	private long nbAdrIp;
	private long nbProtocol;
	private long nbPaquet;
	private long ddos;
	private long dos;
	private long webAttack;
	private long benign;
	private long other;
	//......................................................................
	public PcapStat() {}
	public PcapStat(LocalDate date, long nbAdrIp, long nbProtocol, long nbPaquet, long ddos, long dos, long webAttack,
			long benign, long other) {
		this.date = date;
		this.nbAdrIp = nbAdrIp;
		this.nbProtocol = nbProtocol;
		this.nbPaquet = nbPaquet;
		this.ddos = ddos;
		this.dos = dos;
		this.webAttack = webAttack;
		this.benign = benign;
		this.other = other;
	}
	public PcapStat(String id, LocalDate date, long nbAdrIp, long nbProtocol, long nbPaquet, long ddos, long dos,
			long webAttack, long benign, long other) {
		this.id = id;
		this.date = date;
		this.nbAdrIp = nbAdrIp;
		this.nbProtocol = nbProtocol;
		this.nbPaquet = nbPaquet;
		this.ddos = ddos;
		this.dos = dos;
		this.webAttack = webAttack;
		this.benign = benign;
		this.other = other;
	}
	//......................................................................
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
	public long getNbAdrIp() {
		return nbAdrIp;
	}
	public void setNbAdrIp(long nbAdrIp) {
		this.nbAdrIp = nbAdrIp;
	}
	public long getNbProtocol() {
		return nbProtocol;
	}
	public void setNbProtocol(long nbProtocol) {
		this.nbProtocol = nbProtocol;
	}
	public long getNbPaquet() {
		return nbPaquet;
	}
	public void setNbPaquet(long nbPaquet) {
		this.nbPaquet = nbPaquet;
	}
	public long getDdos() {
		return ddos;
	}
	public void setDdos(long ddos) {
		this.ddos = ddos;
	}
	public long getDos() {
		return dos;
	}
	public void setDos(long dos) {
		this.dos = dos;
	}
	public long getWebAttack() {
		return webAttack;
	}
	public void setWebAttack(long webAttack) {
		this.webAttack = webAttack;
	}
	public long getBenign() {
		return benign;
	}
	public void setBenign(long benign) {
		this.benign = benign;
	}
	public long getOther() {
		return other;
	}
	public void setOther(long other) {
		this.other = other;
	}
	@Override
	public String toString() {
		return "PcapStat [id=" + id + ", date=" + date + ", nbAdrIp=" + nbAdrIp + ", nbProtocol=" + nbProtocol
				+ ", nbPaquet=" + nbPaquet + ", ddos=" + ddos + ", dos=" + dos + ", webAttack=" + webAttack
				+ ", benign=" + benign + ", other=" + other + "]";
	}
	
	//......................................................................
	
	//......................................................................

}
