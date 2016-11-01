## Benchmark
 
```
statement
Raw:
 > 164643.35664335664
 > 165392.6073926074
 > 165439.56043956045
 > 163105.8941058941
Average (mean) 164645.35464535464

expression
Raw:
 > 160302.6973026973
 > 160202.7972027972
 > 160840.15984015985
 > 160652.34765234764
Average (mean) 160499.5004995005

Winner: statement
Compared with next highest (expression), it's:
2.52% faster
1.03 times as fast
0.01 order(s) of magnitude faster
A LITTLE FASTER

```
 
## Benchmark 2
 
```
expression x 110,382,803 ops/sec ±1.39% (90 runs sampled)
statement x 110,698,884 ops/sec ±1.09% (92 runs sampled)
Fastest is: statement
[Node.js 6.9.1 on Linux 64-bit]
```
 
## Profile summary
 
Tick-function_expression
```
 [Summary]:
   ticks  total  nonlib   name
   6224   65.5%   83.0%  JavaScript
    497    5.2%    6.6%  C++
      7    0.1%    0.1%  GC
   2009   21.1%          Shared libraries
```
 
Tick-function_statement
```
 [Summary]:
   ticks  total  nonlib   name
   6226   66.0%   83.2%  JavaScript
    586    6.2%    7.8%  C++
      8    0.1%    0.1%  GC
   1947   20.6%          Shared libraries
```
 
