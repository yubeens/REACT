package org.example.react10_board_server.controller;

import lombok.RequiredArgsConstructor;
import org.example.react10_board_server.entity.Board;
import org.example.react10_board_server.service.BoardService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class BoardController {
    private final BoardService boardService;
    //추가
    @PostMapping("insert")
    public Board insert(@RequestBody Board board) {
        return boardService.insert(board);
    }
    //전체보기
    @GetMapping("list")
    public List<Board> list(){
        return boardService.findAll();
    }
    //삭제
    @DeleteMapping("delete/{num}")
    public void delete(@PathVariable Long num){
        boardService.delete(num);
    }
}
