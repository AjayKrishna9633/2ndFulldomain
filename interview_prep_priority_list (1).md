# Interview Prep — Prioritized Question Bank
*(Compiled from all past mock-interview logs, ranked High → Medium → Low priority based on how frequently each topic recurred across sessions)*

Legend: **[T]** = Theory, **[P]** = Practical/Coding

---

## 🟥 JAVASCRIPT

### High Priority (asked constantly, almost every session)
- **[T]** Closures — concept, applications, drawbacks/limitations, scope chain vs closure
- **[T]** Promises — what is a promise, states, methods (`.all`, `.race`, `.any`, `.allSettled`), promise chaining, resolve/reject
- **[T]** `this` keyword — `this` in arrow functions, `this` substitution, arrow vs regular function differences
- **[T]** `call`, `apply`, `bind` — with examples
- **[T]** Currying — advantages, implementation
- **[T]** Event delegation / propagation / bubbling / capturing / stopPropagation
- **[T]** Generator functions — syntax, use cases, practicals (e.g., print 10→1, infinite odd numbers)
- **[T]** IIFE — syntax, advantages, using arrow function
- **[T]** Prototype chaining / prototype pollution / prototypal inheritance
- **[T]** `localStorage` vs `sessionStorage`
- **[T]** Rest vs Spread operator
- **[T]** Constructor functions — purpose, types, copy constructor
- **[T]** Function composition
- **[T]** Debouncing vs Throttling
- **[T]** WeakMap vs WeakSet
- **[T]** ES6/ES7 features (asked "refer more" repeatedly — go deep)
- **[T]** Polyfills (write polyfills for common array methods)
- **[T]** Proxy object — traps, use cases
- **[T]** Hoisting, Temporal Dead Zone, `var`/`let`/`const`, illegal shadowing, block vs function scope
- **[T]** Shallow copy vs Deep copy, `structuredClone`
- **[T]** First-class functions, Higher-order functions
- **[T]** Error-first callback pattern (Node-related but pure JS asked too)
- **[T]** Async/await — handling errors, using without `await`, converting callback hell → promises → async/await

### Practical (very common, prepare live-coding)
- **[P]** Find 2nd/3rd largest/highest element in array (many variants incl. "2nd highest salary if duplicates exist")
- **[P]** Remove duplicates from array/string
- **[P]** Flatten nested array / nested object
- **[P]** Convert callback hell → Promise chaining → async/await
- **[P]** Debounce/throttle implementation
- **[P]** Sum of values in (deeply) nested object — recursive
- **[P]** Generate random OTP (with constraints)
- **[P]** Object.freeze / Object.defineProperty practicals
- **[P]** Custom EventEmitter implementation
- **[P]** Implement `Promise.all` / `Promise.allSettled` from scratch
- **[P]** Array/object destructuring, immutability tasks (make object immutable, unfreeze, remove key/property)
- **[P]** Move all zeros to end of array (or similar array manipulation, min complexity)
- **[P]** Find missing/extra character between two strings

### Medium Priority
- **[T]** Coercion, `==` vs `===` edge cases (`console.log(1+ +'1')`, `[] == ![]`)
- **[T]** Factory function vs Constructor function
- **[T]** Memoization
- **[T]** Variable shadowing
- **[T]** `null` vs `undefined`, does `null` have a prototype
- **[T]** Symbol, getters/setters, encapsulation, abstraction (OOP in JS)
- **[T]** JIT compilation, JS engine vs runtime
- **[T]** Web Workers, Service Workers
- **[T]** Pure functions / side effects
- **[T]** Map vs Object, Map/Set/WeakMap/WeakSet differences
- **[T]** Optional chaining, nullish coalescing (`??` vs `??=`)
- **[T]** `eval()` and why it's dangerous
- **[T]** Decorators, generics/type assertion (TS-adjacent)
- **[T]** JSON methods, `JSON.stringify` limitations

### Lower Priority (occasional)
- **[T]** Labels, `globalThis`, boxing, internationalization
- **[T]** Array prototype chain, can Array be inherited / parent of Array
- **[T]** Copy elision, mark-and-sweep GC
- **[T]** Variadic functions, template literals, default parameters

---

## 🟧 NODE.JS

