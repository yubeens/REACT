package org.example.emotion_diary_project_server.service;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.example.emotion_diary_project_server.entity.Diary;
import org.example.emotion_diary_project_server.repository.DiaryRepository;
import org.springframework.stereotype.Service;

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
    @Transactional
    public Diary update(Diary diary) {
        Diary oldDiary = diaryRepository.findById(diary.getId())
                .orElseThrow(() -> new IllegalArgumentException("ID 없음: " + diary.getId()));

        oldDiary.setDate(diary.getDate());
        oldDiary.setContent(diary.getContent());
        oldDiary.setEmotionId(diary.getEmotionId());

        return diaryRepository.save(oldDiary);
    }
}
