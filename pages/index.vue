<script setup>
import axios from "axios"
import { ref, watch } from 'vue'

const dados = ref({
  nome: '',
  telefone: '',
  ideia: ''
})

// Formatar telefone
watch(() => dados.value.telefone, (val) => {
  if (!val) return
  const cleaned = val.replace(/\D/g, '')
  const match = cleaned.match(/^(\d{0,2})(\d{0,5})(\d{0,4})$/)
  if (match) {
    dados.value.telefone = !match[2]
      ? match[1]
      : `(${match[1]}) ${match[2]}${match[3] ? '-' + match[3] : ''}`
  }
})

// Ideia em maiúsculo
watch(() => dados.value.ideia, (val) => {
  dados.value.ideia = val.toUpperCase()
})

const criar_ideia = async () => {
  try {
    await axios.post('/api/criar_ideia', { dados: dados.value })
    alert('Ideia enviada com sucesso, EM BREVE ENTRAREMOS EM CONTATO!')
    dados.value = { nome: '', telefone: '', ideia: '' }
  } catch (erro) {
    console.log(`Aconteceu um erro ao criar sua ideia: ${erro}`)
  }
}
</script>

<template>
  
  <div class="page-wrapper">
    <div class="form-container">
      <h1>IDEIAS</h1>

      <h3>Deixe sua ideia para a resolução de um problema que você enfrenta no seu dia a dia!</h3>
      <h4>Com isso podemos resolver o problema não apenas seu, mas de outras pessoas também!</h4>

      <form @submit.prevent="criar_ideia">
        <input type="text" v-model="dados.nome" placeholder="Seu nome" required />
        <input type="text" v-model="dados.telefone" placeholder="Telefone" required />
        <textarea v-model="dados.ideia" placeholder="Escreva sua ideia!" rows="6" required></textarea>
        <button type="submit">Enviar Ideia</button>
      </form>
    </div>
  </div>
</template>

<style>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden;
  font-family: Arial, sans-serif;
}

.page-wrapper {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #4e4e4e;
  padding: 20px;
}

.form-container {
  max-width: 600px;
  width: 100%;
  background-color: white;
  padding: 40px 30px;
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  color: #333;
}

h1, h3, h4 {
  text-align: center;
  margin-bottom: 20px;
}

form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

input, textarea {
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
}

textarea {
  resize: none;
}

button {
  background-color: #2b82fc;
  color: white;
  font-weight: bold;
  border: none;
  padding: 12px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0052c6
}
</style>
