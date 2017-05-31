# perf-quest

> Using the latest released version of Node.js.

## Results

- [Class and Classless](class-classless/#readme)
- [Class and 'UnfrozenClassless'](class-unfrozenclassless/#readme)
- [Class and module](class-module/#readme)
- [Class and prototype](class-prototype/#readme)
- [Named function and arrow function](named_function-arrow_function/#readme)
- [Hidden class and No extra hidden class](hidden_class-no_extra_hidden_class/#readme)
- [forEach and for](foreach-for/#readme)
- [filter and filter by hand](filter-filter_by_hand/#readme)
- [map and map by hand](map-map_by_hand/#readme)
- [reduce and reduce by hand](reduce-reduce_by_hand/#readme)
- [Function expression and function statement](function_expression-function_statement/#readme)
- [WeakMap and Symbol](weakmap-symbol/#readme)
- [object assign and util extend](object_assign-util_extend/#readme)

### How to push a test case

- Create a new directory using the rule `foo-bar` or `function_foo-function_bar`
- Create benchmark.js and benchmark2.js files and add your bench code (look the other tests to get help).
- Copy Makefile.example from the root directory, rename it to Makefile.
- Type `make` inside your test case directory.


> To run all the tests type `make` from project root directory.

## Benchmarks

Benchmarks are notoriously a lot like statistics so take this with a grain of salt.
