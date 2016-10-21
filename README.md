# perf-quest

## Results

- [Class and Classless](class-classless/#readme)
- [Class and module](class-module/#readme)
- [Class and prototype](class-prototype/#readme)
- [Named function and arrow function](named_function-arrow_function/#readme)
- [Hidden class and No extra hidden class](hidden_class-no_extra_hidden_class/#readme)
- [forEach and for](foreach-for/#readme)
- [filter and filter by hand](filter-filter_by_hand/#readme)
- [map and map by hand](map-map_by_hand/#readme)
- [reduce and reduce by hand](reduce-reduce_by_hand/#readme)
- [Function expression and function statement](function_expression-function_statement/#readme)

### How to push a test case

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

- Copy Makefile.example from the root directory, rename it to Makefile and change for your needs.
- Type `make` inside your test case directory.
- Add the test case on Makefile located on project root directory.
- To run all the tests type `make` from project root directory.