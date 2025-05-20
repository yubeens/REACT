package org.example.react11_phone_server.service;

import lombok.RequiredArgsConstructor;
import org.example.react11_phone_server.entity.Phone;
import org.example.react11_phone_server.repository.PhoneRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PhoneService {
    private final PhoneRepository phoneRepository;
    //추가
    public Phone insert(Phone phone) {
        return phoneRepository.save(phone);
    }
    //전체보기
    public List<Phone> list(){
        return phoneRepository.findAll();
    }
    //삭제
    public void deleteById(long id) {
        phoneRepository.deleteById(id);
    }
    //수정
    public Phone update(Phone phone) {
        Phone origin = phoneRepository.findById(phone.getId())
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 연락처입니다."));

        origin.setName(phone.getName());
        origin.setPhone(phone.getPhone());
        origin.setAddr(phone.getAddr());

        return phoneRepository.save(origin);
    }
}
