# Interview Prep — Batch 4 Question Bank
*(New standalone file, compiled from the latest set of reviewer notes. Split into Theory and Practical, each ranked High → Medium → Low priority based on how often the topic repeated across this batch.)*

---

# 🅰️ THEORY QUESTIONS

## JavaScript

### High Priority
- Dynamic routing, `req.params` vs `req.query` — came up in nearly every reviewer's notes here
- `this` in arrow functions — can an arrow function be used as a constructor? regular vs arrow function differences
- Microtasks vs Macrotasks (event loop)
- Garbage collection — Mark-and-Sweep algorithm
- Type coercion — e.g. `"100" / "10"`, `console.log(!!5)` style trick questions
- Optional chaining (`address?.cityName`), spreading a string (`[...name]`)
- REST principles (asked 3+ times across different reviewers)
- Polyfills (asked repeatedly, still marked as weak area)
- Proxy object
- Promise combinators (what they are, not just naming them)

### Medium Priority
- Applications of closure
- `if...else` vs ternary
- Array/string prototype methods: `Object.entries()`, `Symbol()`, `Array.from()`, `flatMap()`, `Array.some()` vs `Array.every()`
- Object vs Map
- `name.reverse()` / extending `String.prototype` (asked twice — understand prototype extension mechanics)
- `use strict`
- Web API (browser-provided APIs vs JS engine)
- Array `slice()` vs `splice()`
- WeakMap/WeakSet (flagged as unclear — "weak…")
- HTTP headers — general purpose/use
- Content negotiation
- Router chaining
- Statelessness (of HTTP)

### Lower Priority
- Core modules conceptually referenced from JS side (URL, os — see Node section too)
- Events module

---

## Node.js / Express

### High Priority
- Cluster module — flagged "needs clarity" by multiple reviewers, prioritize this
- Process vs Thread, Worker thread
- Concurrency vs Parallelism
- API versioning
- Rate limiting
- CORS and security (as a combined security topic, not just CORS mechanics)
- Security via `dotenv` and `.gitignore` (environment variable hygiene)
- `express.urlencoded()`, `express.static()`, `express.noCache()` — each asked as a standalone "what does this do"
- Morgan (asked again in this batch — solidify the "why not just write your own logger" answer)

### Medium Priority
- `setHeader` vs `writeHead`
- Buffer class
- HTTP status codes — specifically the **1xx (Informational)** range, which is less commonly studied
- Handling real-time updates (e.g., WebSockets/SSE — conceptual)
- Covered query (technically Mongo but was grouped under indexing/query optimization discussions)

---

## MongoDB

### High Priority
- `$lookup` — came up 3+ times, including "practice more"
- `$facet`, `bulkWrite()` — asked repeatedly together
- Transactions, ACID properties, CAP theorem
- Indexing — types of indexes AND disadvantages of indexing (asked as a pair)
- Write concern vs Read concern
- Change streams

### Medium Priority
- `$graphLookup` (distinct from regular `$lookup` — be ready to explain the difference)
- `renameCollection`
- Journaling (flagged "needs clarity")
- `$expr`
- Single-purpose aggregation (asked twice — likely means "aggregation pipeline with one clear objective" as opposed to multi-stage generic pipelines)
- Advantage of indexing, use of compound index, drawback of indexing
- `$slice`

---

## React

### High Priority
- Redux — core theory, **Redux Thunk vs Redux Saga**, Redux working flow/data flow (asked as a full pipeline explanation, not just definitions)
- Webpack
- `useMemo` vs `useCallback`, plus **disadvantages of `useCallback`** (specifically asked — most candidates only prep the benefits)
- Built-in components in React (asked 3 times — make sure you can name and describe React's built-ins, e.g. `Fragment`, `StrictMode`, `Suspense`, `Profiler`)
- Rules of Hooks

### Medium Priority
- `useEffect` vs `useLayoutEffect`
- React Portals, React Profiler
- Limitations of React (initial load performance, SEO challenges for CSR)
- Props immutability
- Synthetic events
- Application of HOC (Higher-Order Components) — practical use case framing
- `forwardRef` — use case
- Protected routes
- Return value of `useRef`
- Class-component equivalent of `componentWillUnmount` in function components (i.e., `useEffect` cleanup)
- Latest React features — **Activity component, Server Components vs Client Components** (this is a newer/advanced topic — worth reading up on specifically since it was flagged as unexplored)

---

## DSA

### High Priority
- DFS, BFS (graph traversal — appeared multiple times)
- Recursion — flagged "get better," worth deliberate practice beyond just definitions
- Merge Sort and Quick Sort (asked together repeatedly — be ready to compare complexity/stability)
- Trie — flagged as "not covered," prioritize learning this from scratch
- Graph — applications of graph, "graph not covered" also flagged

### Medium Priority
- Max Heap, Heap deletion
- Binary Tree → BST relationship/conversion
- Applications of closure (cross-listed under JS)

---

# 🅱️ PRACTICAL / CODING QUESTIONS

## JavaScript / General Coding

### High Priority
- Remove duplicates from an array (asked in more than one variant, including "remove duplicate even numbers from array")
- `delay(3).then(name => console.log(name))` — write/explain this promise-delay utility
- Toggle a checkbox via button click (marked "not complete" — revisit)
- API endpoint to divide two numbers, using **path params** specifically (marked "not completed")
- Dynamic routing practical: filter products by price via query params —
  e.g. `/product/tv?price=40000` → return TVs under 40000; `/product/mobile?price=80000` → mobiles under 80000

### Medium Priority
- Check if an object is empty
- Find the user with the lowest salary in an array of user objects
- Find the student with the highest score from an array of objects
- Query — average mark in class 10 (Mongo aggregation, but grouped here since often asked alongside JS array practicals)

---

## DSA — Practical

### High Priority
- `isAnagram('cat', 'act')` — asked multiple times, across multiple reviewers
- Valid Parentheses (balanced brackets check)
- `isBinaryTrie()` — custom check function (Trie-related, tie this to Trie theory prep above)
- `findTarget(head, 30)` on a Linked List — search/traverse implementation

---

## React — Practical

### Medium Priority
- Implement debouncing on an input field (a live, working debounce — not just the theory)

---

## MongoDB — Practical

### Medium Priority
- Create a capped collection
- Create a TTL index
- `mongodump` / `mongorestore` — actually run these, not just define them
- Single-purpose aggregation pipeline (write one, not just describe it)

---

# 📌 Notes
1. **Cluster module**, **dynamic routing/req.params**, and **REST principles** are the single most-repeated theory items in this batch — prioritize these first if short on time.
2. **Trie and Graph** were explicitly flagged as "not covered" by more than one reviewer — if you're weak here, this is a visible gap that keeps recurring, worth a focused day of study rather than scattered review.
3. Several practicals are marked "not complete" in the source notes (toggle checkbox, remove duplicate even numbers, divide-by-path-param endpoint) — these are known unfinished items, finish them first since they're already half-attempted.
4. `useCallback` disadvantages and React Server/Client Components are newer-angle questions — most prep material only covers the "why to use" side, so this is a good differentiator to study.
