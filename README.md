# perf-quest

## How to push a test case

- Create a new directory using the rule `foo-bar` or `function_foo-function_bar`
- Create benchmark.js file and add your bench code.
- Create a prof-foo.js and prof-bar.js and replicate the bench code from step 2.
using as comparision, the same function call, like this:

```
exports.compare = {
  'arrow1': function () {
    foo(1);
  },
  'arrow2': function () {
    foo(1);
  }
};
```

- Create a Makefile with content like this (please see the notes):

```
bench: lint
	npm run benchmark > out.txt
	npm run benchmark > out.txt
	npm run benchmark > out.txt
	tail -n 23 out.txt > bench.txt
	rm out.txt
	node --prof prof-arrow.js > /dev/null
	node --prof-process *.log > out.txt
	grep -A 5 "Summary" -R out.txt > tick-arrow.txt
	rm *.log
	rm out.txt
	node --prof prof-named.js > /dev/null
	node --prof-process *.log > out.txt
	grep -A 5 "Summary" -R out.txt > tick-named.txt
	rm *.log
	rm out.txt
lint: node_modules
	npm run lint

clean:
	rm -rf node_modules

node_modules: init
	npm install

init: .
	cp ../package.json .
	cp ../.eslintrc.json .

.PHONY: init
```