import http from 'http';

Error.stackTraceLimit = 100;

function selfCaller(count = 0) {
  if (count === 1000) throw new Error('deu rum');

  return selfCaller((count += 1));
}

/* Limite da stackTrace */
// selfCaller();

function netSalary({ discount, salary }) {
  const percent = discount / 100;
  const cost = salary * percent;
  const result = salary - cost;

  return result;
}

http
  .createServer((req, res) => {
    const url = req.url.replace('/', '');
    const params = new URLSearchParams(url);
    const data = Object.fromEntries(params);
    const result = netSalary(data);
    res.end(`O seu salário final é ${result}`);
  })
  .listen(3000, () => {
    console.log('listering 3000');
  });
