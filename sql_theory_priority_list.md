# SQL — Theory Question Priority List
*(Compiled from all reviewer notes in the SQL weekly tracking doc. Ranked High → Medium → Low based on how often each topic was actually asked across reviewers.)*

---

## 🟥 High Priority — asked constantly, across nearly every reviewer

- **Normalization** — what it is, why it's needed, and all normal forms in order: **1NF → 2NF → 3NF → BCNF** (and be ready for "what comes after BCNF" — 4NF/5NF), plus **drawbacks of normalization** (asked as its own follow-up question multiple times)
- **ACID properties** — explain each (Atomicity, Consistency, Isolation, Durability) in detail; be ready for the trick follow-up *"does atomicity support a partial job?"*
- **Keys** — Primary key vs Foreign key, Candidate key, Super key, **Composite key**, Unique key vs Primary key (this comparison specifically was asked repeatedly)
- **Command categories** — DDL vs DML vs DCL vs TCL vs DQL, with examples of each
- **Transactions** — what they are, give a worked example (one reviewer specifically asked for an example *without* using a payment-gateway analogy — have a generic one ready)
- **Joins** — full picture: Inner, Outer (Left/Right/Full), Cross, Self, Equi vs Non-equi join
- **Subqueries** — Correlated vs Non-correlated subquery (asked as an explicit pair repeatedly)
- **Constraints** — types of constraints and why we use them
- **Indexing** — what an index is, syntax, **Clustered vs Non-Clustered index**, and general drawbacks/tradeoffs of indexing
- **Isolation levels** — what they are, and the different levels (Read Uncommitted, Read Committed, Repeatable Read, Serializable)

---

## 🟧 Medium-High Priority

- **Views vs Materialized Views**
- **Stored Procedures** — what they are and when to use them
- **Triggers** — what they are, use cases
- **Cascade** — what `ON DELETE CASCADE` / `ON UPDATE CASCADE` do
- **Common Table Expressions (CTE)** — asked in more than one review
- **Union vs Union All**, plus **Intersect** and **Minus** as a set
- **Functional dependency** — concept, and how it underlies normalization
- **Delete vs Truncate**
- **Char vs Varchar**
- **DBMS vs RDBMS**, and **SQL vs NoSQL**
- **Redundancy** — what it is and how normalization addresses it
- **Order of execution** of a SQL query (FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY) — asked as a standalone question, not just implied
- **Partitioning** (asked twice, distinct from indexing — be ready to contrast the two)
- **SQL Injection** — what it is, and how prepared statements/parameterized queries prevent it
- **Data integrity** — how it's ensured (constraints, keys, transactions)

---

## 🟨 Medium Priority

- **Cursor** — what it is and when it's used
- **Aggregate functions** vs **Scalar functions** — the distinction, not just examples
- **Durability** (ACID) — asked as a standalone deep-dive beyond the general ACID explanation
- **Terminology check** — "what are rows/columns also called?" (tuples/records and attributes/fields) — a surprisingly common quick-fire question
- **What is a function in SQL?** (user-defined functions, distinct from stored procedures)
- **3-Schema architecture** (external/conceptual/internal levels)
- **Relationships** — One-to-One, One-to-Many, Many-to-Many (conceptual, distinct from the join mechanics)

---

## 🟩 Lower Priority (asked occasionally, still worth a one-line answer)

- **Closure** (in the functional-dependency/relational-algebra sense, not JS closures)
- **GRANT and REVOKE** (DCL commands)
- **Union vs Join** general distinction (if not already covered by the Union/Union All comparison)

---

## 📌 Notes
1. **Normalization, ACID, and Keys (PK/FK/candidate/super/composite)** are the three most-repeated theory clusters across every single reviewer's notes — treat these as non-negotiable, know them cold with examples.
2. Several reviewers explicitly flagged candidates as **"lacks clarity" on ACID** and **isolation levels** — these are common weak spots, so budget extra review time here even though they're already high-priority.
3. A few questions were asked as deliberate **pairs/contrasts** rather than standalone definitions — make sure your answers explicitly compare rather than just define each side separately: Primary key vs Unique key, Correlated vs Non-correlated subquery, Union vs Union All, Delete vs Truncate, Clustered vs Non-Clustered index.
