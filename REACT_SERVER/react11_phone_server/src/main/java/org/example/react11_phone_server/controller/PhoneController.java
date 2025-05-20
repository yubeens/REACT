package org.example.react11_phone_server.controller;

import lombok.RequiredArgsConstructor;
import org.example.react11_phone_server.entity.Phone;
import org.example.react11_phone_server.service.PhoneService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("phone/")
public class PhoneController {
    private final PhoneService phoneService;
    //추가
    @PostMapping("insert")
    public Phone insert(@RequestBody Phone phone) {
        return phoneService.insert(phone);
    }
    //전체보기
    @GetMapping("list")
    public List<Phone> list(){
        return phoneService.list();
    }
    //삭제
    @DeleteMapping("delete/{id}")
    public void delete(@PathVariable long id) {
        phoneService.deleteById(id);
    }
    //수정
    @PutMapping("update/{id}")
    public Phone update(@PathVariable long id, @RequestBody Phone phone) {
        phone.setId(id); // ID 매핑
        return phoneService.update(phone);
    }
}
