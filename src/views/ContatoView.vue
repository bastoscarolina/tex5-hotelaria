<template>
  
  <Titlecomponent>
    <h3>{{ titleReservas }}</h3>
    <h1>{{ subtitleReservas }}</h1>
  </Titlecomponent>

  <main class="main">
      <div class="contato">
        <fieldset class="informacao_de_contato">
          <legend class="titulo_da_secao">Fale Conosco</legend>
          <div class="info">
            <ul>
            <li>R. Dep. Laércio Corte, 1501 - Panamby, São Paulo</li>
            <li>+55 (11) 9999 - 9999</li>
            <li>+55 (11) 9999 - 9999</li>
            <li>reservas@texhotel.com</li>
          </ul>
          </div>
        </fieldset>

        <form class="form" action="" method="post" enctype="multipart/form-data">
          <fieldset class="informacao_de_contato">
            <legend class="titulo_da_secao">Deixe Seus Dados Conosco</legend>  
                <ul>
                  <li class="nome">
                    <label for="nome">Nome</label>
                    <input type="text" id="nome" name="nome" placeholder="Digite seu Nome" required />
                  </li>
                  <li class="email">
                    <label  for="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Digite seu Email" required />
                  </li>
                   <li class="telefone">
                    <label for="telefone">Telefone</label>
                    <input type="number" id="telefone" name="telefone" placeholder="Digite seu Número" required />
                  </li>
                  <li class="assunto" >
                    <label for="tipo_servico">Assunto</label>
                    <select class="select" name="serviso" id="serviso">
                      <option value="auto_select">Selecione uma Opção</option>
                      <option id="cancela_reserva">
                        Cancelamento de Reserva
                      </option>
                      <option value="ouvidoria">Ouvidoria</option>
                      <option value="departamento_financeiro">
                        Departamento financeiro
                      </option>
                      <option value="datas">Remarcação de datas</option>
                      <option value="feedback">Reclamações/Opiniões</option>
                    </select>
                  </li>
                  <li >
                    <label class="mensage" for="mensagem">Mensagem</label>
                    <textarea class="textarea" name="mensagem" id="mensagem" cols="30" rows="10"></textarea>
                  </li>
                  <li>
                    <button class="button" >Enviar Mensagem</button>
                  </li>
                </ul>
            </fieldset>    
          </form>
          
      </div>
    </main>
    
</template>

<script>
import Titlecomponent from "@/components/Titlecomponent.vue";


export default {
  name: "InicioView",
  components: {
    Titlecomponent
  }
}
</script>
<style>
</style>