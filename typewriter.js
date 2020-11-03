// Animated Sentence 

let sentence = "hello there from lighthouse labs";

let timeDelay = 0;
sentence += "\n";

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, timeDelay += 50)
};


