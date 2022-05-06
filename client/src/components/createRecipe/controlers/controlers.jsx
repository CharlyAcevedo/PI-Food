let regPhrase = /^[a-zA-Z0-9][a-zA-Z0-9]+\s[a-zA-Z0-9]+\s[a-zA-Z0-9]+/;
let regWord = /^[a-zA-Z0-9]{2}[a-zA-Z0-9]*\s*\w*/;
export const regUrl = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/
let regNum = /[0-9]/


export function validateForm(prop, value) {
  if (prop === "name" && regWord.test(value)) {
    return true;
  }
  if (prop === "summary" && regPhrase.test(value)) {
    return true;
  }
  if (prop === 'image' && regUrl.test(value)){
    return true;
  }
  if (prop === 'healthScore' || prop === 'score') {
    return regNum.test(value);
  }
  if (prop === 'vegetarian' || prop === 'vegan' || prop === 'glutenFree') {
    return true;
  }
  if (prop === 'step' && regPhrase.test(value)) {
    return true;
  }
  if (prop === 'diets' || prop === 'cuisines' || prop === 'dishTypes'){
    return true;
  }

  return false;
}

export function testDisableSubmit(testObject) {
  if (testObject.name.length > 0) return true;
  if (testObject.summary.length > 0) return true;
  if (testObject.score.length > 0) return true;
  if (testObject.healthScore.length > 0) return true;
  if (testObject.image.length > 0) return true;
  if (testObject.steps.length > 0) return true;
  if (testObject.cuisines.length > 0) return true;
  if (testObject.dishTypes.length > 0) return true;
  if (testObject.diets.length > 0) return true;
  return false;
}

