package br.senai.sc.almoxarifado.model.service;

import br.senai.sc.almoxarifado.model.entities.Classificacao;
import br.senai.sc.almoxarifado.model.entities.Produto;
import br.senai.sc.almoxarifado.repository.ProdutoRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProdutoService {
    private ProdutoRepository produtoRepository;

    public ProdutoService(ProdutoRepository produtoRepository) {
        this.produtoRepository = produtoRepository;
    }

    public List<Produto> findAll() {
        return produtoRepository.findAll();
    }

    public Page<Produto> findAll(Pageable pageable) {
        return produtoRepository.findAll(pageable);
    }

    public List<Produto> findByVisibilidade(Boolean visibilidade, Pageable pageable) {
        return produtoRepository.findByVisibilidade(visibilidade, pageable);
    }

    public List<Produto> findAllByClassificacao(Classificacao classificacao) {
        return produtoRepository.findByClassificacao(classificacao);
    }

    public <S extends Produto> S save(S entity) {
        return produtoRepository.save(entity);
    }

    public Optional<Produto> findById(Long integer) {
        return produtoRepository.findById(integer);
    }

    public boolean existsById(Long integer) {
        return produtoRepository.existsById(integer);
    }

    public void deleteById(Long integer) {
        produtoRepository.deleteById(integer);
    }

    public Object countByVisibilidade(Boolean b) {
        return produtoRepository.countByVisibilidade(b);
    }

    public Page<Produto> findByNome(String nome, Pageable pageable) {
        return produtoRepository.findByVisibilidadeAndNomeContaining(true, nome, pageable);
    }

    public Integer countByVisibilidadeAndNome(String nome, boolean b) {
        return produtoRepository.countByVisibilidadeAndNomeContaining(b, nome);
    }

    public List<Produto> findByVisibilidadeAndClassificacaoAndFavoritoAndEstoqueAndDescartavel(boolean b, Classificacao classificacao1, boolean b1, int i, boolean b2, Pageable pageable) {
        return produtoRepository.findByVisibilidadeAndClassificacaoAndFavoritoAndEstoqueAndDescartavel(b, classificacao1, b1, i, b2, pageable);
    }

    public List<Produto> findByVisibilidadeAndClassificacaoAndFavoritoAndDescartavel(boolean b, Classificacao classificacao1, boolean b1, boolean b2, Pageable pageable) {
        return produtoRepository.findByVisibilidadeAndClassificacaoAndFavoritoAndDescartavel(b, classificacao1, b1, b2, pageable);
    }

    public List<Produto> findByVisibilidadeAndClassificacaoAndFavoritoAndEstoqueIsNotAndDescartavel(boolean b, Classificacao classificacao1, boolean b1, int i, boolean b2, Pageable pageable) {
        return produtoRepository.findByVisibilidadeAndClassificacaoAndFavoritoAndEstoqueIsNotAndDescartavel(b, classificacao1, b1, i, b2, pageable);
    }

    public List<Produto> findByVisibilidadeAndClassificacaoAndFavoritoAndEstoqueAndDescartavelAndNomeContaining(boolean b, Classificacao classificacao1, Integer b1, int i, boolean b2, String nome, Pageable pageable) {
        return produtoRepository.findByVisibilidadeAndClassificacaoAndFavoritoAndEstoqueAndDescartavelAndNomeContaining(b, classificacao1, b1, i, b2, nome, pageable);
    }

    public List<Produto> findByVisibilidadeAndClassificacaoAndFavoritoAndDescartavelAndNomeContaining(boolean b, Classificacao classificacao1, Integer b1, boolean b2, String nome, Pageable pageable) {
        return produtoRepository.findByVisibilidadeAndClassificacaoAndFavoritoAndDescartavelAndNomeContaining(b, classificacao1, b1, b2, nome, pageable);
    }

    public List<Produto> findByVisibilidadeAndClassificacaoAndFavoritoAndEstoqueIsNotAndDescartavelAndNomeContaining(boolean b, Classificacao classificacao1, Integer b1, int i, boolean b2, String nome, Pageable pageable) {
        return produtoRepository.findByVisibilidadeAndClassificacaoAndFavoritoAndEstoqueIsNotAndDescartavelAndNomeContaining(b, classificacao1, b1, i, b2, nome, pageable);
    }

    public List<Produto> findByVisibilidadeAndClassificacaoAndEstoqueAndDescartavelAndNomeContaining(boolean b, Classificacao classificacao1, int i, boolean b1, String nome, Pageable pageable) {
        return produtoRepository.findByVisibilidadeAndClassificacaoAndEstoqueAndDescartavelAndNomeContaining(b, classificacao1, i, b1, nome, pageable);
    }

    public List<Produto> findByVisibilidadeAndClassificacaoAndDescartavelAndNomeContaining(boolean b, Classificacao classificacao1, boolean b1, String nome, Pageable pageable) {
        return produtoRepository.findByVisibilidadeAndClassificacaoAndDescartavelAndNomeContaining(b, classificacao1, b1, nome, pageable);
    }

    public List<Produto> findByVisibilidadeAndClassificacaoAndEstoqueIsNotAndDescartavelAndNomeContaining(boolean b, Classificacao classificacao1, int i, boolean b1, String nome, Pageable pageable) {
        return produtoRepository.findByVisibilidadeAndClassificacaoAndEstoqueIsNotAndDescartavelAndNomeContaining(b, classificacao1, i, b1, nome, pageable);
    }

    public List<Produto> findByVisibilidadeAndClassificacaoAndFavoritoAndEstoqueAndNomeContaining(boolean b, Classificacao classificacao1, Integer b1, int i, String nome, Pageable pageable) {
        return produtoRepository.findByVisibilidadeAndClassificacaoAndFavoritoAndEstoqueAndNomeContaining(b, classificacao1, b1, i, nome, pageable);
    }

    public List<Produto> findByVisibilidadeAndClassificacaoAndFavoritoAndNomeContaining(boolean b, Classificacao classificacao1, Integer b1, String nome, Pageable pageable) {
        return produtoRepository.findByVisibilidadeAndClassificacaoAndFavoritoAndNomeContaining(b, classificacao1, b1, nome, pageable);
    }

    public List<Produto> findByVisibilidadeAndClassificacaoAndFavoritoAndEstoqueIsNotAndNomeContaining(boolean b, Classificacao classificacao1, Integer b1, int i, String nome, Pageable pageable) {
        return produtoRepository.findByVisibilidadeAndClassificacaoAndFavoritoAndEstoqueIsNotAndNomeContaining(b, classificacao1.getId(), b1, i, nome, pageable);
    }

    public List<Produto> findByVisibilidadeAndClassificacaoAndEstoqueAndNomeContaining(boolean b, Classificacao classificacao1, int i, String nome, Pageable pageable) {
        return produtoRepository.findByVisibilidadeAndClassificacaoAndEstoqueAndNomeContaining(b, classificacao1, i, nome, pageable);
    }

    public List<Produto> findByVisibilidadeAndClassificacaoAndNomeContaining(boolean b, Classificacao classificacao1, String nome, Pageable pageable) {
        return produtoRepository.findByVisibilidadeAndClassificacaoAndNomeContaining(b, classificacao1, nome, pageable);
    }

    public List<Produto> findByVisibilidadeAndClassificacaoAndEstoqueIsNotAndNomeContaining(boolean b, Classificacao classificacao1, int i, String nome, Pageable pageable) {
        return produtoRepository.findByVisibilidadeAndClassificacaoAndEstoqueIsNotAndNomeContaining(b, classificacao1, i, nome, pageable);
    }
}