### High Priority
- **[T]** Cluster module — cluster vs fork vs spawn (asked in nearly every session)
- **[T]** Streams — types (readable/writable/duplex/transform), piping
- **[T]** Child process — creating one, exec vs execFile, child process vs worker threads vs cluster
- **[T]** Middleware — types (application vs router-level), custom middleware, error-handling middleware
- **[T]** Router chaining, Dynamic routing, path params vs query params
- **[T]** Process vs Threads, thread pool, Libuv, is Node single-threaded, concurrency vs parallelism
- **[T]** JWT — structure, signature verification, access vs refresh token, workflow
- **[T]** Rate limiting (theory + write a middleware for it)
- **[T]** Cron jobs vs `setInterval`
- **[T]** API versioning
- **[T]** Content negotiation
- **[T]** Idempotency (idempotent HTTP methods)
- **[T]** `process.nextTick()` vs `setImmediate()`
- **[T]** CORS and CSRF (deep understanding, prevention)
- **[T]** HTTP request/response structure, headers, common status codes (400/401/403)

### Practical
- **[P]** Write a router-level / application-level middleware (e.g., log all param names, block requests from a domain/IP)
- **[P]** Create a child process to run an external command
- **[P]** Build an error-handling middleware
- **[P]** Create a worker thread
- **[P]** API endpoint to divide two numbers (path & query param variants)
- **[P]** Custom EventEmitter with error handling + file write
- **[P]** Implement a rate limiter (e.g., 6 requests/min per IP)

### Medium Priority
- **[T]** `fork()` vs `spawn()` (distinct from cluster/child process framing)
- **[T]** Options method / preflight requests
- **[T]** Streams in detail — Duplex vs Transform (needs clarity per multiple logs)
- **[T]** `app.locals`, `app.all`, `app.use` vs `app.set`
- **[T]** Encryption vs Hashing, password salting
- **[T]** Reverse proxy, DNS, subdomains, pm2, nginx roles
- **[T]** Token introspection
- **[T]** Buffer class, Morgan (why not custom logger), Axios interceptors, Axios cancelToken
- **[T]** `res.send` vs `res.write`, `writeHead` vs `setHeader`
- **[T]** Promisify

### Lower Priority
- **[T]** Same-origin policy, `--env-file` flag, NVM, NPX
- **[T]** `fs` module practicals (stat, existsSync, readFileSync, link)
- **[T]** Socket basics, TCP vs UDP

---

## 🟨 MONGODB

### High Priority
- **[T]** Clustered collection (extremely frequent across almost every log)
- **[T]** Indexing — types, drawbacks, compound/multikey/hashed/geospatial/wildcard index
- **[T]** `$lookup`, `$facet`, `$bulkWrite`, `$addToSet`, `$elemMatch`, `$expr`
- **[T]** Covered query
- **[T]** Write concern vs Read concern
- **[T]** CAP theorem, Partition tolerance
- **[T]** Journaling
- **[T]** Replication vs Sharding, horizontal vs vertical sharding
- **[T]** Transactions
- **[T]** Capped collection (create/check `isCapped()`)

### Practical (aggregation-heavy — practice these hard)
- **[P]** 2nd highest salary/mark (with ties for max)
- **[P]** Average marks/age/salary per class/group
- **[P]** Students/employees matching condition (name patterns, mark ranges, using `$cond`, `$and`/`$or`)
- **[P]** Count orders/documents matching criteria (coupons used, item count, date range)
- **[P]** Create TTL index / compound index / geospatial index
- **[P]** `updateMany` with `$inc` (raise/reduce salary or marks by %)
- **[P]** `$unwind` + `$group` + `$sum`
- **[P]** Upsert query, `$pop` vs `$pull`, `$push` vs `$addToSet`

### Medium Priority
- **[T]** Views vs Materialized views
- **[T]** Embedded documents vs References (pros/cons of each)
- **[T]** GridFS
- **[T]** Change streams
- **[T]** Database profiler
- **[T]** BSON datatypes, BSON vs JSON advantages
- **[T]** `mongodump`/`mongorestore`, backup & restore
- **[T]** Normalization/Denormalization, namespace

### Lower Priority
- **[T]** Locking, concurrency control, oplog
- **[T]** Triggers in MongoDB, Mongoose/ODM

---

