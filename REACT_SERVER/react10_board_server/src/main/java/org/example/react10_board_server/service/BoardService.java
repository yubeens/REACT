package org.example.react10_board_server.service;

import lombok.RequiredArgsConstructor;
import org.example.react10_board_server.entity.Board;
import org.example.react10_board_server.repository.BoardRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BoardService {
    private final BoardRepository boardRepository;

    //추가
    public Board insert(Board board) {
        return boardRepository.save(board);
    }

    //전체보기
    public List<Board> findAll(){
        return boardRepository.findAll();
    }
    //삭제
    public void delete(Long num){
        boardRepository.deleteById(num);
    }
}
