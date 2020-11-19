const superHeroes = require('./super-heroes.json');

/**
 * Will find all of the marvel characters in the data and return them as an array
 * @returns [
 *  {
 *    ...hero,
 *    publisher: 'Marvel'
 *  }
 * ]
 */
const getDCHeroes = (heroes) => {
  return heroes.filter((hero) => {
    return hero.publisher === "Marvel Comics";
  })
}

/**
 * Converts the character property into an array
 * @returns [
 *  {
 *    ...hero,
 *    character: [
 *      string,
 *      string,
 *      string,
 *    ]
 *  }
 * ]
 */
const convertCharactersToArray = (heroes) => {
  return heroes.map((hero) => {
    let arr = hero.characters.split(' ');
    arr = arr.map((character) => {
      if (character.endsWith(',')) {
        return character.slice(0, character.length - 1)
      } else {
        return character;
      }
    })
    return {
      ...hero,
      characters: arr
    }

  });
}

/**
 * Coverts super hero data so it is grouped the publisher property
 * @returns {
 *   "publisher 1": [
 *     { ...hero }
 *     ...
 *   ],
 *   "publisher 2" :[
 *     {... hero}
 *     ...
 *   ]
 * }
 */
const groupByPublisher = (heroes) => {
  let result = {};
  heroes.forEach((hero) => {
    if (!result[hero.publisher]) {
      result[hero.publisher] = [{
        ...hero
      }]
    } else {
      result[hero.publisher].push({
        ...hero
      })
    }
  })
  return result;
}

/**
 * Returns and array of DC Comic heroes that have more than 1 character
 * @returns [
 *  {
 *    ...hero,
 *    character: [
 *      string,
 *      string,
 *      string,
 *    ]
 *  }
 * ]
 */
const getDCHeroesWithMoreThanOneCharacter = (heroes) => {
  return heroes.filter((hero) => {
    return hero.characters.split(',').length > 1;
  })
}

module.exports = {
  convertCharactersToArray,
  getDCHeroes,
  getDCHeroesWithMoreThanOneCharacter,
  groupByPublisher,
}