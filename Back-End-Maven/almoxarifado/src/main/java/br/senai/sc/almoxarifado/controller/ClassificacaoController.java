package br.senai.sc.almoxarifado.controller;

import br.senai.sc.almoxarifado.dto.*;
import br.senai.sc.almoxarifado.model.entities.*;
import br.senai.sc.almoxarifado.model.service.*;
import org.springframework.beans.BeanUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@Controller
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/alma_sis/classificacao")
public class ClassificacaoController {
    private ClassificacaoService classificacaoService;

    public ClassificacaoController(ClassificacaoService classificacaoService) {
        this.classificacaoService = classificacaoService;
    }

    @GetMapping
    public ResponseEntity<List<Classificacao>> findAll(){
        return ResponseEntity.status(HttpStatus.OK).body(classificacaoService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> findById(@PathVariable(value = "id") Long id){
        if (!classificacaoService.existsById(id)) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Não foi encontrada nenhuma classificação com este ID.");
        }
        return ResponseEntity.status(HttpStatus.FOUND).body(classificacaoService.findById(id).get());
    }

    @PostMapping
    public ResponseEntity<Object> save(@RequestBody @Valid ClassificacaoDTO classificacaoDTO){
        Classificacao classificacao = new Classificacao();
        BeanUtils.copyProperties(classificacaoDTO, classificacao);
        return ResponseEntity.status(HttpStatus.CREATED).body(classificacaoService.save(classificacao));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> update(@PathVariable(value = "id") Long idClassificacao, @RequestBody @Valid ClassificacaoDTO classificacaoDTO){
        if (!classificacaoService.existsById(idClassificacao)) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Este ID não existe.");
        }

        Classificacao classificacao =  new Classificacao();
        BeanUtils.copyProperties(classificacaoDTO, classificacao);
        classificacao.setId(idClassificacao);
        return ResponseEntity.status(HttpStatus.OK).body(classificacaoService.save(classificacao));
    }

    @Transactional
    @DeleteMapping("/{idClassificacao}")
    public ResponseEntity<Object> deleteById(@PathVariable(value = "idClassificacao") Long idClassificacao){
        if(!classificacaoService.existsById(idClassificacao)){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Não foi possível encontrar a classificação!");
        }

        Classificacao classificacao = classificacaoService.findById(idClassificacao).get();
        classificacaoService.deleteById(idClassificacao);
        return ResponseEntity.status(HttpStatus.OK).body(classificacao);
    }
}
