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
	node --prof prof-arrow.js > /dev/null     <--Here you need to add your prof-foo.js
	node --prof-process *.log > out.txt
	grep -A 5 "Summary" -R out.txt > tick-arrow.txt  <--Here you name the file like tick-foo.txt
	rm *.log
	rm out.txt
	node --prof prof-named.js > /dev/null    <--Here you need to add your prof-bar.js
	node --prof-process *.log > out.txt
	grep -A 5 "Summary" -R out.txt > tick-named.txt  <--Here you name the file like tick-bar.txt
	rm *.log
	rm out.txt
lint: node_modules
	npm run lint

clean:
	rm -rf node_modules

node_modules: package.json
	npm install

.PHONY: node_modules
```