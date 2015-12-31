var test = require("prova");
var del = require("./");

test('deleting a simple path', function (t) {
  var obj = {
    foo: 123,
    bar: 456,
    qux: 789,
    yo: 'lo'
  };

  del(obj, 'foo');
  del(obj, 'bar');
  del(obj, 'yo');

  t.plan(3);
  t.equal(obj.foo, undefined);
  t.equal(obj.bar, undefined);
  t.equal(obj.yo, undefined);
});

test('deleting a deep path', function (t) {
  var data = {
    title: 'My Products',
    products: {
      apples: 789,
      eggs: [{ kind: 'white', amount: 300 }, { kind: 'brown', amount: 200 }],
      bananas: 150,
      oranges: ['washington']
    }
  };

  del(data, 'products.eggs[0].kind');
  del(data, 'products.eggs[0].amount');
  del(data, 'products.veggies.tomatoes');
  del(data, 'products.veggies.potatoes');
  del(data, 'products.oranges[0]');

  t.plan(10);
  t.equal(data.title, 'My Products');
  t.equal(data.products.eggs[0].kind, undefined);
  t.equal(data.products.eggs[0].amount, undefined);
  t.equal(data.products.eggs[1].kind, 'brown');
  t.equal(data.products.eggs[1].amount, 200);
  t.equal(data.products.apples, 789);
  t.equal(data.products.bananas, 150);
  t.equal(data.products.veggies.tomatoes, undefined);
  t.equal(data.products.veggies.potatoes, undefined);
  t.equal(data.products.oranges[0], undefined);
});
