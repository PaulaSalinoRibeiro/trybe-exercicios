# Bloco 1 - Unix e Shell :computer:

Neste diretório foi visto linhas de _comandos no terminal_, o conteúdo foi dividido em duas partes:

## Parte 1

Executamos comandos para navegar entre diretórios, criar e manipular arquivos e diretórios e ainda comandos para realizar buscas 

    - ls                            lista arquivos e diretórios 
    - ls -a                         lista todos os arquivos e diretórios 
    - mkdir                         cria um diretório 
    - cd dir                        muda para o dir nomeado 
    - cd                            muda para o diretório inicial 
    - cd ~                          muda para o diretório inicial 
    - cd  ../                       muda para o diretório pai 
    - pwd                           mostra o caminho do diretório atual 
    - cp arq1 arq2                  copia o arq1 e o chama de arq2
    - rm arq                        remove um arq
    - rmdir dir                     remove um dir
    - less arq                      exibe um arquivo uma página de cada vez
    - cat arq                       exibe arq
    - head arq                      exibe por padrão as 10 primeiras linhas de um arquivo 
    - tail arq                      exibe por padrão as últimas 10 linhas de um arquivo 
    - grep 'palavra chave' arq      procura pela palavra chave dentro de arq
    - wc arq                        conta o número de linhas, palavras e caracteres
    - *                             corresponde a qualquer numero de caracteres
    - ?                             corresponde a um caracter 
    - man                           retorna o manual do comando informado     
    - whais                         traz uma breve descrição do comando informado 
    -apropos 'palavra chave'        corresponde a comandos com a palavra chave em suas páginas no manual 

## Parte 2

Executamos comandos _find_, utilizamos os operadores _>_, _>>_ e |,
alteramos permissões de arquivos e diretórios e 
verificarmos o status e enviamos sinais a processos UNIX 

  
    - comando > arquivo                         redireciona a saída padrão para um arquivo 
    - comando >> arquivo                        anexa saída padrão a um arquivo 
    - comando < arquivo                         redireciona a entrada padrão de um arquivo 
    - comando1 | comando2                       canaliza a saída do comando1 para a entrada do comando2
    - cat arq1 arq2 > arq0                      concatena arq1 e arq2 em arq0
    - sort                                      ordena dados 
    - who                                       lista usuários logados 
    - ls -la                                    lista diretórios de acesso para todos os arquivos 
    - chmod                                     altera os direitos de acesso para os arquivos 
    - comando &                                 executa o comando em segundo plano 
    - ^C                                        elimina o trabalho em execução em primeiro plano 
    - ^Z                                        suspende o trabalho em execução em primeiro plano 
    - bg                                        retorna processos que estão suspenso e em segundo plano 
    - jobs                                      lista processos suspensos e em segundo plano 
    - fg%1                                      reinicia o primeiro processo suspenso 
    - kill%1                                    encerra o primeiro processo suspenso 
    - ps                                        lista processos atuais 
    - kill 26333                                encerra o processo de número 26333



