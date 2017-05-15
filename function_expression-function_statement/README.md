## Benchmark
 
```
statement
Raw:
 > 157321.6783216783
 > 157156.84315684316
 > 157931.06893106893
 > 157659.34065934067
Average (mean) 157517.23276723275

expression
Raw:
 > 153456.54345654347
 > 152061.93806193807
 > 151914.0859140859
 > 151771.22877122878
Average (mean) 152300.94905094904

Winner: statement
Compared with next highest (expression), it's:
3.31% faster
1.03 times as fast
0.01 order(s) of magnitude faster
A LITTLE FASTER

```
 
## Benchmark 2
 
```
expression x 98,467,965 ops/sec ±0.91% (88 runs sampled)
statement x 96,224,446 ops/sec ±1.04% (85 runs sampled)
Fastest is: expression
[null]
```
 
## Profile summary
 
Tick-function_expression
```
 [Summary]:
   ticks  total  nonlib   name
   6522   69.5%   84.6%  JavaScript
    365    3.9%    4.7%  C++
      4    0.0%    0.1%  GC
   1673   17.8%          Shared libraries
```
 
Tick-function_statement
```
 [Summary]:
   ticks  total  nonlib   name
   6534   69.7%   85.8%  JavaScript
    405    4.3%    5.3%  C++
      4    0.0%    0.1%  GC
   1759   18.8%          Shared libraries
```
 
