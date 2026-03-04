function processArray() {
  const output = document.getElementById("output");
  const numbers = [1, 2, 3, 4];

  new Promise((resolve) => {
    setTimeout(() => {
      const evens = numbers.filter(n => n % 2 === 0);
      output.textContent = evens.join(",");
      resolve(evens);
    }, 1000);
  })
  .then((evens) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const doubled = evens.map(n => n * 2);
        output.textContent = doubled.join(",");
        resolve(doubled);
      }, 2000);
    });
  });
}

processArray();