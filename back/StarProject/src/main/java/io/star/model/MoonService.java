package io.star.model;


import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import io.star.model.entity.MoonEntity;
import io.star.model.repository.MoonRepository;

@Service
public class MoonService {

	@Autowired
	private MoonRepository moonRepository;
	
	public String getMoonName() {
		
		String moonName = null;
		
		for(MoonEntity m : moonRepository.findAll()) {
			if(m.getCount() != 0) {
				moonName = m.getMoonName();
				
				return moonName;
			}
		}
		
		return moonName;
	}

	public String getLunarCycle(String moonName, int num) {
		
		boolean over = false;
		String newMoonName = null;
		
		int totalMoonCount = moonRepository.findCountByMoonName(moonName);
		
		if(moonName.equals("상보달")) {
			if(totalMoonCount >= 4) {
				over = true;
				newMoonName = "보름달";
			} 
		} else if(moonName.equals("보름달")) {
			if(totalMoonCount >= 1) {
				over = true;
				newMoonName = "보하달";
			}
		} else if(moonName.equals("보하달")) {
			if(totalMoonCount >= 4) {
				over = true;
				newMoonName = "하현달";
			}
		} else if(moonName.equals("하현달")) {
			if(totalMoonCount >= 2) {
				over = true;
				newMoonName = "하금달";
			}
		} else if(moonName.equals("하금달")) {
			if(totalMoonCount >= 2) {
				over = true;
				newMoonName = "그믐달";
			}
		} else if(moonName.equals("그믐달")) {
			if(totalMoonCount >= 2) {
				over = true;
				newMoonName = "달삭";
			}
		} else if(moonName.equals("달삭")) {
			if(totalMoonCount >= 0) {
				over = true;
				newMoonName = "초승달";
			}
		} else if(moonName.equals("초승달")) {
			if(totalMoonCount >= 2) {
				over = true;
				newMoonName = "초상달";
			}
		} else if(moonName.equals("초상달")) {
			if(totalMoonCount >= 2) {
				over = true;
				newMoonName = "상현달";
			}
		} else if(moonName.equals("상현달")) {
			if(totalMoonCount >= 1) {
				over = true;
				newMoonName = "상보달";
			}
		}
		
		return updateCount(moonName, newMoonName, totalMoonCount, over, num);
	}
	
	@Transactional
	public String updateCount(String moonName, String newMoonName, int totalMoonCount, boolean over, int num) {
		
		MoonEntity moonEntity = moonRepository.findByMoonName(moonName);
		moonEntity.setDay(num);
		
		if(over == false) {
			moonEntity.setCount((totalMoonCount += 1));
			MoonEntity moon = moonRepository.save(moonEntity);
			
			return moon.getMoonName();
		} else if(over == true) {
			moonEntity.setCount(0);
			moonRepository.save(moonEntity);
		}
		
		return newMoonName;
	}

	public int getMoonDay(String moonName) {
		
		return moonRepository.findDayByMoonName(moonName);
	}
}