## 🟩 REACT

### High Priority
- **[T]** Pure Components vs `React.memo` (asked constantly)
- **[T]** Error boundaries — how they work, error handling in React
- **[T]** Synthetic events, event pooling, native vs synthetic events
- **[T]** `forwardRef`
- **[T]** `useEffect` vs `useLayoutEffect`
- **[T]** Core principles of Redux, Redux middleware, Redux thunk vs saga
- **[T]** React Fiber, reconciliation/diffing algorithm
- **[T]** Shadow DOM
- **[T]** Render props
- **[T]** Controlled vs Uncontrolled components (+ benefits of uncontrolled)
- **[T]** Custom hooks — purpose, examples, custom hook vs utils
- **[T]** Rules of Hooks (why not use in conditionals)
- **[T]** React Portals
- **[T]** Higher-Order Components (HOC) — with examples
- **[T]** `useMemo` vs `useCallback` vs `React.memo`
- **[T]** React Profiler

### Practical
- **[P]** Pass data child → parent (very frequently asked, multiple phrasing variants)
- **[P]** Pass data parent → child
- **[P]** Build a stopwatch/timer (start/stop/reset) using `useEffect`/`useReducer`
- **[P]** Custom hook for toggle / fetch API
- **[P]** Counter using `useReducer`
- **[P]** Form submission with child-to-parent data transfer
- **[P]** Nested dropdown (country → city) driven by array of objects

### Medium Priority
- **[T]** Webpack vs Babel, why code bundling is needed
- **[T]** `useRef` — advantages, storing/updating values
- **[T]** State variable vs normal variable, why state is immutable
- **[T]** Context API vs Redux (when to use which)
- **[T]** Lazy loading & code splitting, `React.Suspense`
- **[T]** `useDispatch`, `useSelector`, Redux data flow
- **[T]** Flux architecture
- **[T]** Referential equality, re-render causes/optimization
- **[T]** Routing — `useNavigate` vs `useHistory`, `Outlet`, protected routes, `MemoryRouter`
- **[T]** Why React is considered non-SEO-friendly, CSR vs SSR

### Lower Priority
- **[T]** StrictMode (why it renders twice), React 19 compiler
- **[T]** PropTypes/defaultProps, `key` prop importance
- **[T]** HTML sanitization / XSS prevention in React

---

## 🟦 DSA

### High Priority
- **[T]** Minimum Spanning Tree (asked in nearly every log)
- **[T]** Load factor, collision resolution — separate chaining, open/linear/quadratic probing, double hashing
- **[T]** Applications of Heap, Hash Table, Stack, Queue, Singly/Doubly Linked List
- **[T]** Degree of a node, Height vs Depth of a node
- **[T]** AVL Tree, Balanced Tree, Full/Perfect/Complete/Degenerate Binary Tree
- **[T]** Asymptotic notations (Big-O, Big-Theta)
- **[T]** BFS vs DFS (complexity, use cases), Graph vs Tree, Types of graphs

### Practical (classic coding rounds — practice these first)
- **[P]** Find height of a Binary Tree / BST
- **[P]** Find 2nd largest/smallest element (array, BST, or using reduce)
- **[P]** Heap Sort, Quick Sort, Merge Sort implementation
- **[P]** Check if binary search array contains target; else return insertion index (classic "search insert position")
- **[P]** Check if two binary trees are identical
- **[P]** Detect cycle in undirected graph (BFS/DFS)
- **[P]** Reverse a string/array using recursion or Stack
- **[P]** Check balanced parentheses using Stack
- **[P]** Sort a stack using a temporary stack
- **[P]** BST implementation (insert, search, display)
- **[P]** Palindrome check (recursive)
- **[P]** Middle element of Linked List, reverse a Linked List

### Medium Priority
- **[T]** Dijkstra's, Prim's, Bellman-Ford, Tarjan's, A* algorithms
- **[T]** Trie — implementation, delete word, serialization
- **[T]** Segment Tree, Red-Black Tree, Priority Queue
- **[T]** Divide and Conquer, Backtracking
- **[T]** Recursion — advantages/disadvantages, tail recursion
- **[T]** Static vs Dynamic memory allocation, Stack vs Heap memory

