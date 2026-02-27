## 📌 Convenção de Commits

Este projeto adota a especificação [Conventional Commits](https://www.conventionalcommits.org/). O uso deste padrão permite a geração automática de logs de mudanças (CHANGELOG) e a determinação da próxima versão semântica do projeto.

### Estrutura do Commit

O formato do commit deve seguir esta estrutura:
`tipo(escopo): descrição curta`

### Tipos Permitidos

| Tipo        | Descrição                                                       | Gera Versão?      |
| :---------- | :-------------------------------------------------------------- | :---------------- |
| `feat:`     | Uma nova funcionalidade para o usuário.                         | **Minor (0.1.0)** |
| `fix:`      | Correção de um erro ou bug.                                     | **Patch (0.0.1)** |
| `perf:`     | Mudança de código que melhora a performance.                    | **Patch (0.0.1)** |
| `refactor:` | Mudança que não corrige erro nem adiciona funcionalidade.       | Não               |
| `style:`    | Alterações apenas de formatação (espaços, lint, etc).           | Não               |
| `docs:`     | Alterações apenas na documentação.                              | Não               |
| `test:`     | Adição ou correção de testes.                                   | Não               |
| `build:`    | Mudanças no sistema de build ou dependências (npm, maven).      | Não               |
| `ci:`       | Mudanças em arquivos de configuração de CI (GitHub Actions).    | Não               |
| `chore:`    | Tarefas de manutenção geral que não alteram o código principal. | Não               |
| `revert:`   | Reversão de um commit anterior.                                 | Não               |

### ⚠️ Breaking Changes (Mudanças Quebrantes)

Quando uma alteração quebra a compatibilidade com versões anteriores da API, ela deve ser sinalizada de duas formas possíveis:

1.  **Exclamação `!`:** Adicionada após o tipo/escopo.
    _Ex:_ `feat(api)!: remove suporte ao endpoint v1`
2.  **Rodapé `BREAKING CHANGE:`:** Descrição detalhada no final da mensagem do commit.

> **Nota:** Uma `BREAKING CHANGE` sempre resultará em um aumento de versão **MAJOR (1.0.0)**, independentemente do tipo de commit.

---

### Exemplos Práticos

- **Novo recurso:** `feat(parser): adiciona suporte a arquivos JSON`
- **Correção de bug:** `fix(ui): corrige alinhamento do botão de fechar`
- **Documentação:** `docs: atualiza instruções de instalação no README`
- **Mudança de Breaking Change:** `text refactor!: altera o tipo de retorno do método get() BREAKING CHANGE: o método get() agora retorna uma Promise em vez de um objeto.`
