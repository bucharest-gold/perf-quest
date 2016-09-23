# perf-quest

## Results

- [Class and prototype](class-prototype/#readme)
- [Named function and arrow function](named_function-arrow_function/#readme)

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

- Copy Makefile.example from the root directory and change for your needs.
- Add the test case on Makefile located on project root directory.
- To run all the tests type `make` from project root directory.