### Lower Priority
- **[T]** Monotonic stack/queue, sparse/jagged arrays
- **[T]** Adjacency list vs matrix vs edge list (space/time tradeoffs)
- **[T]** Bounded queues, minimal perfect hash functions

---

---
---

# PART 2 — Additional Important Topics
*(Cross-checked against your full curriculum doc — these are topics/questions that did NOT appear in the interview-log analysis above but are clearly core syllabus items and likely to come up. Organized the same way, high→low priority.)*

---

## 🟥 JAVASCRIPT — Additional

### High Priority
- **[T]** Event loop — call stack, callback/task queue, **microtask queue** (and why microtasks run before macrotasks), starvation, memory heap
- **[T]** Execution context — variable environment vs thread of execution, global vs local EC, two phases (memory creation, code execution)
- **[T]** JS engine internals — JIT compilation, Interpreter vs Compiler, Abstract Syntax Tree (AST), concurrency model
- **[T]** `addEventListener`, `event.target` (id/tagName, pros & cons of using `target`), order of DOM parsing
- **[T]** Garbage collection — mark-and-sweep, reachability, generational/incremental/idle-time collection
- **[T]** Function types — statement vs expression vs declaration, anonymous fn, named function expression, decorator functions
- **[T]** Pure function — rules, pros/cons, pure vs impure
- **[T]** `Set`/`Map` — full method set (`add/has/delete/clear/keys/values/entries`), Object vs Map, WeakSet/WeakMap (why keys are private/weak)
- **[T]** `flat()`, `flatMap()`, `reduceRight()`, `copyWithin()`
- **[T]** Type coercion — implicit vs explicit, truthy/falsy values
- **[T]** Strict mode in JS
- **[T]** Composition vs Inheritance

### Medium Priority
- **[T]** `querySelector`, `textContent` vs `innerText`
- **[T]** Wrapper objects, `0` vs `new Number(0)`, numeric literals (`1_000_000`, `1e9`, hex/binary/octal, `toString(base)`, `Math.trunc`)
- **[T]** How to get an enum-like structure in JS (no native `enum`)
- **[T]** Bitwise operators (AND/OR) and real-world uses
- **[T]** `for...in` vs `for...of`, labelled statements (`break`/`continue` with labels)
- **[T]** Inversion of control (in the context of callbacks)
- **[T]** Promise `.finally()`, `.catch()`, thenables, `promisify`
- **[T]** DOM vs BOM
- **[T]** Message queue (vs task/microtask queue)
- **[T]** `Object.assign`, `structuredClone`, `_.cloneDeep`, `__proto__`, `in` operator
- **[T]** `Symbol` — global symbol registry, `Symbol.iterator`, `Symbol.toPrimitive`
- **[T]** `Symbol.iterator` / custom iterables

### Lower Priority
- **[T]** `defer` vs `async` script attributes
- **[T]** Interpreted vs compiled languages, server-side vs client-side code
- **[T]** TCP/IP, DNS (conceptual, JS-adjacent)
- **[T]** Various quick-fire VS pairs worth having a one-liner ready for: `==` vs `===`, sync vs async, `while` vs `do-while`, `forEach` vs `map`, parameters vs arguments, `undefined` vs `null`, keywords vs identifiers, identifiers vs variables

---

## 🟧 NODE.JS / EXPRESS — Additional

### High Priority
- **[T]** Why V8 engine, how Node works internally, Node's module system (CommonJS vs ESM `import/export`)
- **[T]** Globals — `__dirname`, `__filename`, `module`, `process`
- **[T]** Core vs local vs third-party modules, `module.exports` vs `require`
- **[T]** `worker_threads` — creating a worker, `parentPort`, thread pool, **cluster vs worker thread** (this distinction is asked a lot and often confused)
- **[T]** Child process methods in full: `fork`, `exec`, `execFile`, `spawn` — and when to use each
- **[T]** Express middleware types in full: application-level, **third-party** (morgan, multer), router-level, **built-in**, error-handling (`err.statusCode`, `err.message`)
- **[T]** HTTP deep dive — stateless protocol, request/response cycle, default ports, MIME types, full status code families (1xx–5xx), safe methods vs idempotent methods
- **[T]** Sessions vs Cookies — `express-session` (secret, resave, saveUninitialized), `cookie-parser`
- **[T]** XSS, CSRF (referral header), SQL injection & prepared statements

