<template>
  <div id="app">
    <div class="sidebar-container">
      <sidebarMenu :items="menuItems"/>
    </div>
    <div class="content-container">
      <div class="openai-container">
        <openAIChat :message="message" @sendText="sendChatText" @getOpenAIResponse="getOpenAIResponse" />
      </div>
      <div class="subject-area">
        <subjectItem v-for="(subject, index) in subjects" :key="index" :subject="subject" />
      </div>
    </div>
  </div>
</template>

<script>
import sidebarMenu from '@/components/sidebarMenu.vue'
import openAIChat from '@/components/openAIChat.vue'
import subjectItem from '@/components/createCourse.vue'

export default {
  components: {
    'sidebarMenu': sidebarMenu,
    'openAIChat': openAIChat,
    'subjectItem': subjectItem
  },
  data() {
    return {
      message: '',
      menuItems: [
        { text: '1. Vektorbegreppet', link: '/Vektorbegreppet'},
        { text: '2. Linjer och plan i rummet', link: '/Linjer-och-plan-i-rummet'},
        { text: '3. Linjära ekvationssystem', link: '/Linjara-ekvationssystem'},
        { text: '4. Gauss-Jordan', link: '/Gauss-Jordan'},
        { text: '5. Matrisaritmetik', link: '/Matrisaritmetik'},
        { text: '6. Inversa matriser', link: '/Inversa-matriser'},
        { text: '7. Linjärt beroende', link: '/Linjart-beroende'},
        { text: '8. Lösningsrum', link: '/Losningsrum'},
        { text: '9. Matriser med specialformer', link: '/Matriser-med-specialformer'},
        { text: '10. Determinanter', link: '/Determinanter'},
        { text: '11. Kryssprodukt, area och volym', link: '/Kryssprodukt-area-och-volym'},
        { text: '12. Egenvärden och egenvektorer', link: '/Egenvärden-och-egenvektorer'},
        { text: '13. Linjära avbildningar', link: '/Linjara-avbildningar'},
        { text: '14. Kärnan och bildrummet', link: '/Karnan-och-bildrummet'},
        { text: '15. Sammansättning av linjära avbildningar', link: '/Sammansättning-av-linjara-avbildningar'},
        { text: '16. Baser och dimension', link: '/Baser-och-dimension'},
        { text: 'Test', link: '/TATA24-test'},


      ],
      subjects: [
        {
          title: '1. Vektorbegreppet',
          description: 'En vektor inom fysik representerar en kraft med en given riktning, storlek och ursprung. Men i linjär algebra har en vektor de två första egenskaperna men saknar ursprung. Därför går den att flytta om man vill.',
          images: [require('@/assets/equation/lin-equation.svg'), require('@/assets/equation/lin-equation.svg')],
          link: '/Vektorbegreppet'
        },
        {
          title: '2. Linjer och plan i rummet',
          images: [require('@/assets/equation/gaussJordan.svg'), require('@/assets/equation/gaussJordan.svg')],
          description: 'Ekvationen för en rät linje definieras endast för två dimensioner. Det hindrar dem dock inte från att existera i högre dimensioner, där vi definierar dem i parameter- eller vektorform.',
          link: '/Linjer-och-plan-i-rummet'
        },
        {
          title: '3. Linjära ekvationssystem',
          images: [require('@/assets/linje.svg'), require('@/assets/linje.svg')],
          description: 'Att bunta ihop flera ekvationer skapar ett ekvationssystem, och en lösning för systemet måste lösa var och en av systemets ekvationer. Systemet sägs vara linjärt om varje ekvation har formen',
          link: '/Linjara-ekvationssystem'
        },
        {
          title: '4. Gauss-Jordan',
          description: 'Gauss-Jordan är en metod för att lösa ett linjärt ekvationssystem. Varje system faller in i ett av tre fall; unik lösning, inga lösningar eller oändligt många lösningar.',
          link: '/Gauss-Jordan'
        },
        {
          title: '5. Matrisaritmetik',
          description: 'Matrisaritmetik definieras för addition, subtraktion och multiplikation. För de två förstnämnda måste matriserna ha lika stora dimensioner och operationerna är kommutativa. Multiplikation är dock inte kommutativ och definieras endast för när antalet rader i den vänstra matrisen är lika med antalet kolumner i den högra matrisen.',
          link: '/Matrisaritmetik'
        },
        {
          title: '6. Inversa matriser',
          description: 'Inversen till en matris är en annan matris, och produkten av matrisen och dess invers är identitetsmatrisen.',
          link: '/Inversa-matriser'
        },
        {
          title: '7. Linjärt beroende',
          images: [require('@/assets/equation/gaussJordan.svg'), require('@/assets/equation/gaussJordan.svg')],
          description: 'Ekvationen för en rät linje definieras endast för två dimensioner. Det hindrar dem dock inte från att existera i högre dimensioner, där vi definierar dem i parameter- eller vektorform.',
          link: '/Linjer-och-plan-i-rummet'
        },
        {
          title: '8. Lösningsrum',
          images: [require('@/assets/equation/gaussJordan.svg'), require('@/assets/equation/gaussJordan.svg')],
          description: 'Ekvationen för en rät linje definieras endast för två dimensioner. Det hindrar dem dock inte från att existera i högre dimensioner, där vi definierar dem i parameter- eller vektorform.',
          link: '/Linjer-och-plan-i-rummet'
        },
        {
          title: '9. Matriser med specialformer',
          images: [require('@/assets/equation/gaussJordan.svg'), require('@/assets/equation/gaussJordan.svg')],
          description: 'Ekvationen för en rät linje definieras endast för två dimensioner. Det hindrar dem dock inte från att existera i högre dimensioner, där vi definierar dem i parameter- eller vektorform.',
          link: '/Linjer-och-plan-i-rummet'
        },
      ]
    }
  },
}
</script>

<style>
.subject-area {
  margin-left: 17%;
  margin-top: 3%;
  margin-right: 5%;
}

</style>
