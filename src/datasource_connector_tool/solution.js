// Problem 2
// Task: Implement a datasource connector to abstract away data retrieval and manipulation from the `ViewControllers`.
// Your solution shall use only [Vanilla JavaScript](http://vanilla-js.com).

class Datasource {
  SERVER_API_URL = 'https://static.ngnrs.io/test/prices';
  results;

  constructor() {
    this.results = [];
  }

  async getPrices() {
    const json_data = await fetch(this.SERVER_API_URL).then((res) =>
      res.json()
    );
    this.results = [];

    json_data.data.prices.forEach((price) => {
      price['mid'] = () => {
        return (price.buy + price.sell) / 2 / 100;
      };
      price['quote'] = () => {
        return price.pair.slice(3, 6);
      };
      this.results.push(price);
    });
    return this.results;
  }
}

export default Datasource;

/*
let ds = new Datasource();
ds.getPrices()
  .then((prices) => {
    prices.forEach((price) => {
      console.log(
        `Mid price for ${price.pair} is ${price.mid()} ${price.quote()}.`
      );
    });
  })
  .catch((error) => {
    console.error(error);
  });
*/
