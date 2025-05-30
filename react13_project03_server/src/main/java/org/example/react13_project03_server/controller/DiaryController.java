package org.example.react13_project03_server.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.web.bind.annotation.*;
import org.example.react13_project03_server.entity.Diary;
import org.example.react13_project03_server.service.DiaryService;

import java.util.List;

@RestController
@RequestMapping("/diary")
@RequiredArgsConstructor
@Log4j2
public class DiaryController {
    private final DiaryService diaryService;

    //추가
    @PostMapping("/insert")
    @ResponseBody
    public Diary postInsert(@RequestBody Diary diary) {
        return diaryService.insert(diary);
    }
    //리스트
    @GetMapping("list")
    @ResponseBody
    public List<Diary> getList() {
        return diaryService.list();
    }
    //삭제
    @DeleteMapping("delete/{id}")
    public String delete(@PathVariable Long id) {
        diaryService.delete(id);
        return "Success";
    }
    //수정(Update)
    @PutMapping("update/{id}")
    public Diary update(@PathVariable Long id, @RequestBody Diary diary) {
        return diaryService.update(diary); // ✅ 수정된 데이터 프론트에 반환
    }
}