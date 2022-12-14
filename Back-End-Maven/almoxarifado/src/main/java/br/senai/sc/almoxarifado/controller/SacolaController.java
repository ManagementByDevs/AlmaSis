package br.senai.sc.almoxarifado.controller;

import br.senai.sc.almoxarifado.dto.SacolaDTO;
import br.senai.sc.almoxarifado.model.entities.ProdutosEscolhidosSacola;
import br.senai.sc.almoxarifado.model.entities.Sacola;
import br.senai.sc.almoxarifado.model.service.ProdutosEscolhidosSacolaService;
import br.senai.sc.almoxarifado.model.service.SacolaService;
import lombok.AllArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;

@Controller
@AllArgsConstructor
@RequestMapping("/alma_sis/sacola")
public class SacolaController {
    private SacolaService sacolaService;
    private ProdutosEscolhidosSacolaService produtosEscolhidosSacolaService;

    @GetMapping
    public ResponseEntity<List<Sacola>> findAll() {
        return ResponseEntity.status(HttpStatus.OK).body(sacolaService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> findById(@PathVariable(value = "id") Long id) {
        if (!sacolaService.existsById(id)) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                    "Não foi encontrado nenhuma sacola com este ID.");
        }
        Sacola sacola = sacolaService.findById(id).get();

        List<Object> response = new ArrayList<>();
        response.add(sacola);
        response.add(produtosEscolhidosSacolaService.findBySacola(sacola));
        return ResponseEntity.status(HttpStatus.FOUND).body(response);
    }

    @PostMapping
    public ResponseEntity<Object> save(@RequestBody @Valid SacolaDTO sacolaDTO) {
        Sacola sacola = new Sacola();
        BeanUtils.copyProperties(sacolaDTO, sacola);
        Sacola sacolaSalva = sacolaService.save(sacola);

        for (ProdutosEscolhidosSacola produtosEscolhidosSacola : sacolaDTO.getProdutos_sacola()) {
            produtosEscolhidosSacola.setSacola(sacolaSalva);
            produtosEscolhidosSacolaService.save(produtosEscolhidosSacola);

        }
        return ResponseEntity.status(HttpStatus.CREATED).body("Sacola criada e itens adicionados!");
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> update(@PathVariable(value = "id") Long id, @RequestBody @Valid SacolaDTO sacolaDTO) {
        if (!sacolaService.existsById(id)) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(
                    "Não foi encontrada nenhuma sacola com este ID.");
        }
        Sacola sacola = new Sacola();
        BeanUtils.copyProperties(sacolaDTO, sacola, "id");
        sacola.setSacolaId(id);
        return ResponseEntity.status(HttpStatus.OK).body(sacolaService.save(sacola));
    }

    @Transactional
    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteById(@PathVariable(value = "id") Long id) {
        if (!sacolaService.existsById(id)) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                    "Não foi encontrada nenhuma sacola com este ID.");
        }

        Sacola sacola = sacolaService.findById(id).get();

        for (ProdutosEscolhidosSacola produtoEscolhidoSacola : produtosEscolhidosSacolaService.findBySacola(sacola)) {
            produtosEscolhidosSacolaService.deleteById(produtoEscolhidoSacola.getId());
        }

        sacolaService.deleteById(id);
        return ResponseEntity.status(HttpStatus.OK).body("Sacola e itens da sacola deletados com sucesso.");
    }
}
