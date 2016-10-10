## Benchmark
 
```
statement
Raw:
 > 161724.27572427574
 > 162439.56043956045
 > 162491.5084915085
 > 162973.02697302698
Average (mean) 162407.0929070929

expression
Raw:
 > 160150.84915084916
 > 160039.96003996005
 > 160740.25974025973
 > 160668.33166833167
Average (mean) 160399.85014985016

Winner: statement
Compared with next highest (expression), it's:
1.24% faster
1.01 times as fast
0.01 order(s) of magnitude faster
BASICALLY THE SAME

```
 
## Profile summary
 
Tick-function_expression
```
 [Summary]:
   ticks  total  nonlib   name
   6240   65.5%   81.9%  JavaScript
    591    6.2%    7.8%  C++
     11    0.1%    0.1%  GC
   1911   20.1%          Shared libraries
```
 
Tick-function_statement
```
 [Summary]:
   ticks  total  nonlib   name
   6263   65.9%   83.9%  JavaScript
    549    5.8%    7.4%  C++
      3    0.0%    0.0%  GC
   2040   21.5%          Shared libraries
```
 
