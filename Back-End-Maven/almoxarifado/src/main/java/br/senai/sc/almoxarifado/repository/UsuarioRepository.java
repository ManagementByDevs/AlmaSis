package br.senai.sc.almoxarifado.repository;

import br.senai.sc.almoxarifado.model.entities.TipoUsuario;
import br.senai.sc.almoxarifado.model.entities.Usuario;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, String> {
    List<Usuario> findAllByVisibilidade(Boolean visibilidade);

    List<Usuario> findByTipoUsuarioAndVisibilidade(TipoUsuario tipoUsuario, Boolean visibilidade);

    List<Usuario> findByTipoUsuarioNotAndVisibilidade(TipoUsuario tipoUsuario, Boolean visibilidade);

    Object countByTipoUsuarioAndVisibilidade(TipoUsuario pendente, boolean b);

    Object countByTipoUsuarioIsNotAndVisibilidade(TipoUsuario pendente, boolean b);

    List<Usuario> findByTipoUsuarioIsNotAndVisibilidade(TipoUsuario pendente, boolean b, Pageable pageable);

    List<Usuario> findByTipoUsuarioAndVisibilidade(TipoUsuario pendente, boolean b, Pageable pageable);

    Integer countByVisibilidadeAndTipoUsuarioAndNomeUsuarioContainingOrVisibilidadeAndTipoUsuarioAndEmailUsuarioContaining(Boolean visibilidade, TipoUsuario tipoUsuario, String nomeUsuario, Boolean visibilidade2, TipoUsuario tipoUsuario2, String emailUsuario);

    List<Usuario> findByVisibilidadeAndTipoUsuarioAndNomeUsuarioContainingOrVisibilidadeAndTipoUsuarioAndEmailUsuarioContaining(Boolean visibilidade, TipoUsuario tipoUsuario, String nomeUsuario, Boolean visibilidade2, TipoUsuario tipoUsuario2, String emailUsuario, Pageable pageable);

    Integer countByVisibilidadeAndTipoUsuarioIsNotAndNomeUsuarioContainingOrVisibilidadeAndTipoUsuarioIsNotAndEmailUsuarioContaining(Boolean visibilidade, TipoUsuario tipoUsuario, String nomeUsuario, Boolean visibilidade2, TipoUsuario tipoUsuario2, String emailUsuario);

    List<Usuario> findByVisibilidadeAndTipoUsuarioIsNotAndNomeUsuarioContainingOrVisibilidadeAndTipoUsuarioIsNotAndEmailUsuarioContaining(Boolean visibilidade, TipoUsuario tipoUsuario, String nomeUsuario, Boolean visibilidade2, TipoUsuario tipoUsuario2, String emailUsuario, Pageable pageable);

    Boolean existsByNomeUsuarioAndSenhaUsuario(String nome, String senha);

    Boolean existsByEmailUsuarioAndSenhaUsuario(String email, String senha);

    Usuario findByNomeUsuarioAndSenhaUsuario(String nome, String senha);

    Usuario findByEmailUsuarioAndSenhaUsuario(String email, String senha);
}
