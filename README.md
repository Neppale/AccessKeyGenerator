# Gerador de Chave de Acesso de NF-e

Este projeto é um gerador de chave de acesso válidas (apenas para testes) para notas fiscais eletrônicas (NF-e) e notas fiscais de consumidor eletrônicas (NFC-e). A chave de acesso é um código numérico que identifica unicamente uma nota fiscal no ambiente nacional.

## Funcionalidades

- Geração de chave de acesso válida seguindo o padrão da SEFAZ
- Suporte para todos os estados brasileiros
- Geração de QR Code para a chave de acesso
- Validação automática dos campos
- Geração de dígito verificador

## Tecnologias Utilizadas

- TypeScript
- HTML5
- CSS3
- GitHub Pages para hospedagem

## Como Usar

1. Acesse [https://accesskey.verissimo.dev](https://accesskey.verissimo.dev)
2. Preencha os campos:
   - Unidade Federal (UF)
   - Data de Emissão
   - CNPJ
   - Modelo (NF-e ou NFC-e)
   - Série
   - Número
   - Tipo de Emissão
   - Código Numérico
3. Clique em "Gerar Chave" para gerar a chave de acesso
4. O QR Code será gerado automaticamente

## Desenvolvimento

Para executar o projeto localmente:

1. Clone o repositório
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Execute o build do projeto:
   ```bash
   npm run build
   ```
4. Abra o arquivo `dist/index.html` no seu navegador através de um servidor local (recomendado: Live Server)

## Estrutura do Projeto

```
.
├── src/
│   ├── constants/     # Constantes e enums
│   ├── utils/         # Funções utilitárias
│   └── ui/           # Manipulação da interface
├── dist/             # Arquivos compilados
├── index.html        # Página principal
├── style.css         # Estilos
└── script.ts         # Ponto de entrada
```

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Referências

Este projeto segue as regras de nota fiscal conforme [este artigo](https://webmaniabr.com/blog/entenda-como-funciona-a-chave-de-acesso-da-nf-e/) do blog WebMania.
