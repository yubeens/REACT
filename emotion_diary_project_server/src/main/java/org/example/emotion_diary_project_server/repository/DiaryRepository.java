package org.example.emotion_diary_project_server.repository;

import org.example.emotion_diary_project_server.entity.Diary;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DiaryRepository extends JpaRepository<Diary, Long> {
}
