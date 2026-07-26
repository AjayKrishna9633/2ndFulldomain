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

## 📌 How to use this
1. Start with **High Priority** in each section — these show up in almost every interview log you shared.
2. For DSA and React, the **Practical** items repeat with only minor variable changes — code each one once from scratch, don't just read the solution.
3. MongoDB aggregation questions ("find 2nd highest X", "avg per group", "count matching condition") are the single most-repeated practical pattern across *all* logs — make sure you're fluent in `$group`, `$match`, `$sort`, `$limit`, `$unwind` before anything else in Mongo.
4. Several interviewers flagged **communication/explanation clarity** as a separate scoring factor — when you answer, state the concept in one sentence first, then go deeper.
