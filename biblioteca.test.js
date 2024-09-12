const Biblioteca = require('../src/biblioteca');

describe('Testes da classe biblioteca', () => {
    let add;

    beforeEach(() => {
        add = new Biblioteca();
        add.adicionarItem('livro');
    });

    test('deve adicionar o livro/revista', () => {
        expect(add.obterItens()).toEqual(['livro']);
    });

    test('Deve remover um item existente da lista', () => {
        add.removerItem('livro');
        expect(add.obterItens()).toEqual(['livro']);
    });

    test('Deve lançar um erro ao tentar remover um item que não existe', () => {
        expect(() => add.removerItem('Livro')).toThrow("Item não encontrado");
    });

    test('Deve lançar um erro específico ao tentar remover um item inexistente', () => {
        try {
            lista.removerItem('livro');
        } catch (e) {
            expect(e.message).toBe("Item não encontrado");
        }
    });
});

test('deve retornar o livro com o ID', () => {
    const biblioteca = new Biblioteca();
    const livro = biblioteca.buscarLivroPorId(2);

    expect(livro).toEqual({
        id: 2,
        titulo: "Zona Morta",
        autor: "Stephen King"
    });
});

test('deve retornar undefined se o livro não for encontrado', () => {
    const biblioteca = new Biblioteca();
    const livro = biblioteca.buscarLivroPorId(999);

    expect(livro).toBeUndefined();
});
    test('deve retornar o livro correto quando o ID é válido', () => {
        const livro = biblioteca.buscarLivroPorId(2);
        expect(livro).toEqual({
            id: 2,
            titulo: "Dom Casmurro",
            autor: "Machado de Assis"
        });
    });

    test('deve retornar undefined quando o ID não existe', () => {
        const livro = biblioteca.buscarLivroPorId(999);
        expect(livro).toBeUndefined();
    });

    beforeEach(() => {
        membro = new 
        membro.adicionar('Claudio');   
    });

    test('Deve adicionar membro', () => {
        expect(lista.obterItens()).toEqual(['Claudio']);
    });
    test('Deve lançar um erro ao tentar remover um membro', () => {
        expect(() => lista.removerItem('Claudio')).toThrow("Membro não encontrado");
    });

    test('Deve lançar um erro específico ao tentar remover um membro que não existe', () => {
        try {
            membro.removerItem('Claudio');
        } catch (e) {
            expect(e.message).toBe("Membro não encontrado");
        }
    });

    test('deve emprestar livro quando livro e membro existem e o livro não está emprestado', () => {
        const resultado = biblioteca.emprestarLivro(1, 1);
        const livro = biblioteca.buscarLivroPorId(1);

        expect(resultado).toBe(true);
        expect(livro.emprestado).toBe(true);
        expect(livro.idMembro).toBe(1);
    });

    test('não deve emprestar livro se o livro já estiver emprestado', () => {
        biblioteca.emprestarLivro(2, 1); 
        const resultado = biblioteca.emprestarLivro(2, 2); 

        expect(resultado).toBe(false);
    });

    test('não deve emprestar livro se o livro não existir', () => {
        const resultado = biblioteca.emprestarLivro(999, 1);

        expect(resultado).toBe(false);
    });

    test('não deve emprestar livro se o membro não existir', () => {
        const resultado = biblioteca.emprestarLivro(1, 999);

        expect(resultado).toBe(false);
    });

    test('não deve emprestar livro se o membro não existir e o livro também não', () => {
        const resultado = biblioteca.emprestarLivro(999, 999);

        expect(resultado).toBe(false);
    });
    test('deve emprestar livro quando livro e membro existem e o livro não está emprestado', () => {
        const resultado = biblioteca.emprestarLivro(1, 1);
        const livro = biblioteca.buscarLivroPorId(1);

        expect(resultado).toBe(true);
        expect(livro.emprestado).toBe(true);
        expect(livro.idMembro).toBe(1);
    });

    
    test('deve devolver livro quando o livro está emprestado', () => {
        biblioteca.emprestarLivro(1, 1); 
        const resultado = biblioteca.devolverLivro(1);
        const livro = biblioteca.buscarLivroPorId(1);

        expect(resultado).toBe(true);
        expect(livro.emprestado).toBe(false);
        expect(livro.idMembro).toBeUndefined(); 
    });

    test('não deve devolver livro se o livro não estiver emprestado', () => {
        const resultado = biblioteca.devolverLivro(2); 

        expect(resultado).toBe(false);
    });
    
        beforeEach(() => {
            biblioteca = new Biblioteca();
        });
    
      
        test('deve emprestar livro quando livro e membro existem e o livro não está emprestado', () => {
            const resultado = biblioteca.emprestarLivro(1, 1);
            const livro = biblioteca.buscarLivroPorId(1);
    
            expect(resultado).toBe(true);
            expect(livro.emprestado).toBe(true);
            expect(livro.idMembro).toBe(1);
        });
    
    
        test('deve devolver livro quando o livro está emprestado', () => {
            biblioteca.emprestarLivro(1, 1); 
            const resultado = biblioteca.devolverLivro(1);
            const livro = biblioteca.buscarLivroPorId(1);
    
            expect(resultado).toBe(true);
            expect(livro.emprestado).toBe(false);
            expect(livro.idMembro).toBeUndefined();         
        });
        test('deve listar livros emprestados corretamente', () => {
            biblioteca.emprestarLivro(1, 1);
            biblioteca.emprestarLivro(2, 2); 
    
            const livrosEmprestados = biblioteca.listarLivrosEmprestados();
    
            expect(livrosEmprestados).toHaveLength(2); 
            expect(livrosEmprestados).toEqual(
                expect.arrayContaining([
                    expect.objectContaining({ id: 1, emprestado: true }),
                    expect.objectContaining({ id: 2, emprestado: true })
                ])
            );
        });       
           
            test('deve emprestar livro quando livro e membro existem e o livro não está emprestado', () => {
                const resultado = biblioteca.emprestarLivro(1, 1);
                const livro = biblioteca.buscarLivroPorId(1);
        
                expect(resultado).toBe(true);
                expect(livro.emprestado).toBe(true);
                expect(livro.idMembro).toBe(1);
            });     
           
           test('deve listar livros emprestados corretamente', () => {
                biblioteca.emprestarLivro(1, 1);
                biblioteca.emprestarLivro(2, 2);
        
                const livrosEmprestados = biblioteca.listarLivrosEmprestados();
        
                expect(livrosEmprestados).toHaveLength(2); 
                expect(livrosEmprestados).toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({ id: 1, emprestado: true }),
                        expect.objectContaining({ id: 2, emprestado: true })
                    ])
                );
            });
        
            test('deve retornar uma lista vazia se nenhum livro estiver emprestado', () => {
                const livrosEmprestados = biblioteca.listarLivrosEmprestados();
        
                expect(livrosEmprestados).toHaveLength(0); 
            });
        
       
            test('deve listar livros disponíveis corretamente', () => {
                biblioteca.emprestarLivro(1, 1); 
        
                const livrosDisponiveis = biblioteca.listarLivrosDisponiveis();
        
                expect(livrosDisponiveis).toHaveLength(2); 
                expect(livrosDisponiveis).toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({ id: 2, emprestado: false }),
                        expect.objectContaining({ id: 3, emprestado: false })
                    ])
                );
            });
        
            test('deve retornar uma lista vazia se todos os livros estiverem emprestados', () => {
                biblioteca.emprestarLivro(1, 1);
                biblioteca.emprestarLivro(2, 2);
                biblioteca.emprestarLivro(3, 2);
        
                const livrosDisponiveis = biblioteca.listarLivrosDisponiveis();
        
                expect(livrosDisponiveis).toHaveLength(0); 
            });
        

            const Biblioteca = require('./biblioteca');

            describe('Biblioteca', () => {
                let biblioteca;
            
                beforeEach(() => {
                    biblioteca = new Biblioteca();
                });
            
               
                test('deve emprestar livro quando livro e membro existem e o livro não está emprestado', () => {
                    const resultado = biblioteca.emprestarLivro(1, 1);
                    const livro = biblioteca.buscarLivroPorId(1);
            
                    expect(resultado).toBe(true);
                    expect(livro.emprestado).toBe(true);
                    expect(livro.idMembro).toBe(1);
                });
            
                
                test('deve devolver livro quando o livro está emprestado', () => {
                    biblioteca.emprestarLivro(1, 1); 
                    const resultado = biblioteca.devolverLivro(1);
                    const livro = biblioteca.buscarLivroPorId(1);
            
                    expect(resultado).toBe(true);
                    expect(livro.emprestado).toBe(false);
                    expect(livro.idMembro).toBeUndefined(); 
                });
            
                test('não deve devolver livro se o livro não estiver emprestado', () => {
                    const resultado = biblioteca.devolverLivro(2); 
            
                    expect(resultado).toBe(false);
                });
            
                test('não deve devolver livro se o livro não existir', () => {
                    const resultado = biblioteca.devolverLivro(999); 
            
                    expect(resultado).toBe(false);
                });
            
            });       