### Medium Priority
- **[T]** `npm` vs `npx`, `nodemon` scripts (`start`, `dev`), `package.json` vs `package-lock.json`
- **[T]** REPL / CLI usage
- **[T]** Buffers (what they are, why needed alongside streams)
- **[T]** Cron syntax breakdown (`* * * * *` — second/minute/hour/day/month/weekday)
- **[T]** CORS preflight — actual headers involved (`Access-Control-Allow-Origin`, `Access-Control-Allow-Methods`)
- **[T]** REST API vs RESTful principles, fragment identifiers
- **[T]** EJS / server-side rendering basics (view engine, partials, `<% %>` syntax)
- **[T]** VS pairs: API vs HTTP, API vs SSR, HTTP vs HTTPS, URI vs URL vs URN, GET vs POST, PUT vs PATCH, SSL vs TLS, session vs cookies

### Lower Priority
- **[T]** Built-in modules — `os`, `path` (`join`, `basename`, `resolve`), `fs` sync vs async variants, `http.createServer()`

---

## 🟨 MONGODB — Additional

### High Priority
- **[T]** SQL vs NoSQL fundamentals, why MongoDB is document-based/non-relational
- **[T]** Storage engines — WiredTiger, In-memory, MMAPv1
- **[T]** Replication architecture in depth — primary/secondary nodes, arbiter, **election process**, heartbeat, **replication lag**, oplog, sync vs async vs majority-commit replication
- **[T]** Sharding architecture in depth — `mongos` router, config servers, **shard key** (hotspots, hashed vs normal), hashed/ranged/zone sharding, autobalancer, scatter-gather
- **[T]** ACID properties explicitly (Atomicity, Consistency, Isolation, Durability)
- **[T]** Aggregation pipeline mechanics — how it works, **100MB memory limit & `allowDiskUse`**, `$project`, `$out`, distinct
- **[T]** Common "VS" comparisons (these get asked as rapid-fire): `$or` vs `$in`, `drop()` vs `remove()`, `findAndModify()` vs `findOneAndUpdate()`, join vs `$lookup`, `bulkWrite` vs `insertMany`, vertical vs horizontal scaling, replication vs replica set

### Medium Priority
- **[T]** BSON datatypes in detail — `ObjectId` structure (timestamp + random + counter), `Decimal128`, Regex type, MinKey/MaxKey, Binary data
- **[T]** Max document size (16MB) and implications
- **[T]** Index management — `getIndex()`, `dropIndex()`, `reIndex()`, `renameIndex`, index options (`background`, `unique`, `name`)
- **[T]** Data modeling — embedding vs referencing, one-to-one/one-to-many/**one-to-squillions**/many-to-many
- **[T]** MapReduce — what it's used for (legacy alternative to aggregation)
- **[T]** Practical interview questions: *"what do you do when a query becomes slow?"*, *"how do you handle files getting too big?"*, *"how do you backup/restore?"*, *"pros/cons of normalizing data in MongoDB?"*

### Lower Priority
- **[T]** GridFS, Journal/WAL, B-Tree indexing structure
- **[T]** Mongo utilities: `mongoexport`, `mongoimport`, `mongodump`, `mongorestore`, `mongostat`, `mongotop`, `mongooplog`
- **[T]** Network components in a MongoDB deployment — load balancer, firewall
- **[T]** Soft deleting, `explain()`, database profiler

---

## 🟩 REACT — Additional

### High Priority
- **[T]** Virtual DOM vs Real DOM, **Reconciliation** (how it works), Diffing algorithm, React Fiber (incremental rendering)
- **[T]** Rendering lifecycle in modern React — **Trigger → Render → Commit**, batching updates
- **[T]** Full class-component lifecycle methods (still asked!) — `getDerivedStateFromProps`, `shouldComponentUpdate`, `getSnapshotBeforeUpdate`, `componentDidCatch`/`getDerivedStateFromError` for error handling
- **[T]** Props vs State, props are immutable, prop drilling
- **[T]** SPA vs MPA, CSR vs SSR vs Static vs ISR
- **[T]** State internals — queueing updates, updater function, local mutation, lifting state up
- **[T]** JSX rules, HTML vs JSX differences
- **[T]** Webpack — module bundler, code splitting, **Hot Module Replacement (HMR)**, tree shaking; Babel — transpilation, plugins, runtime polyfills

