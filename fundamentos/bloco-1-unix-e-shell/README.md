# Bloco 1 - Unix e Shell :computer:

Neste diretório foi visto linhas de _comandos no terminal_, o conteúdo foi dividido em duas partes:

## Parte 1

Executamos comandos para navegar entre diretórios, criar e manipular arquivos e diretórios e ainda comandos para realizar buscas 

    - ls                            lista arquivos e diretórios 
    - ls -a                         lista todos os arquivos e diretórios 
    - mkdir                         cria um diretório 
    - cd _dir_                      muda para o _dir_ nomeado 
    - cd                            muda para o diretório inicial 
    - cd ~                          muda para o diretório inicial 
    - cd  ../                       muda para o diretório pai 
    - pwd                           mostra o caminho do diretório atual 
    - cp _arq1_ _arq2_              copia o _arq1_ e o chama de _arq2_
    - rm _arq_                      remove um _arq_
    - rmdir _dir_                   remove um _dir_
    - less _arq_                    exibe um arquivo uma página de cada vez
    - cat _arq_                     exibe _arq_
    - head _arq_                    exibe por padrão as 10 primeiras linhas de um arquivo 
    - tail _arq_                    exibe por padrão as últimas 10 linhas de um arquivo 
    - grep 'palavra chave' _arq_    procura pela palavra chave dentro de _arq_
    - wc _arq_                      conta o número de linhas, palavras e caracteres
    - *                             corresponde a qualquer numero de caracteres
    - ?                             corresponde a um caracter 
    - man                           retorna o manual do comando informado     
    - whais                         traz uma breve descrição do comando informado 
    -apropos 'palavra chave'        corresponde a comandos com a palavra chave em suas páginas no manual 

## Parte 2

Executamos comandos _find_, utilizamos os operadores _>_, _>>_ e |
Alteramos permissões de arquivos e diretórios 
Verificarmos o status e enviamos sinais a processos UNIX 

  
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


    
