---
title: A memoized climbing stairs solution
tags:
- ruby
- dynamic-programming
- memoization
---
<div style="background: #ffffff; overflow:auto;width:auto;border:none;padding:8px;border-radius:4px;"><pre style="margin: 0; line-height: 125%;"><span></span><span style="color: #000080">def </span><span style="color: #008000">climb_stairs</span><span style="color: #000080">(</span><span style="color: #008000">n</span><span style="color: #000080">)</span>
<span style="color: #000080">    </span><span style="color: #008000">stairs_util</span><span style="color: #000080">(</span><span style="color: #008000">n</span><span style="color: #000080">, {})</span>
<span style="color: #000080">end</span>

<span style="color: #000080">def </span><span style="color: #008000">stairs_util</span><span style="color: #000080">(</span><span style="color: #008000">n</span><span style="color: #000080">, </span><span style="color: #008000">memo</span><span style="color: #000080">)</span>
<span style="color: #000080">    return </span><span style="color: #E00">1</span><span style="color: #000080"> if </span><span style="color: #008000">n</span><span style="color: #000080"> == </span><span style="color: #E00">0</span>
<span style="color: #000080">    return </span><span style="color: #E00">1</span><span style="color: #000080"> if </span><span style="color: #008000">n</span><span style="color: #000080"> == </span><span style="color: #E00">1</span>
<span style="color: #000080">    </span><span style="color: #008000">memo</span><span style="color: #000080">[</span><span style="color: #008000">n</span><span style="color: #000080">] ||= </span><span style="color: #008000">stairs_util</span><span style="color: #000080">(</span><span style="color: #008000">n</span><span style="color: #000080"> - </span><span style="color: #E00">1</span><span style="color: #000080">, </span><span style="color: #008000">memo</span><span style="color: #000080">) + </span><span style="color: #008000">stairs_util</span><span style="color: #000080">(</span><span style="color: #008000">n</span><span style="color: #000080"> - </span><span style="color: #E00">2</span><span style="color: #000080">, </span><span style="color: #008000">memo</span><span style="color: #000080">)</span>
<span style="color: #000080">end</span>
</pre></div>
