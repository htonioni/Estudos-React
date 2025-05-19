const URL_BASE = "http://localhost:3000"

const api = {
   async buscarPensamentos() {
      try {
         const response = await fetch(`${URL_BASE}/pensamentos`)
         return await response.json()
      } catch (error) {
         alert("Erro ao buscar pensamentos api")
         throw error
      }
   },
   async salvarPensamento(pensamento) {
      try {
         const response = await fetch(`${URL_BASE}/pensamentos`, {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(pensamento)
         })
         return await response.json()
      } catch (error) {
         alert("Erro ao cadastrar pensamento")
         throw error
      }
   },
   async buscarPensamentoPorId(id) {
      try {
         const response = await fetch(`${URL_BASE}/pensamentos/${id}`)
         return await response.json()
      } catch (error) {
         alert("Erro ao buscar id pensamento")
         throw error
      }
   },
   async editarPensamento(pensamento) {
      try {
         const response = await fetch(`${URL_BASE}/pensamentos/${pensamento.id}`, {
            method: "PUT",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(pensamento)
         })
         return await response.json()

      } catch (error) {
         alert("Erro ao editar pensamento")
         throw error
      }
   },
   async excluirPensamento(id) {
      try {
         const response = await fetch(`${URL_BASE}/pensamentos/${id}`, {
            method: "DELETE"
         })
      } catch (error) {
         alert("Erro ao remover pensamento")
         throw error
      }
   },

   async buscarPensamentosPorTermo(termo) {
      try {
         const pensamentos = await this.buscarPensamentos();
         const termoEmMinusculas = termo.toLowerCase();

         const pensamentosFiltrados = pensamentos.filter(pensamento => {
            return (pensamento.conteudo.toLowerCase().includes(termoEmMinusculas) ||
               pensamento.autoria.toLowerCase().includes(termoEmMinusculas))
         })
         return pensamentosFiltrados;
      } catch (error) {
         alert("Erro ao filtrar pensamentos");
         throw error
      }

   },

   async atualizarFavorito(id, favorito) {
      try {
         const response = await fetch(`${URL_BASE}/pensamentos/${id}`, {
            method: "PATCH",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify({ favorito })
         })
         return await response.json()
      } catch (error) {
         alert("erro ao atualizar favorito")
         throw error
      }
   }
}

export default api;