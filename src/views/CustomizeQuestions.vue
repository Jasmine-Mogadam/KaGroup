<script setup lang="ts">
import { _StoreWithActions } from 'pinia';
import { RouterLink, RouterView } from 'vue-router'
import { Question } from '../types/Question';
import * as QuestionPack from '../types/QuestionPack';
import * as defaultPacks from "../constants/QuestionPacks";
import { QuestionType } from '../types/QuestionType';
</script>

<template>
  <div id="customizedquestions" style="height: 66vh;width: 33vw;background-color: green;">
    <div>
      <h4>Question</h4>
      <input id="questionText" v-model="questionText" type="text">
      <h4>Type</h4>
      <select id="typeselect" v-model="questionType">
        <option value="multiple">Multiple Choice</option>
        <option value="numeric">Numeric</option>
        <option value="text">Text</option>
      </select>
      <h4>Choices</h4>
      <input type="text" v-model="questionOption">
      <ol>
            <li v-for="o in questionOptions"> {{ o }}</li>
          </ol>
      <button v-on:click='createOption()'>Add Choice</button>
      <button v-on:click='createQuestion()'>Add Question</button>
    </div>
    <br>
    <br>
    <div id="qlist"  style="height: 50vh;width: 33vw;background-color: green;">
      <h4>Currently added qs</h4>
      <ul>
        <div v-for="qid in Object.keys(questions)">
          <span>Pack: {{ questions[qid].QuestionPack }}</span>
          <input type="text" v-model="questions[qid].QuestionText">
          <!-- https://www.digitalocean.com/community/tutorials/vuejs-iterating-v-for -->
          <ol>
            <li v-for="o in questions[qid].QuestionOptions"> {{ o }}</li>
          </ol>
          <button v-on:click='deleteQuestion(qid)' v-show="questions[qid].QuestionPack=='custom'"> delete me </button>
          <br>
        </div>
      </ul>
    </div>
    <br>
    <br>
    <div style="height: 50vh;width: 33vw;background-color: green;">
      <h4>Grouping type</h4>
      <select id="groupings" v-model="grouptype">
        <option value="heterogeneous">heterogeneous</option>
        <option value="homogeneous">homogeneous</option>
        <option value="mixed">mixed</option>
      </select>
    </div>
    <div style="height: 50vh;width: 33vw;background-color: green;">
      <fieldset>
  <legend>Question Packs:</legend>

  <div>
    <input type="checkbox" id="catme" name="catme" v-model="catme" v-on:click="catme?removePack('catme'):addPack('catme')"/>
    <label for="catme">CATME</label>
  </div>

  <div>
    <input type="checkbox" id="bigfive" name="bigfive" v-model="bigfive" v-on:click="bigfive?removePack('bigfive'):addPack('bigfive')"/>
    <label for="bigfive">Big 5</label>
  </div>

  <div>
    <input type="checkbox" id="icebreaker" name="icebreaker" v-model="icebreaker" v-on:click="catme?removePack('icebreaker'):addPack('icebreaker')"/>
    <label for="icebreaker">Icebreakers</label>
  </div>
</fieldset>


    </div>
    <button v-on:click='console.log( Object.entries(questions) );console.log("group type: "+grouptype);'>Finish {{ questionText }}</button>
  </div>

  <RouterView />
</template>

<script lang="ts">
export default {
  data() {
    return {
      nexId: 1,
      questionText:"bruh",
      questionType:'text',
      questionPreEntered:false,
      questionActive:true,
      questionOption:"first",
      packs:[],
      questionOptions:[],
      questions:{},
      catme:false,
      bigfive:false,
      icebreaker:false,
      grouptype:'heterogeneous'
    }
  },

  methods: {
    createQuestion() {
      let curId:number = this.nexId;
      let toAdd:Question = {
        QuestionType:this.questionType,
        QuestionText:this.questionText,
        QuestionActive:this.questionActive,
        QuestionOptions:this.questionOptions,
        QuestionPreEntered:this.questionPreEntered,
        QuestionPack:'custom'
      };
      this.questions[curId] = toAdd;

      this.questionOption = "first";
      this.questionOptions = [];
      this.nexId++;

      return this.questions[curId].text;
    },
    readQuestion(id:number) {
      console.log(this.questions[id].text);
      return this.questions[id].text;
    },
    deleteQuestion(id:number) {
      try {
        delete this.questions[id];
        return true;
      } catch {
        return false;
      }
    },
    createOption() {
      this.questionOptions.push(this.questionOption);
    },
    addPack(pack:QuestionPack.QuestionPack) {
      if (this.packs.indexOf(pack) != -1 || !pack) {
        return false;
      } else {
        let packQuestions:Question[] = this.loadPack(pack);
        let id = this.nexId;
        for (const q of packQuestions) {
          this.questions[id] = q;
          id++;
        }
        this.nexId = id;
        this.packs.push(pack);
        return true;
      }
    },
    removePack(pack:QuestionPack.QuestionPack) {
      let packDex:number = this.packs.indexOf(pack);
      if (packDex == -1 || !pack) {
        return false;
      } else {
        let toRemove =
          Object.keys(this.questions)
          .filter((qid) => this.questions[qid].QuestionPack==pack);
        for (const qid of toRemove) {
          try {
            delete this.questions[qid];
          } catch {
            return false;
          }
        }
        this.packs.splice(packDex,1);
        return true;
      }
    },
    loadPack(pack:QuestionPack.QuestionPack){
      switch(pack) {
        case 'catme':
          return defaultPacks.catmequestions;
        case 'bigfive':
          return defaultPacks.bigfivequestions;
        case 'icebreaker':
          return defaultPacks.icebreakerquestions;
        default:[]
      }
    },
    printTest(str:string) {
      console.log(str);
    }
  }
}
</script>
