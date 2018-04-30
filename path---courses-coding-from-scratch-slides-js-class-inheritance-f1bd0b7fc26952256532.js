webpackJsonp([48082511199485],{405:function(n,s){n.exports={data:{allMarkdownRemark:{edges:[{node:{html:'<p>class: middle</p>\n<h2>Every object in JavaScript has an internal property called [[Prototype]].</h2>\n<p>—\nThe double square brackets that enclose [[Prototype]] signify that it is an internal property, and cannot be accessed directly in code.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nObject<span class="token punctuation">.</span><span class="token function">getPrototypeOf</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">//Output</span>\n<span class="token punctuation">{</span>constructor<span class="token punctuation">:</span> ƒ<span class="token punctuation">,</span> __defineGetter__<span class="token punctuation">:</span> ƒ<span class="token punctuation">,</span> __defineSetter__<span class="token punctuation">:</span> ƒ<span class="token punctuation">,</span> …<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<hr>\n<p>class: middle</p>\n<h3>It is important to note that .<strong>proto</strong> is a legacy feature and should not be used in production code, and it is not present in every modern browser. However, we can use it throughout this article for demonstrative purposes.</h3>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>x<span class="token punctuation">.</span>__proto__<span class="token punctuation">;</span>\n\n<span class="token comment">//Output</span>\n<span class="token punctuation">{</span>constructor<span class="token punctuation">:</span> ƒ<span class="token punctuation">,</span> __defineGetter__<span class="token punctuation">:</span> ƒ<span class="token punctuation">,</span> __defineSetter__<span class="token punctuation">:</span> ƒ<span class="token punctuation">,</span> …<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<hr>\n<p>class: middle center</p>\n<h2>It is important that every object in JavaScript has a [[Prototype]] as it creates a way for any two or more objects to be linked.</h2>\n<p>???\nWhen you attempt to access a property or method of an object, JavaScript will first search on the object itself, and if it is not found, it will search the object’s [[Prototype]]. If after consulting both the object and its [[Prototype]] still no match is found, JavaScript will check the prototype of the linked object, and continue searching until the end of the prototype chain is reached.</p>\n<p>At the end of the prototype chain is Object.prototype. All objects inherit the properties and methods of Object. Any attempt to search beyond the end of the chain results in null.</p>\n<hr>\n<h2>In our example, x is an empty object that inherits from Object. x can use any property or method that Object has, such as toString().</h2>\n<p>—</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>x<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">//output</span>\n<span class="token punctuation">[</span>object Object<span class="token punctuation">]</span>\n</code></pre>\n      </div>\n<p>???\nlet y = [];\nIf we take a look at the [[Prototype]] of the new y array, we will see that it has more properties and methods than the x object. It has inherited everything from Array.prototype.</p>\n<p><code>y.__proto__;</code>\n[constructor: ƒ, concat: ƒ, pop: ƒ, push: ƒ, …]</p>\n<hr>\n<p>class: middle</p>\n<h2>Class Inheritance</h2>\n<ul>\n<li>why do use it?</li>\n<li>now we dev at a meat shop</li>\n<li><a href="https://www.thoughtworks.com/insights/blog/composition-vs-inheritance-how-choose">Good Article</a></li>\n</ul>\n<hr>\n<p>class: middle</p>\n<p>Composition over inheritance (or composite reuse principle) in object-oriented\nprogramming is the principle that classes should achieve polymorphic behavior\nand code reuse by their composition (by containing instances of other classes\nthat implement the desired functionality) rather than inheritance from a base or\nparent class.[2] This is an often-stated principle of OOP, such as in the\ninfluential book Design Patterns.[3]</p>\n<hr>\n<p>class: middle center</p>\n<blockquote>\n<p>Wha?</p>\n</blockquote>\n<hr>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">let</span> meat1 <span class="token operator">=</span> <span class="token punctuation">{</span>\n  name<span class="token punctuation">:</span> <span class="token string">"Pork Chop"</span><span class="token punctuation">,</span>\n  price<span class="token punctuation">:</span> <span class="token number">8.33</span><span class="token punctuation">,</span>\n  <span class="token function">calculateTax</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>price <span class="token operator">*</span> <span class="token number">0.08</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">let</span> meat2 <span class="token operator">=</span> <span class="token punctuation">{</span>\n  name<span class="token punctuation">:</span> <span class="token string">"Flank Steak"</span><span class="token punctuation">,</span>\n  price<span class="token punctuation">:</span> <span class="token number">2.99</span><span class="token punctuation">,</span>\n  <span class="token function">calculateTax</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>price <span class="token operator">*</span> <span class="token number">0.08</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">let</span> meat3 <span class="token operator">=</span> <span class="token punctuation">{</span>\n  name<span class="token punctuation">:</span> <span class="token string">"T-Bone"</span><span class="token punctuation">,</span>\n  price<span class="token punctuation">:</span> <span class="token number">3.89</span><span class="token punctuation">,</span>\n  <span class="token function">calculateTax</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>price <span class="token operator">*</span> <span class="token number">0.08</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<hr>\n<p>class: middle center</p>\n<p><img src="http://ustutorials.com/tutorials-images/Javascript-Objects-Treasure-Map.jpg" alt="inline"></p>\n<hr>\n<p>class: middle</p>\n<h1>Function Constructor</h1>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">Meat</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> price<span class="token punctuation">,</span> cut<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>price <span class="token operator">=</span> price<span class="token punctuation">;</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>cut <span class="token operator">=</span> cut<span class="token punctuation">;</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">calculateTax</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>price <span class="token operator">*</span> <span class="token number">0.08</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">let</span> dinner <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Meat</span><span class="token punctuation">(</span><span class="token string">"porkchop"</span><span class="token punctuation">,</span> <span class="token number">10.99</span><span class="token punctuation">,</span> <span class="token string">"butt"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> steak <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Meat</span><span class="token punctuation">(</span><span class="token string">"steak"</span><span class="token punctuation">,</span> <span class="token number">10.99</span><span class="token punctuation">,</span> <span class="token string">"t-bone"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> vegan <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Meat</span><span class="token punctuation">(</span><span class="token string">"Soy"</span><span class="token punctuation">,</span> <span class="token number">10.99</span><span class="token punctuation">,</span> <span class="token string">"ewwww"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>dinner<span class="token punctuation">.</span><span class="token function">calculateTax</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>???</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">function</span> <span class="token function">Produce</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> price<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>\n<span class="token keyword">this</span><span class="token punctuation">.</span>price <span class="token operator">=</span> price<span class="token punctuation">;</span>\n<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">calculateTax</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>price \\<span class="token operator">*</span> <span class="token number">0.08</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">let</span> apple <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Produce</span><span class="token punctuation">(</span><span class="token string">\'apple\'</span><span class="token punctuation">,</span> <span class="token number">2.05</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> pinnapple <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Produce</span><span class="token punctuation">(</span><span class="token string">\'pinnapple\'</span><span class="token punctuation">,</span> <span class="token number">5.85</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>apple<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// http://jsbin.com/rosijuxexa/2/edit?js,console</span>\n\n<span class="token keyword">var</span> <span class="token function-variable function">Meat</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> price<span class="token punctuation">,</span> cut<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>\n<span class="token keyword">this</span><span class="token punctuation">.</span>price <span class="token operator">=</span> price<span class="token punctuation">;</span>\n<span class="token keyword">this</span><span class="token punctuation">.</span>cut <span class="token operator">=</span> cut<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\nMeat<span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token punctuation">{</span>\ncalculateTax<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>price \\<span class="token operator">*</span> <span class="token punctuation">.</span><span class="token number">08</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<hr>\n<h1>Still not sure?</h1>\n<p>???</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token comment">// Initialize constructor functions</span>\n<span class="token keyword">function</span> <span class="token function">Hero</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> level<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>level <span class="token operator">=</span> level<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">Warrior</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> level<span class="token punctuation">,</span> weapon<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  Hero<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> name<span class="token punctuation">,</span> level<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">this</span><span class="token punctuation">.</span>weapon <span class="token operator">=</span> weapon<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">Healer</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> level<span class="token punctuation">,</span> spell<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  Hero<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> name<span class="token punctuation">,</span> level<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">this</span><span class="token punctuation">.</span>spell <span class="token operator">=</span> spell<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// Link prototypes and add prototype methods</span>\nWarrior<span class="token punctuation">.</span>prototype <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>Hero<span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token punctuation">;</span>\nHealer<span class="token punctuation">.</span>prototype <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>Hero<span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nHero<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">greet</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> says hello.`</span></span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nWarrior<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">attack</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> attacks with the </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>weapon<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.`</span></span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nHealer<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">heal</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> casts </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>spell<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.`</span></span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Initialize individual character instances</span>\n<span class="token keyword">const</span> hero1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Warrior</span><span class="token punctuation">(</span><span class="token string">"Bjorn"</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">"axe"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> hero2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Healer</span><span class="token punctuation">(</span><span class="token string">"Kanin"</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">"cure"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p><a href="https://www.digitalocean.com/community/tutorials/understanding-prototypes-and-inheritance-in-javascript">Link</a></p>\n<hr>\n<h1>Exercise</h1>\n<p>Use the example of Meat to create a Function Constructor for a Van. It should have the following properties.</p>\n<ul>\n<li>make</li>\n<li>model</li>\n<li>seating (number)</li>\n<li>speed</li>\n<li><strong>AND</strong> a method called ‘increaseSpeedBy’. This method will take 1 argument, a number, and increase the current speed by that amount, <em>and</em> return the new speed.</li>\n</ul>\n<p>Once we’ve created our Van Class, let’s make 3 instances of it.</p>\n<hr>\n<p>class: middle</p>\n<h1>Error Handling</h1>\n<ul>\n<li>Be a good developer</li>\n<li>handling all possible cases…safely</li>\n<li>you only get 1 throw, no more!!!</li>\n</ul>\n<hr>\n<p><img src="https://javascript.info/article/try-catch/try-catch-flow@2x.png"></p>\n<hr>\n<p>class: middle</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>\n    Block <span class="token keyword">of</span> code to <span class="token keyword">try</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">catch</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    Block <span class="token keyword">of</span> code to handle errors\n<span class="token punctuation">}</span>\n<span class="token keyword">finally</span> <span class="token punctuation">{</span>\n    Block <span class="token keyword">of</span> code to be executed regardless <span class="token keyword">of</span> the <span class="token keyword">try</span> <span class="token operator">/</span> <span class="token keyword">catch</span> result\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<hr>\n<p>class: middle</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">let</span> puppies<span class="token punctuation">;</span>\n\n<span class="token keyword">try</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> result <span class="token operator">=</span> puppies<span class="token punctuation">.</span><span class="token function">peedInTheToilet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">ex</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"oops!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<hr>\n<p>class: middle</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">productOrderValidationTask</span><span class="token punctuation">(</span>productName<span class="token punctuation">,</span> quantity<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">try</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>quantity <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>\n        <span class="token template-string"><span class="token string">`You need to enter a quantity for </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>productName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> greater than zero!`</span></span>\n      <span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">ex</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>ex<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>ex<span class="token punctuation">.</span>message<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">productOrderValidationTask</span><span class="token punctuation">(</span><span class="token string">"Milk"</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">productOrderValidationTask</span><span class="token punctuation">(</span><span class="token string">"Cheese"</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<hr>',internal:{content:'---\ntitle: "JavaScript Class Inheritance" \ncourseId:  "CFSG105"\ncirriculum: \n  - "Software Development"\ntype: "slide"\ndraft: false\n---\n\nclass: middle\n\n## Every object in JavaScript has an internal property called [[Prototype]].\n\n--\nThe double square brackets that enclose [[Prototype]] signify that it is an internal property, and cannot be accessed directly in code.\n\n```js\nlet x = {};\n\nObject.getPrototypeOf(x);\n\n//Output\n{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, …}\n```\n\n---\n\nclass: middle\n\n### It is important to note that .**proto** is a legacy feature and should not be used in production code, and it is not present in every modern browser. However, we can use it throughout this article for demonstrative purposes.\n\n```js\nx.__proto__;\n\n//Output\n{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, …}\n```\n\n---\n\nclass: middle center\n\n## It is important that every object in JavaScript has a [[Prototype]] as it creates a way for any two or more objects to be linked.\n\n???\nWhen you attempt to access a property or method of an object, JavaScript will first search on the object itself, and if it is not found, it will search the object\'s [[Prototype]]. If after consulting both the object and its [[Prototype]] still no match is found, JavaScript will check the prototype of the linked object, and continue searching until the end of the prototype chain is reached.\n\nAt the end of the prototype chain is Object.prototype. All objects inherit the properties and methods of Object. Any attempt to search beyond the end of the chain results in null.\n\n---\n\n## In our example, x is an empty object that inherits from Object. x can use any property or method that Object has, such as toString().\n\n--\n\n```js\nx.toString();\n\n//output\n[object Object]\n```\n\n???\nlet y = [];\nIf we take a look at the [[Prototype]] of the new y array, we will see that it has more properties and methods than the x object. It has inherited everything from Array.prototype.\n\n`y.__proto__;`\n[constructor: ƒ, concat: ƒ, pop: ƒ, push: ƒ, …]\n\n---\n\nclass: middle\n\n## Class Inheritance\n\n* why do use it?\n* now we dev at a meat shop\n* [Good Article](https://www.thoughtworks.com/insights/blog/composition-vs-inheritance-how-choose)\n\n---\n\nclass: middle\n\nComposition over inheritance (or composite reuse principle) in object-oriented\nprogramming is the principle that classes should achieve polymorphic behavior\nand code reuse by their composition (by containing instances of other classes\nthat implement the desired functionality) rather than inheritance from a base or\nparent class.[2] This is an often-stated principle of OOP, such as in the\ninfluential book Design Patterns.[3]\n\n---\n\nclass: middle center\n\n> Wha?\n\n---\n\n```javascript\nlet meat1 = {\n  name: "Pork Chop",\n  price: 8.33,\n  calculateTax() {\n    return this.price * 0.08;\n  }\n};\n\nlet meat2 = {\n  name: "Flank Steak",\n  price: 2.99,\n  calculateTax() {\n    return this.price * 0.08;\n  }\n};\n\nlet meat3 = {\n  name: "T-Bone",\n  price: 3.89,\n  calculateTax() {\n    return this.price * 0.08;\n  }\n};\n```\n\n---\n\nclass: middle center\n\n![inline](http://ustutorials.com/tutorials-images/Javascript-Objects-Treasure-Map.jpg)\n\n---\n\nclass: middle\n\n# Function Constructor\n\n```javascript\nvar Meat = function(name, price, cut) {\n  this.name = name;\n  this.price = price;\n  this.cut = cut;\n  this.calculateTax = function() {\n    return this.price * 0.08;\n  };\n};\n\nlet dinner = new Meat("porkchop", 10.99, "butt");\nlet steak = new Meat("steak", 10.99, "t-bone");\nlet vegan = new Meat("Soy", 10.99, "ewwww");\nconsole.log(dinner.calculateTax());\n```\n\n???\n\n```js\nfunction Produce(name, price) {\nthis.name = name;\nthis.price = price;\nthis.calculateTax = function() {\nreturn this.price \\* 0.08;\n}\n}\n\nlet apple = new Produce(\'apple\', 2.05);\nlet pinnapple = new Produce(\'pinnapple\', 5.85);\nconsole.log(apple);\n// http://jsbin.com/rosijuxexa/2/edit?js,console\n\nvar Meat = function(name, price, cut) {\nthis.name = name;\nthis.price = price;\nthis.cut = cut;\n};\nMeat.prototype = {\ncalculateTax: function() {\nreturn this.price \\* .08;\n}\n}\n```\n\n---\n\n# Still not sure?\n\n???\n\n```js\n// Initialize constructor functions\nfunction Hero(name, level) {\n  this.name = name;\n  this.level = level;\n}\n\nfunction Warrior(name, level, weapon) {\n  Hero.call(this, name, level);\n\n  this.weapon = weapon;\n}\n\nfunction Healer(name, level, spell) {\n  Hero.call(this, name, level);\n\n  this.spell = spell;\n}\n\n// Link prototypes and add prototype methods\nWarrior.prototype = Object.create(Hero.prototype);\nHealer.prototype = Object.create(Hero.prototype);\n\nHero.prototype.greet = function() {\n  return `${this.name} says hello.`;\n};\n\nWarrior.prototype.attack = function() {\n  return `${this.name} attacks with the ${this.weapon}.`;\n};\n\nHealer.prototype.heal = function() {\n  return `${this.name} casts ${this.spell}.`;\n};\n\n// Initialize individual character instances\nconst hero1 = new Warrior("Bjorn", 1, "axe");\nconst hero2 = new Healer("Kanin", 1, "cure");\n```\n\n[Link](https://www.digitalocean.com/community/tutorials/understanding-prototypes-and-inheritance-in-javascript)\n\n---\n\n#Exercise\nUse the example of Meat to create a Function Constructor for a Van. It should have the following properties.\n\n* make\n* model\n* seating (number)\n* speed\n* **AND** a method called \'increaseSpeedBy\'. This method will take 1 argument, a number, and increase the current speed by that amount, _and_ return the new speed.\n\nOnce we\'ve created our Van Class, let\'s make 3 instances of it.\n\n---\n\nclass: middle\n\n# Error Handling\n\n* Be a good developer\n* handling all possible cases.....safely\n* you only get 1 throw, no more!!!\n\n---\n\n![](https://javascript.info/article/try-catch/try-catch-flow@2x.png)\n\n---\n\nclass: middle\n\n```javascript\ntry {\n    Block of code to try\n}\ncatch(err) {\n    Block of code to handle errors\n}\nfinally {\n    Block of code to be executed regardless of the try / catch result\n}\n```\n\n---\n\nclass: middle\n\n```javascript\nlet puppies;\n\ntry {\n  let result = puppies.peedInTheToilet();\n} catch (ex) {\n  console.log("oops!");\n}\n```\n\n---\n\nclass: middle\n\n```javascript\nfunction productOrderValidationTask(productName, quantity) {\n  try {\n    if (quantity <= 0) {\n      throw new Error(\n        `You need to enter a quantity for ${productName} greater than zero!`\n      );\n    } else {\n      return true;\n    }\n  } catch (ex) {\n    console.log(`${ex.name}: ${ex.message}`);\n  }\n}\n\nproductOrderValidationTask("Milk", 2);\nproductOrderValidationTask("Cheese", 0);\n```\n\n---\n'
},fields:{slug:"/courses/coding-from-scratch/slides/JS-Class-Inheritance/"}}}]}},pathContext:{slug:"/courses/coding-from-scratch/slides/JS-Class-Inheritance/"}}}});
//# sourceMappingURL=path---courses-coding-from-scratch-slides-js-class-inheritance-f1bd0b7fc26952256532.js.map