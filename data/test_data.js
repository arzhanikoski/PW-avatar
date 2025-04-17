import * as dotenv from 'dotenv';

dotenv.config();

const testData = {
  en: {
    gameRules: {
      bullet1: "Game rules are the same as the original game.",
      bullet2: "To calculate a single symbol win, count the number of consecutive reels that contain the symbol, starting from either the leftmost or rightmost reel."
    }
  },
  es: {
    gameRules: {
      bullet1: "Las reglas del juego son las mismas que el juego original.",
      bullet2: "Para calcular una ganancia de símbolo único, cuenta el número de carretes consecutivos que contienen el símbolo, comenzando desde el carrete más a la izquierda o el más a la derecha."
    }
  },
  de: {
    gameRules: {
      bullet1: "Die Spielregeln sind die gleichen wie im Originalspiel.",
      bullet2: "Um einen einzelnen Symbolgewinn zu berechnen, zählen Sie die Anzahl der aufeinanderfolgenden Walzen, die das Symbol enthalten, beginnend mit der linken oder rechten Walze."
    }
  }
};

// Get the language from the .env file
const language = process.env.LANGUAGE || 'en';

// Select the corresponding language data
const selectedLanguageData = testData[language];

export { selectedLanguageData };