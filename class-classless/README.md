## Benchmark
 
```
class
Raw:
 > 146117.8821178821
 > 144694.3056943057
 > 148963.03696303695
 > 147041.95804195805
Average (mean) 146704.2957042957

classless
Raw:
 > 11836.163836163836
 > 11582.417582417582
 > 11775.224775224775
 > 11757.242757242757
Average (mean) 11737.762237762236

Winner: class
Compared with next highest (classless), it's:
92% faster
12.5 times as fast
1.1 order(s) of magnitude faster
A LOT FASTER

```
 
## Benchmark 2
 
```
class x 93,099,236 ops/sec ±1.02% (88 runs sampled)
classless x 10,524,368 ops/sec ±1.20% (90 runs sampled)
Fastest is: class
[null]
```
 
## Profile summary
 
Tick-class
```
 [Summary]:
   ticks  total  nonlib   name
   6554   69.8%   84.9%  JavaScript
    441    4.7%    5.7%  C++
      3    0.0%    0.0%  GC
   1668   17.8%          Shared libraries
```
 
Tick-classless
```
 [Summary]:
   ticks  total  nonlib   name
   3690   39.4%   40.0%  JavaScript
   4906   52.3%   53.2%  C++
    152    1.6%    1.6%  GC
    152    1.6%          Shared libraries
```
 
