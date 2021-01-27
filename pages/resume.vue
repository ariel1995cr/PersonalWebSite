<template>
  <div class="max-w-screen-xl mx-auto p-8">
    <h2
      class="text-3xl font-extrabold leading-9 border-b-2 border-gray-100 text-gray-900 mb-2"
    >
      {{ $t('Carta de Presentacion') }}
    </h2>
    <div
      class="transition transform hover:-translate-y-1 hover:scale-110 hover:bg-blue-200"
    >
      <p class="font-mono mb-4">
        {{ $t('contenidoCartaPresentacion') }}
      </p>
    </div>

    <div class="p-8 bg-white dark:bg-gray-800 rounded-lg shadow">
      <p class="text-center text-3xl font-bold text-gray-800 dark:text-white">
        {{ $t('conocimientos') }}
      </p>
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        <div
          v-for="conocimiento in conocimientos"
          :key="conocimiento.lenguaje"
          class="p-4 transition transform hover:-translate-y-1 hover:scale-110 hover:bg-blue-200"
        >
          <div class="flex-col flex justify-center items-center">
            <div class="flex-shrink-0">
              <a href="#" class="block relative">
                <img
                  alt="profil"
                  :src="require(`~/assets/${conocimiento.imgsrc}.png`)"
                  class="mx-auto object-cover rounded-full"
                />
              </a>
            </div>
            <div class="mt-2 text-center flex flex-col">
              <span class="text-gray-600 dark:text-white text-lg font-medium">
                {{ conocimiento.lenguaje }}
              </span>
              <span class="text-gray-600 text-xs">
                {{ $t('experiencia') }}: {{ conocimiento.añosExp }}
                {{ $t('anios') }}
              </span>
              <span class="text-gray-600 text-xs">
                {{ $t('experienciaProfesional') }}:
                {{ conocimiento.experienciaProf ? '✔' : '✖' }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <h2
      v-for="(campo, index) in data"
      :key="index"
      class="text-3xl font-extrabold leading-9 border-b-2 border-gray-100 text-gray-900 mt-2 mb-4"
    >
      {{ $t(`${index}`) }}
      <div
        v-for="(row, index2) in campo"
        :key="index2"
        class="transition mt-2 border-2 shadow-lg rounded-2xl p-4 font-mono bg-dark relative overflow-hidden transform hover:-translate-y-1 hover:scale-110 hover:bg-blue-200"
      >
        <div class="w-4/6">
          <p class="text-gray-800 text-lg font-medium font-mono mb-2">
            {{ row.establecimiento }}

            <span
              class="px-4 py-2 text-base rounded-full text-red-600 border border-red-600 bg-red-200"
            >
              {{ row.desde }} - {{ row.hasta }}
            </span>
          </p>
          <div v-if="row.trabajosRealizado">
            <h2 class="text-dark dark:text-white text-lg font-mono">
              {{ $t('tareas') }}
            </h2>
            <p class="text-gray-700 text-xs">
              {{ row.trabajosRealizado }}
            </p>
          </div>
          <div v-if="row.nivel">
            <h2 class="text-dark dark:text-white text-lg font-mono">
              Nivel - Titulo
            </h2>
            <p class="text-gray-700 text-xs">
              {{ row.nivel }} - {{ row.titulo }}
            </p>
          </div>
        </div>
      </div>
    </h2>
  </div>
</template>
<script>
import { data, cartaPresentacion, conocimientos } from '../data/infoData'
export default {
  data() {
    return {
      data,
      cartaPresentacion,
      conocimientos,
    }
  },
}
</script>