### Medium Priority
- **[T]** `useImperativeHandle`, `flushSync`, `useDebugValue`, `useTransition`, `useDeferredValue`, `useId` (newer hooks — good to at least define)
- **[T]** React Router types — `BrowserRouter` vs `HashRouter` vs `MemoryRouter` vs `StaticRouter`; `NavLink` (`isActive`, `end`), `useSearchParams`, `useOutletContext`, nested routing
- **[T]** `PropTypes` vs TypeScript for type-checking
- **[T]** Code splitting — route-based vs component-based, `React.lazy` + `Suspense` + fallback UI
- **[T]** Context API — Provider/Consumer pattern, `useContext` + `useReducer` combo as a Redux-lite pattern
- **[T]** Declarative vs Imperative UI

### Lower Priority
- **[T]** Newer/experimental hooks: `useEffectEvent`, `useOptimistic`, `useFormStatus` (worth a one-line definition each)
- **[T]** Immer (immutability helper library)

---

## 🟦 DSA — Additional

### High Priority
- **[T]** Binary Search — iterative **and recursive** implementation (frequently asked as a live-code)
- **[T]** Dynamic Programming — memoization vs bottom-up/tabulation approach
- **[T]** Big-O family in full — constant, logarithmic, linear, quadratic, cubic, exponential (be ready to classify snippets)
- **[T]** Memory model — stack vs heap (primitives on stack, references on heap), contiguous vs non-contiguous memory allocation
- **[T]** Sorting deep-dive — **Quicksort** (partition method, pivot selection strategies), Merge Sort (divide & conquer), Merge vs Quick Sort tradeoffs
- **[T]** Hash table collision handling — separate chaining vs open addressing (linear probing, quadratic probing, **double hashing**, clustering), plus advanced: cuckoo hashing, Robin Hood hashing
- **[T]** Graph algorithms — **Kruskal's**, **Prim's**, **Dijkstra's**, Bellman-Ford, **Topological Sort**, Floyd-Warshall, Bipartite check, Max Flow (Ford-Fulkerson) — know at least the use-case and complexity of each

### Medium Priority
- **[T]** Tree terminology precision — degree, depth, height, subtree, ancestor/descendant (interviewers test exact definitions)
- **[T]** Tree types by structure — complete/full/perfect/**degenerate** (left-skew vs right-skew)
- **[T]** Balanced trees beyond AVL — Red-Black Tree, B-Tree/B+ Tree, Merkle Tree (conceptual only)
- **[T]** Trie — string vs trie efficiency, compressed trie / radix tree, prefix vs suffix tree
- **[T]** Stack/Queue variants — stack overflow/underflow, array-based vs linked-list-based; Queue types: circular, priority, **deque** (input/output restricted), blocking queue
- **[T]** Graph representation — adjacency list vs adjacency matrix (space/time tradeoffs), graph types (weighted/unweighted, cyclic, bipartite, disconnected)
- **[T]** Infix, Prefix (Polish), Postfix (Reverse Polish) notation — conversion & evaluation

### Lower Priority
- **[T]** Huffman's algorithm (concept only), Sparse matrices, Multi-linked lists
- **[T]** Pointers in DS, void pointer (more C/C++ flavored but occasionally asked)
- **[T]** Lexical analysis basics — lexeme, pattern, token (compiler-adjacent, low frequency)
- **[T]** "Fastest sorting algorithm" style trick questions — answer should discuss context (data size, nearly-sorted, stability needs) rather than naming one algorithm

---

## 📌 How to use this
1. Start with **High Priority** in each section — these show up in almost every interview log you shared.
2. For DSA and React, the **Practical** items repeat with only minor variable changes — code each one once from scratch, don't just read the solution.
3. MongoDB aggregation questions ("find 2nd highest X", "avg per group", "count matching condition") are the single most-repeated practical pattern across *all* logs — make sure you're fluent in `$group`, `$match`, `$sort`, `$limit`, `$unwind` before anything else in Mongo.
4. Several interviewers flagged **communication/explanation clarity** as a separate scoring factor — when you answer, state the concept in one sentence first, then go deeper.
