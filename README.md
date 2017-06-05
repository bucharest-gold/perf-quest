# perf-quest

> Using the latest released version of Node.js.

## Results

- [Class and Classless](class-classless/#readme)

```
Comparing a simple class with one approach called "classless".
```

> About this 'classless' term [here](https://gist.github.com/mpj/17d8d73275bca303e8d2)

- [Class and 'UnfrozenClassless'](class-unfrozenclassless/#readme)

```
The same approach of 'class and classless' but not using Object.freeze.
```

- [Class and module](class-module/#readme)

```
Comparing a simple class with a simple module approach.
```

> About modules:

> [http://eloquentjavascript.net/10_modules.html](http://eloquentjavascript.net/10_modules.html)

> [http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html](http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html)


- [Class and prototype](class-prototype/#readme)

```
Comparing a simple class with prototype approach.
```

- [Named function and arrow function](named_function-arrow_function/#readme)

```
Comparing a normal function (not anonymous) with arrow function.
```

- [Hidden class and No extra hidden class](hidden_class-no_extra_hidden_class/#readme)

```
Comparing the creation of a hidden class and the no creation of extra hidden class.
```

> More about hidden class [here](https://github.com/v8/v8/wiki/Design%20Elements#fast-property-access)


- [forEach and for](foreach-for/#readme)


- [filter and filter by hand](filter-filter_by_hand/#readme)

```
Comparing the Javascript API filter and filtering manually.
```

- [map and map by hand](map-map_by_hand/#readme)

```
Comparing the Javascript API map and mapping manually.
```

- [reduce and reduce by hand](reduce-reduce_by_hand/#readme)

```
Comparing the Javascript API reduce and reducing manually.
```

- [Function expression and function statement](function_expression-function_statement/#readme)

```
Comparing a normal function with a function expression.
```

> More about function expression [here](https://developer.mozilla.org/en/docs/web/JavaScript/Reference/Operators/function)

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
