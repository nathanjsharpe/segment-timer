
export const say = phrase => {
  const voices = speechSynthesis.getVoices();
  const voice = voices.find(v => v.name === "Google US English");

  if(typeof speechSynthesis === 'undefined') {
    return;
  }

  const msg = new SpeechSynthesisUtterance(phrase);
  msg.voice = voice;
  window.speechSynthesis.speak(msg);
}
