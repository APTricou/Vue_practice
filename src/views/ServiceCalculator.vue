<template>
  <div>
    <div class="grid">
      <div class="header">
        <h1>Service Calculator</h1>
      </div>
      <div class="inputs">
        <label>queries/day</label>
        <input v-model="QPD" type="text" />
        <label>R/W ratio</label>
        <div>
          <input v-model.number="Reads" type="number" step="1" />
          <span> : </span>
          <input v-model.number="Writes" type="number" step="1" />
        </div>
        <label>bytes per record</label>
        <div class="datainputs">
          <div class="d">
            <h3>record 1</h3>
            <input v-model="BytesPerRecord1" type="text" />
          </div>
          <div class="d">
            <h3>record 2</h3>
            <input v-model="BytesPerRecord2" type="text" />
          </div>
          <textarea placeholder="space for notes"></textarea>
        </div>
      </div>
      <div class="results">
        <h3>Queries</h3>
        <div class="inline">
          <p>{{ formatNumber(queries * 365) }} per year</p>
          <p>{{ formatNumber(queries * 7) }} per week</p>
          <p>{{ formatNumber(queries) }} per day</p>
          <p>
            {{ formatNumber(Math.round(queries / (24 * 60 * 60))) }} per second
          </p>
        </div>
        <h3>Reads and Writes</h3>
        <div class="inline">
          <p>
            {{
              formatNumber(
                Math.round(((queries / (24 * 60 * 60)) * Reads) / total)
              )
            }}
            reads/s
          </p>
          <p>
            {{
              formatNumber(
                Math.round(((queries / (24 * 60 * 60)) * Writes) / total)
              )
            }}
            writes/s
          </p>
        </div>
        <h3>Data Numbers</h3>
        <div class="inline">
          <p>Storage needed to hold for 10 years:</p>
          <p>This assumes all writes are new and unique</p>
          <p>
            {{
              formatDataNumber((BytesComputed1 * Writes * queries) / total) ||
                0
            }}
            for record 1
          </p>
          <p>
            {{
              formatDataNumber((BytesComputed2 * Writes * queries) / total) ||
                0
            }}
            for record 2
          </p>
        </div>
      </div>
    </div>
    <Footer date="May 11th, 2020" />
  </div>
</template>

<script>
import Footer from '../components/Footer.vue';

export default {
  data() {
    return {
      QPD: '0',
      Reads: 1,
      Writes: 1,
      BytesPerRecord1: '10',
      BytesPerRecord2: '10',
      suffixes: {
        K: '000', // kilo
        M: '000000', // million
        B: '000000000', // billion
        T: '000000000000', //trillion
      },
      dataSuffixes: {
        kb: '000',
        mb: '000000',
        gb: '000000000',
        tb: '000000000000',
      },
    };
  },
  computed: {
    queries() {
      return this.QPD.replace(
        /([a-z])/gi,
        match => this.suffixes[match.toUpperCase()]
      );
    },
    total() {
      return this.Reads + this.Writes;
    },
    BytesComputed1() {
      console.log(this.BytesPerRecord1)
      return this.BytesPerRecord1.replace(
        /([a-z]+)/gi,
        match => this.dataSuffixes[match.toLowerCase()]
      );
    },
    BytesComputed2() {
      return this.BytesPerRecord2.replace(
        /([a-z]+)/gi,
        match => this.dataSuffixes[match.toLowerCase()]
      );
    },
  },
  methods: {
    formatNumber(number) {
      const str = Math.round(number).toString();
      if (str.length > 12) {
        return '~' + str.slice(0, -12) + '.' + str[str.length - 12] + 'T';
      }
      if (str.length > 9) {
        return '~' + str.slice(0, -9) + '.' + str[str.length - 9] + 'B';
      }
      if (str.length > 6) {
        return '~' + str.slice(0, -6) + '.' + str[str.length - 6] + 'M';
      }
      if (str.length > 3) {
        return '~' + str.slice(0, -3) + '.' + str[str.length - 3] + 'K';
      }
      return str;
    },

    formatDataNumber(number) {
      const str = Math.round(number).toString();
      if (str.length > 12) {
        return '~' + str.slice(0, -12) + '.' + str[str.length - 12] + 'Tb';
      }
      if (str.length > 9) {
        return '~' + str.slice(0, -9) + '.' + str[str.length - 9] + 'Gb';
      }
      if (str.length > 6) {
        return '~' + str.slice(0, -6) + '.' + str[str.length - 6] + 'Mb';
      }
      if (str.length > 3) {
        return '~' + str.slice(0, -3) + '.' + str[str.length - 3] + 'kb';
      }
      return str;
    },
  },
  components: {
    Footer,
  },
};
</script>

<style lang="css" scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 80px 2fr;
  height: 85vh;
  width: 100vw;
}

.header {
  background-color: #42b883;
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
}

.inputs {
  background-color: lightblue;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

input {
  height: 2rem;
  width: 100px;
  font-size: 1.5rem;
  margin: 0.2rem;
}

span {
  font-size: 1.75rem;
}

.inline {
  margin: auto;
  line-height: 0.3rem;
}

label {
  font-size: 2rem;
}

.datainputs {
  display: flex;
  flex-direction: column;
  align-items: center;
}

textarea {
  width: 350px;
  height: 100px;
  font-size: 1rem;
}

.d {
  display: flex;
  align-items: center;
}

.results {
  background-color: #ffffff;
}
</style>
