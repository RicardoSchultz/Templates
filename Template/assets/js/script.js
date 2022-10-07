    function content() {
        var element = document.getElementById("arq");
        element.scr = "C:/Projetos/Teste/Template/arquivos/ArquivoTeste.pdf";
        //element.innerHTML = '<iframe width="100%" height="400" src="https://dspbiomedical.com/wp-content/uploads/2017/12/teste-de-tamanho-de-arquivo-1.pdf"></iframe>';
        //element.innerHTML = '<iframe width="100%" height="400" src="C:/Projetos/Teste/Template/arquivos/ArquivoTeste.docx"/>';
        element.innerHTML = '<iframe width="100%" height="400" class="doc" src="https://docs.google.com/gview?url=http://writing.engr.psu.edu/workbooks/formal_report_template.doc&embedded=true"></iframe>';
        //element.innerHTML = '<iframe src="https://docs.google.com/gview?url=C:/Projetos/Teste/Template/arquivos/ArquivoTeste.docx&embedded=true"></iframe>';

        //C:/Projetos/Teste/Template/arquivos/ArquivoTeste.pdf



        console.log(element);
        return element ;
      }


