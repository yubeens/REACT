package org.example.react13_project03_server.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.example.react13_project03_server.entity.Diary;
import org.example.react13_project03_server.repository.DiaryRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Log4j2
public class DiaryService {
    private final DiaryRepository diaryRepository;
    //추가
    public Diary insert(Diary diary) {
        return diaryRepository.save(diary);
    }
    public List<Diary> list() {
        return diaryRepository.findAll();
    }
    //삭제
    public void delete(Long id) {
        diaryRepository.deleteById(id);
    }
    //수정
    //더티체킹
    @Transactional
    public void update(Diary diary){
        log.info("Updateing diary: " + diary);
        //영속성 컨텍스트에 있는 diary 객체 (수정할 객체) 가져오기
        Diary d = diaryRepository.findById(diary.getId()).get();
        //가져온 diary 객체를 수정 ===> flush
        //diary는 수정할 내용인 감긴 Diary 객체
        d.setDate(diary.getDate());
        d.setContent(diary.getContent());
        d.setEmotionId(diary.getEmotionId());
    }
}
