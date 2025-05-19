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
}
